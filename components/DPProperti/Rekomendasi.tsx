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
      <AnalisaSubHeader tab={tab} setTab={setTab} type={2} />
      <Spacer size={20} />
      <AnalisaGreenHero uang={5_258_695_543} rule={true} />
      <Spacer size={16} />
      <View>
        <View className="mx-4">
          <AnalisaRow
            image="koin"
            title="Uangmu saat ini"
            content="Rp5.000.000"
          />
          <AnalisaRow
            image="kalender"
            title="Jumlah investasi / bulan"
            content="Rp3.000.000"
            content2={tab == "Nominal" ? "Rp9.600.000" : ""}
            type={tab == "Nominal" ? 2 : 1}
          />
          <AnalisaRow
            image="diskon"
            title="Return investasi"
            content="7.35% / tahun"
            content2={tab == "Return" ? "Rp9.600.000" : ""}
            type={tab == "Return" ? 2 : 1}
          />
          <AnalisaRow
            image="jam"
            title="Lama investasi"
            content="5 tahun"
            content2={tab == "Durasi" ? "30 tahun" : ""}
            type={tab == "Durasi" ? 2 : 1}
          />
          <AnalisaRow
            image="piala"
            title="Hasil investasi"
            content="Rp5.272.533.163"
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
