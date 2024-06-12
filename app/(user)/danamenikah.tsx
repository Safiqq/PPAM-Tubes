import {
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useState } from "react";
import { useRouter } from "expo-router";
import { InputKalkulatorDanaMenikah } from "@/constants/Types";
import kalkulatorDanaMenikah from "@/utils/danaMenikah";

export default function DanaMenikahScreen() {
  const router = useRouter();

  const [totalBiayaPernikahan, setTotalBiayaPernikahan] = useState<string>("");
  const [lamaMengumpulkan, setLamaMengumpulkan] = useState<string>("");
  const [asumsiInflasi, setAsumsiInflasi] = useState<string>("");
  const [uangSaatIni, setUangSaatIni] = useState<string>("");
  const [targetInvestasiPerBulan, setTargetInvestasiPerBulan] =
    useState<string>("");
  const [returnInvestasi, setReturnInvestasi] = useState<string>("");

  const handleButton = () => {
    try {
      const input: InputKalkulatorDanaMenikah = {
        totalBiayaPernikahan: parseInt(totalBiayaPernikahan) || 0,
        lamaMengumpulkan: parseInt(lamaMengumpulkan) || 0,
        asumsiInflasi: parseInt(asumsiInflasi) || 0,
        uangSaatIni: parseInt(uangSaatIni) || 0,
        targetInvestasiPerBulan: parseInt(targetInvestasiPerBulan) || 0,
        returnInvestasi: parseInt(returnInvestasi) || 0,
      };

      const result = kalkulatorDanaMenikah(input);
      router.push({
        pathname: "/danamenikah-analisa",
        params: {
          input: JSON.stringify(input),
          result: JSON.stringify(result),
        },
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <ImageBackground
          className="h-[100px] items-center justify-center"
          source={require("@/assets/images/gradientgreen-block.png")}
        >
          <Pressable
            className="absolute left-3 top-7 p-4"
            onPress={() => router.back()}
          >
            <Image source={require("@/assets/images/logo/backbutton.png")} />
          </Pressable>
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
            value={totalBiayaPernikahan}
            onChangeText={setTotalBiayaPernikahan}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Akan menikah dalam</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={lamaMengumpulkan}
              onChangeText={setLamaMengumpulkan}
              keyboardType="numeric"
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
              keyboardType="numeric"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>
            Total uang yang diperlukan {parseInt(lamaMengumpulkan)} tahun lagi
            sebesar
          </LexendText>
          <Spacer size={8} />

          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            Rp
            {(
              parseInt(totalBiayaPernikahan) *
                Math.pow(
                  1 + parseInt(asumsiInflasi) / 100,
                  parseInt(lamaMengumpulkan),
                ) || 0
            ).toLocaleString("id")}
          </LexendText>
          <Spacer size={20} />
          <LexendText bold={true}>
            Uang yang dimiliki saat ini untuk menikah sebesar
          </LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={uangSaatIni}
            onChangeText={setUangSaatIni}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target investasi setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={targetInvestasiPerBulan}
            onChangeText={setTargetInvestasiPerBulan}
            keyboardType="numeric"
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
              keyboardType="numeric"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={32} />
          <TouchableOpacity
            className="h-11 rounded-[12px] bg-black"
            onPress={handleButton}
          >
            <LexendText
              bold={true}
              className="py-3 text-center text-[16px] text-white"
            >
              Lihat Hasil Strategi
            </LexendText>
          </TouchableOpacity>
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
