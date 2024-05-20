import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import Spacer from "./Spacer";
import { LexendText } from "./StyledText";
import TimelineInvestasi from "./TimelineInvestasi";
import AnalisaRow from "./AnalisaRow";
import AnalisaBreakdown from "./AnalisaBreakdown";
import BlackButton from "./BlackButton";
import Images from "@/constants/Images";

const KalkulatorInvestasiStrategi = ({ investasi, cocok = false }) => {
  const { pokok, bunga } = investasi;
  const pokok_percentage = (pokok / (pokok + bunga)) * 100;
  const bunga_percentage = (bunga / (pokok + bunga)) * 100;

  return (
    <ScrollView className="px-6">
      <Spacer size={28} />
      <View className="flex flex-row items-center rounded-[16px] bg-black px-3 py-6">
        <View className="w-2/3">
          <LexendText className="text-[14px] text-white">
            Strateginya
            <LexendText
              bold={true}
              className={`text-[14px] ${cocok ? "text-[#76C063]" : "text-[#FF4848]"}`}
            >
              {" "}
              {!cocok && "belum "}cocok{" "}
            </LexendText>
            untuk mimpi kamu
          </LexendText>
        </View>
        <Image
          className="absolute -bottom-[1px] right-2"
          source={cocok ? Images["heroanalisa4"] : Images["heroanalisa2"]}
          // source={require("@/assets/images/hero-analisa-2.png")}
        />
      </View>
      <Spacer size={16} />
      <View className="flex flex-row items-center justify-end rounded-[16px] bg-[#76C063] px-7 py-3">
        <View className="w-3/5">
          <LexendText className="text-[10px]">
            Total uang yang kamu butuhkan
          </LexendText>
          <LexendText bold={true} className="text-[20px]">
            Rp5.258.695.543
          </LexendText>
          <LexendText className="text-[10px]">Berdasarkan 4% rule</LexendText>
        </View>
        <Image
          className="absolute -bottom-[13px] left-5"
          source={require("@/assets/images/hero-analisa-3.png")}
        />
      </View>
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
            image="kalender"
            title="Jumlah investasi / bulan"
            content="Rp3.000.000"
          />
          <AnalisaRow
            image="diskon"
            title="Return investasi"
            content="7.35% / tahun"
          />
          <AnalisaRow image="jam" title="Lama investasi" content="5 tahun" />
          <AnalisaRow
            image="piala"
            title="Hasil investasi"
            content="Rp79.457.735"
            content2={cocok ? "" : "Kurang Rp20.542.265"}
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
      {cocok && (
        <>
          <View>
            <LexendText bold={true}>Timeline Investasi</LexendText>
            <Spacer size={8} />
            <TimelineInvestasi />
          </View>
          <Spacer size={12} />
          <BlackButton text="Tambah ke Pengingat Pembayaran" />
        </>
      )}

      <Spacer size={12} />
    </ScrollView>
  );
};

export default KalkulatorInvestasiStrategi;
