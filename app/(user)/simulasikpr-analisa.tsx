import Spacer from "@/components/Spacer";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnalisaHeader from "@/components/AnalisaHeader";
import { createReminder } from "@/services/ReminderService";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  InputSimulasiKPR,
  OutputSimulasiKPR,
  Reminder,
} from "@/constants/Types";
import BiayaLain from "@/components/BiayaLain";
import Strategi from "@/components/Strategi";
import { TouchableOpacity } from "react-native";
import { LexendText } from "@/components/StyledText";

export default function SimulasiKPRAnalisa() {
  const router = useRouter();
  const { input, result } = useLocalSearchParams<{
    input: string;
    result: string;
  }>();
  const parsedInput: InputSimulasiKPR = input ? JSON.parse(input) : null;
  const parsedResult: OutputSimulasiKPR = result ? JSON.parse(result) : null;

  const [tab, setTab] = useState("Strategi");

  const handleAddReminder = () => {
    const reminder = {
      title: "KPR",
      recurringEach: "Bulan",
      date: new Date(),
      description: `Cicilan KPR sebesar Rp${parsedResult.totalBungaKPRYangHarusDibayar.toLocaleString("id")}`,
    };
    createReminder(reminder as Reminder);
    alert("Berhasil menambahkan ke pengingat pembayaran!");
    router.navigate("/detailpengingat");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Spacer size={40} />
      <AnalisaHeader tab={tab} setTab={setTab} type={2} />

      {tab == "Strategi" && (
        <Strategi
          nama="simulasikpr"
          input={parsedInput}
          result={parsedResult}
        />
      )}
      {tab == "Biaya Lain" && (
        <BiayaLain input={parsedInput} result={parsedResult} />
      )}

      <>
        <Spacer size={16} />
        <TouchableOpacity
          className="mx-4 rounded-[12px] bg-black py-3"
          onPress={handleAddReminder}
        >
          <LexendText
            bold={true}
            className="text-center text-[16px] text-white"
          >
            Tambah ke Pengingat Pembayaran
          </LexendText>
        </TouchableOpacity>
        <Spacer size={16} />
      </>
    </SafeAreaView>
  );
}
