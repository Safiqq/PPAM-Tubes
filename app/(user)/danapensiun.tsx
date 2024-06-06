import {
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";

export default function DanaPensiunScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <ImageBackground
          className="h-[100px] items-center justify-center"
          source={require("@/assets/images/gradientgreen-block.png")}
        >
          <Image
            className="absolute left-7 top-11"
            source={require("@/assets/images/logo/backbutton.png")}
          />
          <LexendText bold={true} className="text-[20px]">
            Dana Pensiun
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
          <LexendText bold={true}>Pengeluaran / bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Usia sekarang</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Pensiun di usia</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Asumsi inflasi tahunan</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>
            Dana pensiun yang tersedia sampai saat ini
          </LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target investasi setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target return investasi per tahun</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan pensiun dalam</LexendText>
          <Spacer size={8} />
          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            20 tahun
          </LexendText>
          <Spacer size={32} />
          <Pressable className="h-11 rounded-[12px] bg-black">
            <LexendText
              bold={true}
              className="py-3 text-center text-[16px] text-white"
            >
              Lihat Hasil Strategi
            </LexendText>
          </Pressable>
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
