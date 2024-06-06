import { View, Image } from "react-native";
import { LexendText } from "@/components/StyledText";

const AnalisaGreenHero3 = ({ uang }: { uang: number }) => {
  return (
    <View className="flex flex-row items-center rounded-[16px] bg-[#76C063] px-3 py-4">
      <View className="w-2/3">
        <LexendText className="text-[10px]">Total biaya lain</LexendText>
        <LexendText bold={true} className="text-[20px]">
          Rp{uang.toLocaleString("id")}
        </LexendText>
        <LexendText className="text-[10px]">
          Belum termasuk biaya BPHTB & Asuransi
        </LexendText>
      </View>
      <Image
        className="absolute -bottom-[5px] right-2"
        source={require("@/assets/images/hero-analisa-1.png")}
      />
    </View>
  );
};

export default AnalisaGreenHero3;
