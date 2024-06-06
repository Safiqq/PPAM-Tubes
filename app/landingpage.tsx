import { Image, Pressable, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";

import { View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "@/services/AuthService";

export default function LandingScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    async function tryToLogin() {
      try {
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");
        console.log(email, password);
        if (email !== null && password !== null) {
          await signIn({ email, password });
          setShouldNavigate(true);
        }
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    }

    tryToLogin();
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      router.replace({
        pathname: "/home",
      });
    }
  }, [shouldNavigate]);

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <Image source={require("@/assets/images/hero.png")} />
        <Spacer size={8} />
        <View className="mx-8">
          <LexendText bold={true} className="text-[32px]">
            Making finance more accessible, transparent, and fair
          </LexendText>
          <Spacer size={4} />
          <LexendText className="text-[16px]">
            Empowering people around the world to live a more fulfilling life
            through financial independence
          </LexendText>
          <Spacer size={36} />
          <Link href="/signup" asChild>
            <Pressable className="rounded-[32px] bg-black">
              <LexendText className="py-5 text-center text-[16px] text-white">
                Get started
              </LexendText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
