import { ImageBackground, Pressable, View } from "react-native";
import { Link, useRouter } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import React, { useState } from "react";
import Spacer from "@/components/Spacer";
import { signUp } from "@/services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUpScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isPasswordClicked, setIsPasswordClicked] = useState(false);

  const handleSignUp = async () => {
    try {
      if (email == "") {
        alert("Email tidak boleh kosong!");
      } else if (name == "") {
        alert("Nama tidak boleh kosong!");
      } else if (password == "") {
        alert("Password tidak boleh kosong!");
      } else {
        await signUp({ email, password, name, referralCode });
        AsyncStorage.setItem("email", email);
        AsyncStorage.setItem("password", password);
        router.push({
          pathname: "/home",
        });
      }
    } catch (error: any) {
      alert(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="absolute z-10 w-full bg-white"
        style={{ height: insets.top }}
      />
      <ImageBackground
        className="h-full items-center justify-center"
        source={require("@/assets/images/log-bg.png")}
      >
        <LexendText bold={true} className="text-[36px]">
          Create Account
        </LexendText>

        <Spacer size={44} />

        <View className="w-full px-11">
          <LexendText className="text-[20px]">
            Email
            <LexendText className="text-[20px] text-[#EF4E4E]">*</LexendText>
          </LexendText>

          <Spacer size={8} />

          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue=""
            autoFocus={true}
            autoComplete="email"
          />

          <Spacer size={12} />

          <LexendText className="text-[20px]">
            Nama Lengkap
            <LexendText className="text-[20px] text-[#EF4E4E]">*</LexendText>
          </LexendText>

          <Spacer size={8} />

          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setName(newText)}
            defaultValue={name}
            autoComplete="name"
          />

          <Spacer size={12} />

          <LexendText className="text-[20px]">
            Password
            <LexendText className="text-[20px] text-[#EF4E4E]">*</LexendText>
          </LexendText>

          <Spacer size={8} />

          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
            onPressOut={() => setIsPasswordClicked(true)}
            autoComplete="password-new"
          />

          <Spacer size={4} />

          {isPasswordClicked && password.length < 8 && (
            <LexendText className="text-[#EF4E4E]">
              Password harus mengandung minimal 8 karakter
            </LexendText>
          )}

          <Spacer size={12} />

          <LexendText className="text-[20px]">Kode Referral</LexendText>

          <Spacer size={8} />

          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            onChangeText={(newText) => setReferralCode(newText)}
            defaultValue={referralCode}
          />

          <Spacer size={72} />

          <Pressable
            onPress={handleSignUp}
            className="rounded-[24px] bg-[#76C063] py-4"
          >
            <LexendText className="text-center text-[16px]">
              Create an Account
            </LexendText>
          </Pressable>

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
      </ImageBackground>
    </SafeAreaView>
  );
}
