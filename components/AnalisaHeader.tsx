import { Pressable, View, Image } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";

const AnalisaHeader = ({tab, setTab}) => {
  return (
    <>
      <LexendText bold={true} className="text-center text-[20px]">
        Analisa
      </LexendText>
      <Image
        className="absolute right-7 top-[49px]"
        source={require("@/assets/images/logo/close.png")}
      />
      <Spacer size={12} />
      <View className="mx-5 flex flex-row justify-between">
        <Pressable
          className={`w-1/2 text-center ${tab == "Strategi" ? "border-b" : ""}`}
          onPress={() => setTab("Strategi")}
        >
          <LexendText
            className={`text-center text-[14px] font-semibold ${tab == "Strategi" ? "" : "text-[#C5C5C5]"}`}
          >
            Strategi
          </LexendText>
          <Spacer size={8} />
        </Pressable>
        <Pressable
          className={`w-1/2 text-center ${tab == "Rekomendasi" ? "border-b" : ""}`}
          onPress={() => setTab("Rekomendasi")}
        >
          <LexendText
            className={`text-center text-[14px] font-semibold ${tab == "Rekomendasi" ? "" : "text-[#C5C5C5]"}`}
          >
            Rekomendasi
          </LexendText>
          <Spacer size={8} />
        </Pressable>
      </View>
      <Spacer size={4} />
    </>
  );
};

export default AnalisaHeader;
