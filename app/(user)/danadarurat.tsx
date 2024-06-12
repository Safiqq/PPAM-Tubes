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
import { InputKalkulatorDanaDarurat } from "@/constants/Types";
import kalkulatorDanaDarurat from "@/utils/danaDarurat";
import { handleInputChange } from "@/utils/utils";

export default function DanaDaruratScreen() {
  const router = useRouter();

  const [pengeluaranWajibPerBulan, setPengeluaranWajibPerBulan] =
    useState<string>("");
  const [sudahMenikah, setSudahMenikah] = useState("Sudah");
  const [jumlahTanggungan, setJumlahTanggungan] = useState<string>("");
  const [lamaMengumpulkan, setLamaMengumpulkan] = useState<string>("");
  const [uangSaatIni, setUangSaatIni] = useState<string>("");
  const [targetInvestasiPerBulan, setTargetInvestasiPerBulan] =
    useState<string>("");
  const [returnInvestasi, setReturnInvestasi] = useState<string>("");

  const handleButton = () => {
    try {
      const input: InputKalkulatorDanaDarurat = {
        pengeluaranWajibPerBulan: parseInt(pengeluaranWajibPerBulan) || 0,
        sudahMenikah: sudahMenikah == "Sudah",
        jumlahTanggungan: parseInt(jumlahTanggungan) || 0,
        lamaMengumpulkan: parseInt(lamaMengumpulkan) || 0,
        uangSaatIni: parseInt(uangSaatIni) || 0,
        targetInvestasiPerBulan: parseInt(targetInvestasiPerBulan) || 0,
        returnInvestasi: parseFloat(returnInvestasi) || 0,
      };

      const result = kalkulatorDanaDarurat(input);
      router.push({
        pathname: "/danadarurat-analisa",
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
            Dana Darurat
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
          <LexendText bold={true}>Pengeluaran wajibmu setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={pengeluaranWajibPerBulan}
            onChangeText={handleInputChange(setPengeluaranWajibPerBulan)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Apakah sudah menikah</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row gap-4">
            <Pressable
              className={`px-7 py-2 ${
                sudahMenikah == "Sudah"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setSudahMenikah("Sudah")}
            >
              <LexendText
                className={sudahMenikah == "Sudah" ? "" : "text-[#c5c5c5]"}
              >
                Sudah
              </LexendText>
            </Pressable>
            <Pressable
              className={`px-7 py-2 ${
                sudahMenikah == "Belum"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setSudahMenikah("Belum")}
            >
              <LexendText
                className={sudahMenikah == "Belum" ? "" : "text-[#c5c5c5]"}
              >
                Belum
              </LexendText>
            </Pressable>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Jumlah tanggungan</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={jumlahTanggungan}
              onChangeText={handleInputChange(setJumlahTanggungan)}
              keyboardType="numeric"
            />
            <LexendText>orang</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Target mengumpulkan dana darurat</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={lamaMengumpulkan}
              onChangeText={handleInputChange(setLamaMengumpulkan)}
              keyboardType="numeric"
            />
            <LexendText>bulan</LexendText>
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
