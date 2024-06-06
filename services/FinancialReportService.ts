import { auth, firestore } from "@/firebaseConfig";
import { FinancialReport } from "@/constants/Types";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Fetch all financial reports
export const getAllFinancialReports = async (): Promise<FinancialReport[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(
      collection(firestore, "financialReports"),
    );
    const reports = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userID: data.userID,
        date: data.date.toDate(), // Assuming 'date' is a Firestore Timestamp
        content: data.content,
      } as FinancialReport;
    });

    return reports;
  } catch (error) {
    console.error("Error fetching financial reports:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a financial report by ID
export const getFinancialReportById = async (
  id: string,
): Promise<FinancialReport | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialReports", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        userID: data.userID,
        date: data.date.toDate(), // Assuming 'date' is a Firestore Timestamp
        content: data.content,
      } as FinancialReport;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching financial report:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new financial report
export const createFinancialReport = async (
  report: FinancialReport,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "financialReports"), report);
  } catch (error) {
    console.error("Error creating financial report:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing financial report
export const updateFinancialReport = async (
  id: string,
  updatedReport: Partial<FinancialReport>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialReports", id);
    await updateDoc(docRef, updatedReport);
  } catch (error) {
    console.error("Error updating financial report:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a financial report
export const deleteFinancialReport = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialReports", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting financial report:", error);
    throw new Error("Internal Server Error");
  }
};
