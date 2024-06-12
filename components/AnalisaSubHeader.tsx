import { Pressable, View } from "react-native";
import { LexendText } from "@/components/StyledText";

const AnalisaSubHeader = ({tab, setTab, type = 1}) => {
  return (
    <View className="flex flex-row gap-6">
      <Pressable
        className={`flex-1 rounded-[8px] ${tab == "Nominal" ? "bg-black" : "bg-[#C5C5C5] "}`}
        onPress={() => setTab("Nominal")}
      >
        <LexendText
          className={`py-2 text-center ${tab == "Nominal" ? "text-white" : "text-[#8E8E8E]"} `}
        >
          Nominal
        </LexendText>
      </Pressable>
      <Pressable
        className={`flex-1 rounded-[8px] ${tab == "Durasi" ? "bg-black" : "bg-[#C5C5C5] "}`}
        onPress={() => setTab("Durasi")}
      >
        <LexendText
          className={`py-2 text-center ${tab == "Durasi" ? "text-white" : "text-[#8E8E8E]"} `}
        >
          Durasi
        </LexendText>
      </Pressable>
      {type == 2 && (
        <Pressable
          className={`flex-1 rounded-[8px] ${tab == "Return" ? "bg-black" : "bg-[#C5C5C5] "}`}
          onPress={() => setTab("Return")}
        >
          <LexendText
            className={`py-2 text-center ${tab == "Return" ? "text-white" : "text-[#8E8E8E]"} `}
          >
            Return
          </LexendText>
        </Pressable>
      )}
    </View>
  );
};

export default AnalisaSubHeader;
