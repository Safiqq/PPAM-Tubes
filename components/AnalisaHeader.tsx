import { Pressable, View, Image } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";

const AnalisaHeader = ({ tab, setTab, type = 1 }) => {
  const second_tab = type == 1 ? "Rekomendasi" : "Biaya Lain";

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
          className={`w-1/2 text-center ${tab == second_tab ? "border-b" : ""}`}
          onPress={() => setTab(second_tab)}
        >
          <LexendText
            className={`text-center text-[14px] font-semibold ${tab == second_tab ? "" : "text-[#C5C5C5]"}`}
          >
            {second_tab}
          </LexendText>
          <Spacer size={8} />
        </Pressable>
      </View>
      <Spacer size={4} />
    </>
  );
};

export default AnalisaHeader;
