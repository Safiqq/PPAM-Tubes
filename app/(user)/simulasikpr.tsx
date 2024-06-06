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
import { useRouter } from "expo-router";
import BlackButton from "@/components/BlackButton";

export default function SimulasiKPRScreen() {
  const router = useRouter();

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
            Simulasi KPR
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
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
          <LexendText bold={true}>Jumlah Pinjaman Pokok</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Penghasilan Bulanan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
          />
          <Spacer size={20} />
          <View className="flex flex-row justify-between">
            <View>
              <LexendText bold={true}>Lama KPR</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                />
                <LexendText>bulan</LexendText>
              </View>
            </View>
            <View>
              <LexendText bold={true}>% Bunga Fix</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                />
                <LexendText>bulan</LexendText>
              </View>
            </View>
          </View>
          <Spacer size={20} />
          <View className="flex flex-row justify-between">
            <View>
              <LexendText bold={true}>Periode Bunga Fix</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                />
                <LexendText>bulan</LexendText>
              </View>
            </View>
            <View>
              <LexendText bold={true}>% Bunga Floating</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                />
                <LexendText>bulan</LexendText>
              </View>
            </View>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Periode Bunga Floating</LexendText>
          <Spacer size={8} />
          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            0 bulan
          </LexendText>
          <Spacer size={32} />
          <BlackButton text="Lihat Hasil Analisa" href="/simulasikpr-analisa" />
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
