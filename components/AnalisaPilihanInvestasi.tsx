import { View, Image } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";

const AnalisaPilihanInvestasi = ({ pilihans }) => {
  return (
    <View className="flex flex-row items-center gap-4 py-2">
      <Image source={require("@/assets/images/logo/list.png")} />
      <View className="flex-1">
        <LexendText className="text-[10px]">Pilihan investasi</LexendText>
        <Spacer size={4} />
        <View className='flex flex-row gap-1 flex-wrap'>
          {pilihans.map((pilihan) => (
            <LexendText bold={true} className="bg-[#76C063] px-2 py-0.5 rounded-[8px]">
              {pilihan}
            </LexendText>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AnalisaPilihanInvestasi;
