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

export default function DPPropertiScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <ImageBackground
          className="h-[100px] items-center justify-center"
          source={require("@/assets/images/gradientgreen-block.png")}
        >
          <Image
            className="absolute left-7 top-11"
            source={require("@/assets/images/logo/backbutton.png")}
          />
          <LexendText bold={true} className="text-[20px]">
            DP Properti
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
          <LexendText bold={true}>Ingin mencapai mimpi dalam</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Harga Properti Impian</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <LexendText bold={true}>% DP yang Diinginkan</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>%</LexendText>
          </View>
          <Spacer size={20} />
          <View className="flex flex-row justify-between">
            <View>
              <LexendText bold={true}>DP setara dengan</LexendText>
              <Spacer size={8} />
              <LexendText className="rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                Rp400.000
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>KPR / pokok utang</LexendText>
              <Spacer size={8} />
              <LexendText className="rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                Rp600.000.000
              </LexendText>
            </View>
            <View>
              <LexendText bold={true}>% KPR</LexendText>
              <Spacer size={8} />
              <LexendText className="w-12 rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                60%
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>Asumsi inflasi properti</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                />
                <LexendText>%</LexendText>
              </View>
            </View>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>
            Jumlah dana yang dimiliki saat ini
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
          <LexendText bold={true}>
            Berinvestasi di produk yang returnnya
          </LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan rutin berinvestasi selama</LexendText>
          <Spacer size={8} />
          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            10 tahun
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
