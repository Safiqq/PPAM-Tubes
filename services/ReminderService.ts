import { auth, firestore } from "@/firebaseConfig";
import { Reminder } from "@/constants/Types";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  DocumentReference,
} from "firebase/firestore";

// Fetch all reminders
export const getAllReminders = async (): Promise<Reminder[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "users/" + auth.currentUser.uid + "/reminders"));
    const reminders = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userID: data.userID as DocumentReference,
        title: data.title,
        date: data.date.toDate(), // Assuming 'date' is a Firestore Timestamp
        type: data.type,
        description: data.description,
      } as Reminder;
    });
    reminders.sort((a, b) => b.date.getTime() - a.date.getTime());

    return reminders;
  } catch (error) {
    console.error("Error fetching reminders:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a reminder by ID
export const getReminderById = async (id: string): Promise<Reminder | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "users/" + auth.currentUser.uid + "/reminders", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        userID: data.userID as DocumentReference,
        title: data.title,
        date: data.date.toDate(), // Assuming 'date' is a Firestore Timestamp
        type: data.type,
        description: data.description,
      } as Reminder;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching reminder:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new reminder
export const createReminder = async (reminder: Reminder): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    reminder.userID = doc(firestore, "users", auth.currentUser.uid) as DocumentReference,
    await addDoc(collection(firestore, "users/" + auth.currentUser.uid + "/reminders"), reminder);
    console.log("success")
  } catch (error) {
    console.error("Error creating reminder:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing reminder
export const updateReminder = async (
  id: string,
  updatedReminder: Partial<Reminder>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "users/" + auth.currentUser.uid + "/reminders", id);
    await updateDoc(docRef, updatedReminder);
  } catch (error) {
    console.error("Error updating reminder:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a reminder
export const deleteReminder = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "users/" + auth.currentUser.uid + "/reminders", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting reminder:", error);
    throw new Error("Internal Server Error");
  }
};
