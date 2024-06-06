import { View, Image } from "react-native";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { Shadow } from "react-native-shadow-2";

const RiwayatTransaksi = () => {
  return (
    <View className="mx-5">
      <LexendText className="text-[#C5C5C5]">14 Apr 2024</LexendText>
      <Spacer size={4} />
      <Shadow className="flex w-full flex-row items-center justify-between rounded-[16px] px-4 py-4">
        <View className="flex flex-row items-center gap-3">
          <Image source={require("@/assets/images/logo/makandanminum.png")} />
          <View>
            <LexendText bold={true} className="text-[16px]">
              Makan siang
            </LexendText>
            <Spacer size={4} />
            <LexendText className="text-[10px]">Makan dan minum</LexendText>
          </View>
        </View>
        <LexendText className="text-[16px] text-[#EF4E4E]">
          - Rp50.000
        </LexendText>
      </Shadow>
      <Spacer size={20} />
      <LexendText className="text-[#C5C5C5]">13 Apr 2024</LexendText>
      <Spacer size={4} />
      <Shadow className="w-full rounded-[16px] px-4 py-4">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Image source={require("@/assets/images/logo/gaji.png")} />
            <View>
              <LexendText bold={true} className="text-[16px]">
                Design
              </LexendText>
              <Spacer size={4} />
              <LexendText className="text-[10px]">Gaji</LexendText>
            </View>
          </View>
          <LexendText className="text-[16px] text-[#76C063]">
            + Rp50.000
          </LexendText>
        </View>
        <Spacer size={28} />
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Image source={require("@/assets/images/logo/tabungan.png")} />
            <View>
              <LexendText bold={true} className="text-[16px]">
                Tabungan
              </LexendText>
            </View>
          </View>
          <LexendText className="text-[16px]">+ Rp600.000</LexendText>
        </View>
      </Shadow>
    </View>
  );
};

export default RiwayatTransaksi;
