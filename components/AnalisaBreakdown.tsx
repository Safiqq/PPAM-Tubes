import { View, Image } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";

const AnalisaBreakdown = ({ pokok, bunga, pokok_percentage, bunga_percentage }) => {
  return (
    <View className="flex flex-row items-center gap-4 py-2">
      <Image source={require("@/assets/images/logo/jam.png")} />
      <View className="flex-1">
        <LexendText className="text-[10px]">Breakdown</LexendText>
        <Spacer size={8} />
        <View className="flex h-5 flex-row rounded-[8px]">
          <View
            className="justify-center rounded-l-[8px] bg-[#76C063]"
            style={{ width: `${pokok_percentage}%` }}
          >
            <LexendText bold={true} className="text-center text-[10px]">
              {pokok_percentage.toFixed(2)}%
            </LexendText>
          </View>
          <View
            className="justify-center rounded-r-[8px] bg-[#BDBDBD]"
            style={{ width: `${bunga_percentage}%` }}
          >
            <LexendText bold={true} className="text-center text-[10px]">
              {bunga_percentage.toFixed(2)}%
            </LexendText>
          </View>
        </View>
        <Spacer size={8} />
        <View className="flex flex-row justify-between">
          <View>
            <LexendText className="text-[8px]">
              Rp{pokok.toLocaleString("id")}
            </LexendText>
            <LexendText className="text-[8px]">Pokok investasi</LexendText>
          </View>
          <View>
            <LexendText className="text-right text-[8px]">
              Rp{bunga.toLocaleString("id")}
            </LexendText>
            <LexendText className="text-right text-[8px]">
              Bunga investasi
            </LexendText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnalisaBreakdown;
