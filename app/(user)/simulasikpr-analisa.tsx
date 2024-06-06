import Spacer from "@/components/Spacer";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SimulasiKPRStrategi from "@/components/SimulasiKPR/Strategi";
import SimulasiKPRBiayaLain from "@/components/SimulasiKPR/BiayaLain";
import AnalisaHeader from "@/components/AnalisaHeader";

export default function SimulasiKPRAnalisa() {
  const [tab, setTab] = useState("Strategi");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <Spacer size={40} />
        <AnalisaHeader tab={tab} setTab={setTab} type={2} />

        {tab == "Strategi" && <SimulasiKPRStrategi />}
        {tab == "Biaya Lain" && <SimulasiKPRBiayaLain />}
      </ScrollView>
    </SafeAreaView>
  );
}
