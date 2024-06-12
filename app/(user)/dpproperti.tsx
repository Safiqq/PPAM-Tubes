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
import { InputKalkulatorDPProperti } from "@/constants/Types";
import { handleInputChange } from "@/utils/utils";
import { useState } from "react";
import kalkulatorDPProperti from "@/utils/dpProperti";

export default function DPPropertiScreen() {
  const router = useRouter();

  const [lamaMengumpulkan, setLamaMengumpulkan] = useState<string>("");
  const [hargaProperti, setHargaProperti] = useState<string>("");
  const [persenDP, setPersenDP] = useState<string>("");
  const [inflasiProperti, setInflasiProperti] = useState<string>("");
  const [uangSaatIni, setUangSaatIni] = useState<string>("");
  const [targetInvestasiPerBulan, setTargetInvestasiPerBulan] =
    useState<string>("");
  const [returnInvestasi, setReturnInvestasi] = useState<string>("");

  const handleButton = () => {
    try {
      const input: InputKalkulatorDPProperti = {
        lamaMengumpulkan: parseInt(lamaMengumpulkan) || 0,
        hargaProperti: parseInt(hargaProperti) || 0,
        persenDP: parseFloat(persenDP) || 0,
        inflasiProperti: parseFloat(inflasiProperti) || 0,
        uangSaatIni: parseInt(uangSaatIni) || 0,
        targetInvestasiPerBulan: parseInt(targetInvestasiPerBulan) || 0,
        returnInvestasi: parseFloat(returnInvestasi) || 0,
      };

      const result = kalkulatorDPProperti(input);
      router.push({
        pathname: "/dpproperti-analisa",
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
              value={lamaMengumpulkan}
              onChangeText={handleInputChange(setLamaMengumpulkan)}
              keyboardType="numeric"
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Harga Properti Impian</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={hargaProperti}
            onChangeText={handleInputChange(setHargaProperti)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>% DP yang Diinginkan</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={persenDP}
              onChangeText={handleInputChange(setPersenDP)}
              keyboardType="numeric"
            />
            <LexendText>%</LexendText>
          </View>
          <Spacer size={20} />
          <View className="flex flex-row justify-between">
            <View>
              <LexendText bold={true}>DP setara dengan</LexendText>
              <Spacer size={8} />
              <LexendText className="rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                Rp{(parseInt(persenDP) * parseInt(hargaProperti)) / 100 || 0}
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>KPR / pokok utang</LexendText>
              <Spacer size={8} />
              <LexendText className="rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                Rp
                {((100 - parseFloat(persenDP)) * parseInt(hargaProperti)) / 100 ||
                  0}
              </LexendText>
            </View>
            <View>
              <LexendText bold={true}>% KPR</LexendText>
              <Spacer size={8} />
              <LexendText className="w-16 rounded-[8px] bg-[#D9D9D9] px-3 py-2.5 text-center">
                {100 - parseFloat(persenDP) || 0}%
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>Asumsi inflasi properti</LexendText>
              <Spacer size={8} />
              <View className="flex flex-row items-center gap-2">
                <LexendTextInput
                  className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
                  placeholder="0"
                  value={inflasiProperti}
                  onChangeText={handleInputChange(setInflasiProperti)}
                  keyboardType="numeric"
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
          <LexendText bold={true}>
            Berinvestasi di produk yang returnnya
          </LexendText>
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
