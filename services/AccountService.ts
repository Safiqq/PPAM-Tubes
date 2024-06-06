import { auth, firestore } from "@/firebaseConfig";
import { Account } from "@/constants/Types";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Fetch all accounts
export const getAllAccounts = async (): Promise<Account[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "accounts"));
    const accounts = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        balance: data.balance,
      } as Account;
    });

    return accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch an account by ID
export const getAccountById = async (id: string): Promise<Account | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "accounts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.name,
        balance: data.balance,
      } as Account;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching account:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new account
export const createAccount = async (account: Account): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "accounts"), account);
  } catch (error) {
    console.error("Error creating account:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing account
export const updateAccount = async (
  id: string,
  updatedAccount: Partial<Account>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "accounts", id);
    await updateDoc(docRef, updatedAccount);
  } catch (error) {
    console.error("Error updating account:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete an account
export const deleteAccount = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "accounts", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting account:", error);
    throw new Error("Internal Server Error");
  }
};
