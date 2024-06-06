import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import BlackButton from "@/components/BlackButton";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaPilihanInvestasi from "@/components/AnalisaPilihanInvestasi";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";
import React, { useState } from "react";
import AnalisaSubHeader from "@/components/AnalisaSubHeader";

const Rekomendasi = ({ investasi }) => {
  const { pokok, bunga } = investasi;
  const [tab, setTab] = useState("Nominal");

  return (
    <ScrollView className="px-6">
      <Spacer size={12} />
      <AnalisaSubHeader tab={tab} setTab={setTab} />
      <Spacer size={20} />
      <AnalisaGreenHero uang={100_000_000} />
      <Spacer size={16} />
      <View>
        <View className="mx-4">
          <AnalisaRow
            image="koin"
            title="Uangmu saat ini"
            content="Rp50.000.000"
          />
          <AnalisaRow
            image="kalender"
            title="Jumlah investasi / bulan"
            content="Rp1.000.000"
            content2={tab == "Nominal" ? "Rp2.350.000" : ""}
            type={tab == "Nominal" ? 2 : 1}
          />
          <AnalisaRow
            image="diskon"
            title="Return investasi"
            content="7.35% / tahun"
          />
          <AnalisaRow
            image="jam"
            title="Lama investasi"
            content="5 tahun"
            content2={tab == "Durasi" ? "7 tahun" : ""}
            type={tab == "Durasi" ? 2 : 1}
          />
          <AnalisaRow
            image="piala"
            title="Hasil investasi"
            content="Rp224.684.122"
          />
          <AnalisaPilihanInvestasi
            pilihans={
              tab == "Nominal"
                ? [
                    "Reksadana Pendapatan Tetap",
                    "P2P Lending",
                    "Obligasi Negara",
                  ]
                : [
                    "Emas",
                    "Reksadana Indeks",
                    "Reksadana Campuran",
                    "Saham",
                    "Exchange-Traded Fund (ETF)",
                  ]
            }
          />
          <AnalisaBreakdown pokok={pokok} bunga={bunga} />
        </View>
      </View>
      <Spacer size={8} />
      <TimelineInvestasi />
      <Spacer size={12} />
      <BlackButton text="Tambah ke Pengingat Pembayaran" />
      <Spacer size={12} />
    </ScrollView>
  );
};

export default Rekomendasi;
