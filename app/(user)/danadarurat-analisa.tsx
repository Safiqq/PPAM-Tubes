import Spacer from "@/components/Spacer";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnalisaHeader from "@/components/AnalisaHeader";
import Strategi from "@/components/DanaPensiun/Strategi";
import Rekomendasi from "@/components/DanaPensiun/Rekomendasi";

export default function DanaDaruratAnalisa() {
  const [tab, setTab] = useState("Strategi");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <Spacer size={40} />
        <AnalisaHeader tab={tab} setTab={setTab} type={2} />

        {tab == "Strategi" && <Strategi />}
        {tab == "Biaya Lain" && <Rekomendasi />}
      </ScrollView>
    </SafeAreaView>
  );
}
