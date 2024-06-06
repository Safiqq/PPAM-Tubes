import { Image, Pressable, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "@/services/AuthService";

export default function SignInScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      if (email == "") {
        alert("Email tidak boleh kosong!");
      } else if (password == "") {
        alert("Password tidak boleh kosong!");
      } else {
        await signIn({ email, password });
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
      {/* <ScrollView className='flex-1'> */}
      <View
        className="absolute z-10 w-full bg-white"
        style={{ height: insets.top }}
      />
      <Image
        className="absolute"
        source={require("@/assets/images/log-bg.png")}
      />
      <View className="h-full items-center justify-center">
        <LexendText bold={true} className="text-[36px]">
          Login
        </LexendText>
        <Spacer size={100} />
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
          <Spacer size={16} />
          <LexendText className="text-[20px]">
            Password
            <LexendText className="text-[20px] text-[#EF4E4E]">*</LexendText>
          </LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-12 w-full rounded-[24px] border px-4 text-[16px]"
            secureTextEntry={true}
            onChangeText={(newText) => setPassword(newText)}
            defaultValue=""
            autoComplete="password"
          />
          <Spacer size={172} />
          <Pressable
            className="rounded-[32px] bg-[#76C063]"
            onPress={() => handleSignIn()}
          >
            <LexendText className="py-4 text-center text-[16px]">
              Login
            </LexendText>
          </Pressable>
          <Spacer size={16} />
          <LexendText className="text-center text-[16px]">
            Don't have an account?
          </LexendText>
          <Spacer size={4} />
          <Link href="/signup" asChild>
            <LexendText className="text-center text-[16px] text-[#76C063] underline">
              Register
            </LexendText>
          </Link>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
