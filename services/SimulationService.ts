import { auth, firestore } from "@/firebaseConfig";
import { Simulation } from "@/constants/Types";
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

// Fetch all simulations
export const getAllSimulations = async (): Promise<Simulation[]> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "simulations"));
    const simulations = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userID: data.userID as DocumentReference,
        type: data.type,
        input: data.input,
        result: data.result,
      } as Simulation;
    });

    return simulations;
  } catch (error) {
    console.error("Error fetching simulations:", error);
    throw new Error("Internal Server Error");
  }
};

// Fetch a simulation by ID
export const getSimulationById = async (
  id: string,
): Promise<Simulation | null> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "simulations", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        userID: data.userID as DocumentReference,
        type: data.type,
        input: data.input,
        result: data.result,
      } as Simulation;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching simulation:", error);
    throw new Error("Internal Server Error");
  }
};

// Create a new simulation
export const createSimulation = async (
  simulation: Simulation,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    await addDoc(collection(firestore, "simulations"), simulation);
  } catch (error) {
    console.error("Error creating simulation:", error);
    throw new Error("Internal Server Error");
  }
};

// Update an existing simulation
export const updateSimulation = async (
  id: string,
  updatedSimulation: Partial<Simulation>,
): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "simulations", id);
    await updateDoc(docRef, updatedSimulation);
  } catch (error) {
    console.error("Error updating simulation:", error);
    throw new Error("Internal Server Error");
  }
};

// Delete a simulation
export const deleteSimulation = async (id: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "simulations", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting simulation:", error);
    throw new Error("Internal Server Error");
  }
};
