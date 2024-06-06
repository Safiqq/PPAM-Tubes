import { View, Image } from "react-native";
import { LexendText } from "@/components/StyledText";

const AnalisaGreenHero2 = ({
  uang,
  percentage,
}: {
  uang: number;
  percentage: number;
}) => {
  return (
    <View className="flex flex-row items-center rounded-[16px] bg-[#76C063] px-3 py-6">
      <View className="w-2/3">
        <LexendText className="text-[10px]">
          Total bunga KPR yang harus kamu bayarkan adalah
          <LexendText bold={true} className="text-[10px]">
            {" "}
            Rp{uang.toLocaleString("id")}{" "}
          </LexendText>
          setara dengan
          <LexendText bold={true} className="text-[10px]">
            {" "}
            {percentage}%{" "}
          </LexendText>
          dari pokok pinjamanmu.
        </LexendText>
      </View>
      <Image
        className="absolute -bottom-[5px] right-2"
        source={require("@/assets/images/hero-analisa-1.png")}
      />
    </View>
  );
};

export default AnalisaGreenHero2;
