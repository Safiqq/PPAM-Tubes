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
import { float, handleInputChange, int } from "@/utils/utils";
import { useState } from "react";
import { InputSimulasiKPR } from "@/constants/Types";
import hitungSimulasiKPR from "@/utils/simulasiKPR";

export default function SimulasiKPRScreen() {
  const router = useRouter();

  const [hargaPropertiImpian, setHargaPropertiImpian] = useState<string>("");
  const [persentaseDP, setPersentaseDP] = useState<string>("");
  const [penghasilanBulanan, setPenghasilanBulanan] = useState<string>("");
  const [lamaKPRBulan, setLamaKPRBulan] = useState<string>("");
  const [persenBungaFix, setPersenBungaFix] = useState<string>("");
  const [periodeBungaFixBulan, setPeriodeBungaFixBulan] = useState<string>("");
  const [persenBungaFloating, setPersenBungaFloating] = useState<string>("");

  const getPeriodeBungaFloating = () => {
    let res = parseInt(lamaKPRBulan) - parseInt(periodeBungaFixBulan) || 0;
    if (res < 0) res = 0;
    return res;
  };

  const handleButton = () => {
    if (
      hargaPropertiImpian == "" ||
      persentaseDP == "" ||
      penghasilanBulanan == "" ||
      lamaKPRBulan == "" ||
      persenBungaFix == "" ||
      periodeBungaFixBulan == "" ||
      persenBungaFloating == ""
    ) {
      alert("Input tidak boleh kosong!");
      return;
    }
    try {
      const input: InputSimulasiKPR = {
        hargaPropertiImpian: int(hargaPropertiImpian) || 0,
        persentaseDP: float(persentaseDP) || 0,
        penghasilanBulanan: int(penghasilanBulanan) || 0,
        lamaKPRBulan: int(lamaKPRBulan) || 0,
        persenBungaFix: float(persenBungaFix) || 0,
        periodeBungaFixBulan: int(periodeBungaFixBulan) || 0,
        persenBungaFloating: float(persenBungaFloating) || 0,
      };
      console.log(input);

      const result = hitungSimulasiKPR(input);
      router.push({
        pathname: "/simulasikpr-analisa",
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
            value={hargaPropertiImpian}
            onChangeText={handleInputChange(setHargaPropertiImpian)}
            keyboardType="numeric"
          />
          <Spacer size={20} />

          <LexendText bold={true}>% DP yang Diinginkan</LexendText>
          <Spacer size={8} />

          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={persentaseDP}
              onChangeText={handleInputChange(setPersentaseDP)}
              keyboardType="numeric"
            />
            <LexendText>%</LexendText>
          </View>
          <Spacer size={20} />

          <LexendText bold={true}>Jumlah Pinjaman Pokok</LexendText>
          <Spacer size={8} />

          <LexendText className="w-40 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            Rp
            {(
              (parseInt(hargaPropertiImpian) * parseFloat(persentaseDP)) /
                100 || 0
            ).toLocaleString("id")}
          </LexendText>
          <Spacer size={20} />

          <LexendText bold={true}>Penghasilan Bulanan</LexendText>
          <Spacer size={8} />

          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={penghasilanBulanan}
            onChangeText={handleInputChange(setPenghasilanBulanan)}
            keyboardType="numeric"
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
                  value={lamaKPRBulan}
                  onChangeText={handleInputChange(setLamaKPRBulan)}
                  keyboardType="numeric"
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
                  value={persenBungaFix}
                  onChangeText={handleInputChange(setPersenBungaFix)}
                  keyboardType="numeric"
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
                  value={periodeBungaFixBulan}
                  onChangeText={handleInputChange(setPeriodeBungaFixBulan)}
                  keyboardType="numeric"
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
                  value={persenBungaFloating}
                  onChangeText={handleInputChange(setPersenBungaFloating)}
                  keyboardType="numeric"
                />
                <LexendText>bulan</LexendText>
              </View>
            </View>
          </View>
          <Spacer size={20} />

          <LexendText bold={true}>Periode Bunga Floating</LexendText>
          <Spacer size={8} />

          <LexendText className="w-20 rounded-[8px] bg-[#d9d9d9] p-2 text-center">
            {getPeriodeBungaFloating()} bulan
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
