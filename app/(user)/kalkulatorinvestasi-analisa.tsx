import Spacer from "@/components/Spacer";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AnalisaHeader from "@/components/AnalisaHeader";
import Strategi from "@/components/Strategi";
import Rekomendasi from "@/components/Rekomendasi";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  InputKalkulatorInvestasi,
  OutputKalkulatorInvestasi,
  Reminder,
} from "@/constants/Types";
import { createReminder } from "@/services/ReminderService";
import { TouchableOpacity } from "react-native";
import { LexendText } from "@/components/StyledText";

export default function KalkulatorInvestasiAnalisa() {
  const [tab, setTab] = useState("Strategi");
  const [newInput, setNewInput] = useState<InputKalkulatorInvestasi>();
  const [newResult, setNewResult] = useState<OutputKalkulatorInvestasi>();
  const { input, result } = useLocalSearchParams<{
    input: string;
    result: string;
  }>();
  const parsedInput = input ? JSON.parse(input) : null;
  const parsedResult = result ? JSON.parse(result) : null;
  const router = useRouter();

  const handleAddReminder = () => {
    const reminder = {
      title: "Investasi",
      type: "Bulanan",
      date: new Date(),
      description: `Menabung di ${
        parsedResult.strategiCocok
          ? "produk investasi dengan return " + parsedInput.returnProduk
          : newResult?.rekomendasiPilihanInvestasi
              .map((investasi) => investasi.nama)
              .join(", ")
      }% sebesar Rp${
        parsedResult.strategiCocok
          ? parsedInput.targetInvestasiPerBulan.toLocaleString("id")
          : newInput?.targetInvestasiPerBulan.toLocaleString("id")
      } / bulan`,
    };
    createReminder(reminder as Reminder);
    alert("Berhasil menambahkan ke pengingat pembayaran!");
    router.navigate("/detailpengingat");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Spacer size={40} />

      <AnalisaHeader
        tab={tab}
        setTab={setTab}
        useTabs={!parsedResult.strategiCocok}
      />

      {tab == "Strategi" && (
        <Strategi
          nama="kalkulatorinvestasi"
          input={parsedInput}
          result={parsedResult}
        />
      )}
      {tab == "Rekomendasi" && (
        <Rekomendasi
          nama="kalkulatorinvestasi"
          input={parsedInput}
          result={parsedResult}
          setNewInputCb={setNewInput}
          setNewResultCb={setNewResult}
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
