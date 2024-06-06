import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import BlackButton from "@/components/BlackButton";
import AnalisaBlackHero from "@/components/Hero/AnalisaBlackHero";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";

const Strategi = ({ investasi, cocok = false }) => {
  const { pokok, bunga } = investasi;

  return (
    <ScrollView className="px-6">
      <Spacer size={28} />
      <AnalisaBlackHero cocok={cocok} />
      <Spacer size={16} />
      <AnalisaGreenHero uang={5_258_695_543} />
      <Spacer size={16} />
      <View>
        <LexendText bold={true} className="text-[16px]">
          Strategimu
        </LexendText>
        <Spacer size={12} />
        <View className="mx-4">
          <AnalisaRow
            image="koin"
            title="Uangmu saat ini"
            content="Rp5.000.000"
          />
          <AnalisaRow
            image="koin"
            title="Jumlah investasi / bulan"
            content="Rp3.000.000"
          />
          <AnalisaRow
            image="diskon"
            title="Return investasi"
            content="7.35% / tahun"
          />
          <AnalisaRow image="jam" title="Lama investasi" content="20 tahun" />
          <AnalisaRow
            image="piala"
            title="Hasil investasi"
            content="Rp1.662.550.228"
            content2={cocok ? "" : "Kurang Rp3.596.145.316"}
          />
          <AnalisaBreakdown pokok={pokok} bunga={bunga} />
        </View>
      </View>
      <Spacer size={8} />
      {cocok && (
        <>
          <TimelineInvestasi />
          <Spacer size={12} />
          <BlackButton text="Tambah ke Pengingat Pembayaran" />
        </>
      )}

      <Spacer size={12} />
    </ScrollView>
  );
};

export default Strategi;
