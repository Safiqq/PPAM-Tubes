import { Image, Pressable, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Link } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useState } from "react";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Sign in berhasil!");
    } catch (error: any) {
      console.log(error);
      alert("Sign in gagal: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <ScrollView className='flex-1'> */}
      <Image source={require("@/assets/images/log-bg.png")} />
      <View
        className="absolute mt-8 h-full w-full items-center justify-center"
        paddingTop={insets.top}
      >
        <LexendText bold={true} className="text-[36px]">
          Login
        </LexendText>
        <Spacer size={100} />
        <View className="w-full px-11">
          <LexendText className="text-[20px]">Email</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={""}
          />
          <Spacer size={16} />
          <LexendText className="text-[20px]">Password</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border text-[16px]"
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={""}
          />
          <Spacer size={172} />
          <Link href="/home" asChild>
            <Pressable
              className="rounded-[32px] bg-[#76C063]"
              onPress={() => signIn()}
            >
              <LexendText className="py-4 text-center text-[16px]">
                Login
              </LexendText>
            </Pressable>
          </Link>
          <Spacer size={16} />
          <LexendText className="text-center text-[16px]">
            Don't have an account?
          </LexendText>
          <Spacer size={4} />
          <Link href="/signup" asChild>
            <LexendText className="text-center text-[16px] text-[#76C063]">
              Register
            </LexendText>
          </Link>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
