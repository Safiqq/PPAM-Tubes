import { View, Image } from "react-native";
import { LexendText } from "./StyledText";

const AnalisaGreenHero = ({ uang, rule = false }) => {
  return (
    <View className="flex flex-row items-center justify-end rounded-[16px] bg-[#76C063] px-7 py-3">
      <View className="w-3/5">
        <LexendText className="text-[10px]">
          Total uang yang kamu butuhkan
        </LexendText>
        <LexendText bold={true} className="text-[20px]">
          Rp{uang.toLocaleString('id')}
        </LexendText>
        {rule && (
          <LexendText className="text-[10px]">Berdasarkan 4% rule</LexendText>
        )}
      </View>
      <Image
        className="absolute -bottom-[13px] left-5"
        source={require("@/assets/images/hero-analisa-3.png")}
      />
    </View>
  );
};

export default AnalisaGreenHero;
