import { auth, firestore } from "@/firebaseConfig";
import { FinancialEducation } from "@/constants/Types";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Fetch all financial education resources
export const getAllFinancialEducationResources = async (): Promise<
  FinancialEducation[]
> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(
      collection(firestore, "financialEducation"),
    );
    const resources = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        contentLink: data.contentLink,
        imageSrc: data.imageSrc,
      } as FinancialEducation;
    });

    return resources;
  } catch (error) {
    console.error("Error fetching financial education resources:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a financial education resource by ID
export const getFinancialEducationResourceById = async (
  id: string,
): Promise<FinancialEducation | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialEducation", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title,
        contentLink: data.contentLink,
        imageSrc: data.imageSrc,
      } as FinancialEducation;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching financial education resource:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new financial education resource
export const createFinancialEducationResource = async (
  resource: FinancialEducation,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "financialEducation"), resource);
  } catch (error) {
    console.error("Error creating financial education resource:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing financial education resource
export const updateFinancialEducationResource = async (
  id: string,
  updatedResource: Partial<FinancialEducation>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialEducation", id);
    await updateDoc(docRef, updatedResource);
  } catch (error) {
    console.error("Error updating financial education resource:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a financial education resource
export const deleteFinancialEducationResource = async (
  id: string,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "financialEducation", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting financial education resource:", error);
    throw new Error("Internal Server Error");
  }
};
