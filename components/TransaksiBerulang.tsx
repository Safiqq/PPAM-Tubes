import { View, Image } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";
import { Shadow } from "react-native-shadow-2";

const TransaksiBerulang = () => {
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
            <LexendText className="text-[10px]">Makan dan Minum</LexendText>
            <Spacer size={4} />
            <View className="flex flex-row gap-1">
              <Image source={require("@/assets/images/logo/refresh.png")} />
              <LexendText className="text-[10px] text-[#C5C5C5]">
                Berulang setiap minggu
              </LexendText>
            </View>
          </View>
        </View>
        <LexendText className="text-[16px] text-[#EF4E4E]">
          - Rp50.000
        </LexendText>
      </Shadow>
      <Spacer size={20} />
    </View>
  );
};

export default TransaksiBerulang;
