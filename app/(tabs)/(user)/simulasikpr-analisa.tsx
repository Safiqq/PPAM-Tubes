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
import SimulasiKPRStrategi from "@/components/SimulasiKPRStrategi";
import SimulasiKPRBiayaLain from "@/components/SimulasiKPRBiayaLain";

export default function SimulasiKPRAnalisa() {
  const [tab, setTab] = useState("Strategi");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
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

        {tab == "Strategi" && <SimulasiKPRStrategi />}
        {tab == "Biaya Lain" && <SimulasiKPRBiayaLain />}
      </ScrollView>
    </SafeAreaView>
  );
}
