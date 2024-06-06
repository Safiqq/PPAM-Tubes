import { auth, firestore } from "@/firebaseConfig";
import { Tutorial } from "@/constants/Types";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Fetch all tutorials
export const getAllTutorials = async (): Promise<Tutorial[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "tutorials"));
    const tutorials = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        content: data.content,
      } as Tutorial;
    });

    return tutorials;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a tutorial by ID
export const getTutorialById = async (id: string): Promise<Tutorial | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "tutorials", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title,
        content: data.content,
      } as Tutorial;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching tutorial:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new tutorial
export const createTutorial = async (tutorial: Tutorial): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "tutorials"), tutorial);
  } catch (error) {
    console.error("Error creating tutorial:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing tutorial
export const updateTutorial = async (
  id: string,
  updatedTutorial: Partial<Tutorial>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "tutorials", id);
    await updateDoc(docRef, updatedTutorial);
  } catch (error) {
    console.error("Error updating tutorial:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a tutorial
export const deleteTutorial = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "tutorials", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting tutorial:", error);
    throw new Error("Internal Server Error");
  }
};
