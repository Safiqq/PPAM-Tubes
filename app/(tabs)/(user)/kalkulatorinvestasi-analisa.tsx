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
import AnalisaHeader from "@/components/AnalisaHeader";

export default function KalkulatorInvestasiAnalisa() {
  const [tab, setTab] = useState("Strategi");
  const investasi = {
    pokok: 725_000_000,
    bunga: 937_550_228,
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Spacer size={40} />
      <AnalisaHeader tab={tab} setTab={setTab} />

      {tab == "Strategi" && (
        <KalkulatorInvestasiStrategi investasi={investasi} />
      )}
      {tab == "Rekomendasi" && (
        <KalkulatorInvestasiRekomendasi investasi={investasi} />
      )}
    </SafeAreaView>
  );
}