import Spacer from "@/components/Spacer";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnalisaHeader from "@/components/AnalisaHeader";
import Strategi from "@/components/Strategi";
import Rekomendasi from "@/components/Rekomendasi";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  InputKalkulatorDPProperti,
  OutputKalkulatorDPProperti,
  Reminder,
} from "@/constants/Types";
import { LexendText } from "@/components/StyledText";
import { createReminder } from "@/services/ReminderService";

export default function DPPropertiAnalisa() {
  const router = useRouter();
  const { input, result } = useLocalSearchParams<{
    input: string;
    result: string;
  }>();
  const parsedInput: InputKalkulatorDPProperti = input
    ? JSON.parse(input)
    : null;
  const parsedResult: OutputKalkulatorDPProperti = result
    ? JSON.parse(result)
    : null;

  const [tab, setTab] = useState("Strategi");

  const handleAddReminder = () => {
    const reminder = {
      title: "DP Properti",
      recurringEach: "Bulan",
      date: new Date(),
      description: `Menabung di ${
        parsedResult.strategiCocok
          ? "produk investasi dengan return " + parsedInput.returnInvestasi
          : parsedResult.rekomendasiPilihanInvestasi
              .map((investasi) => investasi.nama)
              .join(", ")
      }% sebesar Rp${
        parsedResult.strategiCocok
          ? parsedInput.targetInvestasiPerBulan.toLocaleString("id")
          : parsedResult.rekomendasiInvestasiPerBulan?.toLocaleString("id")
      } / bulan`,
    };
    createReminder(reminder as Reminder);
    alert("Berhasil menambahkan ke pengingat pembayaran!");
    router.navigate("/detailpengingat");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Spacer size={40} />

      <AnalisaHeader tab={tab} setTab={setTab} />

      {tab == "Strategi" && (
        <Strategi nama="dpproperti" input={parsedInput} result={parsedResult} />
      )}
      {tab == "Rekomendasi" && (
        <Rekomendasi
          nama="dpproperti"
          input={parsedInput}
          result={parsedResult}
        />
      )}

      {((tab == "Strategi" && parsedResult.strategiCocok) ||
        tab == "Rekomendasi") && (
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
      )}
    </SafeAreaView>
  );
}
