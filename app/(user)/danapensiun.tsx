import {
  ImageBackground,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useRouter } from "expo-router";
import { InputKalkulatorDanaPensiun } from "@/constants/Types";
import { useState } from "react";
import kalkulatorDanaPensiun from "@/utils/danaPensiun";
import { handleInputChange } from "@/utils/utils";

export default function DanaPensiunScreen() {
  const router = useRouter();

  const [pengeluaranPerBulan, setPengeluaranPerBulan] = useState<string>("");
  const [usiaSekarang, setUsiaSekarang] = useState<string>("");
  const [usiaPensiun, setUsiaPensiun] = useState<string>("");
  const [asumsiInflasiTahunan, setAsumsiInflasiTahunan] = useState<string>("");
  const [uangSaatIni, setUangSaatIni] = useState<string>("");
  const [targetInvestasiPerBulan, setTargetInvestasiPerBulan] =
    useState<string>("");
  const [returnInvestasi, setReturnInvestasi] = useState<string>("");

  const handleButton = () => {
    try {
      const input: InputKalkulatorDanaPensiun = {
        pengeluaranPerBulan: parseInt(pengeluaranPerBulan) || 0,
        usiaSekarang: parseInt(usiaSekarang) || 0,
        usiaPensiun: parseInt(usiaPensiun) || 0,
        lamaMengumpulkan: parseInt(usiaPensiun) - parseInt(usiaSekarang) || 0,
        asumsiInflasiTahunan: parseFloat(asumsiInflasiTahunan) || 0,
        uangSaatIni: parseInt(uangSaatIni) || 0,
        targetInvestasiPerBulan: parseInt(targetInvestasiPerBulan) || 0,
        returnInvestasi: parseFloat(returnInvestasi) || 0,
      };

      const result = kalkulatorDanaPensiun(input);
      router.push({
        pathname: "/danapensiun-analisa",
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
      <ScrollView>
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
            value={pengeluaranPerBulan}
            onChangeText={handleInputChange(setPengeluaranPerBulan)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Usia sekarang</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={usiaSekarang}
              onChangeText={handleInputChange(setUsiaSekarang)}
              keyboardType="numeric"
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
              value={usiaPensiun}
              onChangeText={handleInputChange(setUsiaPensiun)}
              keyboardType="numeric"
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
              value={asumsiInflasiTahunan}
              onChangeText={handleInputChange(setAsumsiInflasiTahunan)}
              keyboardType="numeric"
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
            value={uangSaatIni}
            onChangeText={handleInputChange(setUangSaatIni)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target investasi setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={targetInvestasiPerBulan}
            onChangeText={handleInputChange(setTargetInvestasiPerBulan)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Target return investasi per tahun</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={returnInvestasi}
              onChangeText={handleInputChange(setReturnInvestasi)}
              keyboardType="numeric"
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan pensiun dalam</LexendText>
          <Spacer size={8} />
          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            {parseInt(usiaPensiun) - parseInt(usiaSekarang)} tahun
          </LexendText>
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
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
