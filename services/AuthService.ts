import { auth, firestore } from "@/firebaseConfig";
import { User } from "@/constants/Types";
import { signInWithEmailAndPassword, signOut as logOut } from "@firebase/auth";
import { doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { z } from "zod";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  try {
    loginSchema.parse({ email, password });
    const result = await signInWithEmailAndPassword(auth, email, password);

    return result;
  } catch (error) {
    throw "Gagal masuk ke akun"
  }
};

export const signUp = async ({
  email,
  password,
  name,
  referralCode,
}: {
  email: string;
  password: string;
  name: string;
  referralCode: string;
}) => {
  const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    name: z.string(),
    referralCode: z.string(),
  });

  try {
    registerSchema.parse({ email, password, name, referralCode });
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(firestore, `users/${result.user.uid}`), {
      name: name,
      referralCode: referralCode,
    });

    return result;
  } catch (error) {
    throw "Gagal membuat akun";
  }
};

export async function getUserData() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!auth.currentUser) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      doc(firestore, `users/${auth.currentUser.uid}`),
      (doc) => {
        const data = doc.data();
        if (data) {
          setUser(data as User);
        }
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { user, loading, error };
}

export async function getUserDataOnce() {
  try {
    if (!auth.currentUser) {
      throw new Error("User is not logged in");
    }

    const docRef = doc(firestore, `users/${auth.currentUser.uid}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        email: auth.currentUser.email,
        ...docSnap.data(),
      } as User;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

export const signOut = () => {
  try {
    const status = logOut(auth);
  } catch (err) {
    // An error happened.
    if (err instanceof z.ZodError) {
      throw err.errors.map((e) => e.message).join("\n");
    } else {
      throw "Internal server error";
    }
  }
};
