import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Spacer from "./Spacer";
import { LexendText } from "./StyledText";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import BlackButton from "@/components/BlackButton";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaPilihanInvestasi from "@/components/AnalisaPilihanInvestasi";
import AnalisaGreenHero from "@/components/AnalisaGreenHero";
import React, { useState } from "react";

const KalkulatorInvestasiRekomendasi = ({ investasi }) => {
  const { pokok, bunga } = investasi;
  const pokok_percentage = (pokok / (pokok + bunga)) * 100;
  const bunga_percentage = (bunga / (pokok + bunga)) * 100;

  const [tab, setTab] = useState("Nominal");

  return (
    <ScrollView className="px-6">
      <Spacer size={12} />
      <View className="flex flex-row gap-6">
        <Pressable
          className={`flex-1 rounded-[8px] ${tab == "Nominal" ? "bg-black" : "bg-[#C5C5C5] "}`}
          onPress={() => setTab("Nominal")}
        >
          <LexendText
            className={`py-2 text-center ${tab == "Nominal" ? "text-white" : "text-[#8E8E8E]"} `}
          >
            Nominal
          </LexendText>
        </Pressable>
        <Pressable
          className={`flex-1 rounded-[8px] ${tab == "Durasi" ? "bg-black" : "bg-[#C5C5C5] "}`}
          onPress={() => setTab("Durasi")}
        >
          <LexendText
            className={`py-2 text-center ${tab == "Durasi" ? "text-white" : "text-[#8E8E8E]"} `}
          >
            Durasi
          </LexendText>
        </Pressable>
      </View>
      <Spacer size={20} />
      <AnalisaGreenHero uang={5_258_695_543} />
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
            content="Rp1.000.000"
            content2={tab == "Nominal" ? "Rp1.300.000" : ""}
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
            content="Rp101.131.302"
          />
          <AnalisaPilihanInvestasi
            pilihans={[
              "Reksadana Pendapatan Tetap",
              "P2P Lending",
              "Obligasi Negara",
            ]}
          />
          <AnalisaBreakdown
            pokok={pokok}
            bunga={bunga}
            pokok_percentage={pokok_percentage}
            bunga_percentage={bunga_percentage}
          />
        </View>
      </View>
      <Spacer size={8} />
      <View>
        <LexendText bold={true}>Timeline Investasi</LexendText>
        <Spacer size={8} />
        <TimelineInvestasi />
      </View>
      <Spacer size={12} />
      <BlackButton text="Tambah ke Pengingat Pembayaran" />
      <Spacer size={12} />
    </ScrollView>
  );
};

export default KalkulatorInvestasiRekomendasi;
