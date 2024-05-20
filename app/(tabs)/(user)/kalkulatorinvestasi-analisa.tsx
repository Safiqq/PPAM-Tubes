import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import KalkulatorInvestasiStrategi from "@/components/KalkulatorInvestasiStrategi";
import KalkulatorInvestasiRekomendasi from "@/components/KalkulatorInvestasiRekomendasi";

export default function KalkulatorInvestasiAnalisa() {
  const [tab, setTab] = useState("Strategi");
  const investasi = {
    pokok: 725_000_000,
    bunga: 937_550_228,
  };

  console.log("here" + investasi);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Spacer size={40} />
      <LexendText bold={true} className="text-center text-[20px]">
        Analisa
      </LexendText>
      <Image
        className="absolute right-7 top-[49px]"
        source={require("@/assets/images/logo/close.png")}
      />
      <Spacer size={12} />
      <View className="mx-5 flex flex-row justify-between">
        <Pressable
          className={`w-1/2 text-center ${tab == "Strategi" ? "border-b" : ""}`}
          onPress={() => setTab("Strategi")}
        >
          <LexendText
            className={`text-center text-[14px] font-semibold ${tab == "Strategi" ? "" : "text-[#C5C5C5]"}`}
          >
            Strategi
          </LexendText>
          <Spacer size={8} />
        </Pressable>
        <Pressable
          className={`w-1/2 text-center ${tab == "Biaya Lain" ? "border-b" : ""}`}
          onPress={() => setTab("Biaya Lain")}
        >
          <LexendText
            className={`text-center text-[14px] font-semibold ${tab == "Biaya Lain" ? "" : "text-[#C5C5C5]"}`}
          >
            Biaya Lain
          </LexendText>
          <Spacer size={8} />
        </Pressable>
      </View>

      {tab == "Strategi" && (
        <KalkulatorInvestasiStrategi investasi={investasi} />
      )}
      {tab == "Biaya Lain" && <KalkulatorInvestasiRekomendasi />}
    </SafeAreaView>
  );
}
