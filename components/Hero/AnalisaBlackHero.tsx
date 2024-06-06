import { View, Image } from "react-native";
import { LexendText } from "@/components/StyledText";
import Images from "@/constants/Images";

const AnalisaBlackHero = ({ cocok }: { cocok: boolean }) => {
  return (
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
      />
    </View>
  );
};

export default AnalisaBlackHero;
