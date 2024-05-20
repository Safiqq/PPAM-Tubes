import { Image, Pressable, View } from "react-native";
import { Link } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Spacer from "@/components/Spacer";

export default function SignUpScreen() {
  const insets = useSafeAreaInsets();
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    try {
      // const response = "tes"
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response);
      setIsSignUpSuccess(true);
      alert("Sign up berhasil!");
    } catch (error: any) {
      console.log(error);
      alert("Sign up gagal: " + error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image source={require("@/assets/images/log-bg.png")} />
      <View
        className="absolute mt-8 h-full w-full items-center justify-center"
        paddingTop={insets.top}
      >
        <LexendText bold={true} className="text-[36px]">
          Create Account
        </LexendText>
        <Spacer size={44} />
        <View className="w-full px-11">
          <LexendText className="text-[20px]">Email</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={""}
          />
          <Spacer size={12} />
          <LexendText className="text-[20px]">Name</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setName(newText)}
            defaultValue={name}
          />
          <Spacer size={12} />
          <LexendText className="text-[20px]">Password</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
          />
          <Spacer size={12} />
          <LexendText className="text-[20px]">Referral Code</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setReferralCode(newText)}
            defaultValue={referralCode}
          />
          <Spacer size={72} />
          <Link href="/home" asChild>
            <Pressable
              onPress={() => signUp()}
              className="rounded-[24px] bg-[#76C063] py-4"
            >
              <LexendText className="text-center text-[16px]">
                Create an Account
              </LexendText>
            </Pressable>
          </Link>
          <Spacer size={16} />
          <LexendText className="text-center text-[16px]">
            Already have an account?
          </LexendText>
          <Spacer size={4} />
          <Link href="/signin" asChild>
            <LexendText className="text-center text-[16px] text-[#76C063] underline">
              Sign in
            </LexendText>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
