import { auth, firestore } from "@/firebaseConfig";
import { Transaction } from "@/constants/Types";
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

// Fetch all transactions
export const getAllTransactions = async (): Promise<Transaction[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "transactions"));
    const transactions = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        accountID: data.accountID as DocumentReference,
        type: data.type,
        amount: data.amount,
        category: data.category,
        isRecurring: data.isRecurring,
        recurringEach: data.recurringEach,
        date: data.date.toDate(),
        description: data.description,
      } as Transaction;
    });

    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a transaction by ID
export const getTransactionById = async (
  id: string,
): Promise<Transaction | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "transactions", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        accountID: data.accountID as DocumentReference,
        type: data.type,
        amount: data.amount,
        category: data.category,
        isRecurring: data.isRecurring,
        recurringEach: data.recurringEach,
        date: data.date.toDate(),
        description: data.description,
      } as Transaction;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new transaction
export const createTransaction = async (
  transaction: Transaction,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "transactions"), transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing transaction
export const updateTransaction = async (
  id: string,
  updatedTransaction: Partial<Transaction>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "transactions", id);
    await updateDoc(docRef, updatedTransaction);
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a transaction
export const deleteTransaction = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "transactions", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw new Error("Internal Server Error");
  }
};
