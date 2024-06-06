import { Pressable, View, Image, TouchableOpacity } from "react-native";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useRouter } from "expo-router";

const AnalisaHeader = ({
  tab,
  setTab,
  type = 1,
  useTabs = true,
}: {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  type?: number;
  useTabs?: boolean;
}) => {
  const secondTab = type == 1 ? "Rekomendasi" : "Biaya Lain";
  const router = useRouter();

  return (
    <>
      <LexendText bold={true} className="text-center text-[20px]">
        Analisa
      </LexendText>
      <TouchableOpacity
        className="absolute right-7 top-[76px]"
        onPress={() => router.back()}
      >
        <Image source={require("@/assets/images/logo/close.png")} />
      </TouchableOpacity>
      {useTabs && (
        <>
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
              className={`w-1/2 text-center ${tab == secondTab ? "border-b" : ""}`}
              onPress={() => setTab(secondTab)}
            >
              <LexendText
                className={`text-center text-[14px] font-semibold ${tab == secondTab ? "" : "text-[#C5C5C5]"}`}
              >
                {secondTab}
              </LexendText>
              <Spacer size={8} />
            </Pressable>
          </View>
        </>
      )}
      <Spacer size={4} />
    </>
  );
};

export default AnalisaHeader;
