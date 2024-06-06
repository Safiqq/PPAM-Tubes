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
import { useState } from "react";

export default function DanaMenikahScreen() {
  const [totalBiaya, setTotalBiaya] = useState('');
  const [menikahDalam, setMenikahDalam] = useState('');
  const [asumsiInflasi, setAsumsiInflasi] = useState('');
  const [uangDiperlukan, setUangDiperlukan] = useState('');
  const [uangDimiliki, setUangDimiliki] = useState('');
  const [targetInvestasi, setTargetInvestasi] = useState('');
  const [returnInvestasi, setReturnInvestasi] = useState('');

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
            Dana Menikah
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
          <LexendText bold={true}>Total biaya pernikahan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={totalBiaya}
            onChangeText={setTotalBiaya}
          />
          <Spacer size={20} />
          <LexendText bold={true}>Akan menikah dalam</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={menikahDalam}
              onChangeText={setMenikahDalam}
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Asumsi inflasi</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={asumsiInflasi}
              onChangeText={setAsumsiInflasi}
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>
            Total uang yang diperlukan 5 tahun lagi sebesar
          </LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={uangDiperlukan}
            onChangeText={setUangDiperlukan}
          />
          <Spacer size={20} />
          <LexendText bold={true}>
            Uang yang dimiliki saat ini untuk menikah sebesar
          </LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={uangDimiliki}
            onChangeText={setUangDimiliki}
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target investasi setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={targetInvestasi}
            onChangeText={setTargetInvestasi}
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
              value={returnInvestasi}
              onChangeText={setReturnInvestasi}
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan rutin berinvestasi selama</LexendText>
          <Spacer size={8} />
          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            5 tahun
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
