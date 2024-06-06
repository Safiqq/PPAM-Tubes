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
import { InputKalkulatorInvestasi } from "@/constants/Types";
import kalkulatorInvestasi from "@/utils/kalkulatorInvestasi";
import { useRouter } from "expo-router";

export default function KalkulatorInvestasiScreen() {
  const [jumlahTarget, setJumlahTarget] = useState<string>("100000000");
  const [waktuMengumpulkan, setWaktuMengumpulkan] = useState<string>("5");
  const [uangSaatIni, setUangSaatIni] = useState<string>("5000000");
  const [menabungSetiap, setMenabungSetiap] = useState<"Bulan" | "Tahun">(
    "Bulan",
  );
  const [menambahPada, setMenambahPada] = useState<"Awal" | "Akhir">("Awal");
  const [targetInvestasiPerBulan, setTargetInvestasiPerBulan] =
    useState<string>("1000000");
  const [returnProduk, setReturnProduk] = useState<string>("7.35");

  const router = useRouter();

  const handleButton = () => {
    const input: InputKalkulatorInvestasi = {
      jumlahTarget: parseInt(jumlahTarget) || 0,
      waktuMengumpulkan: parseInt(waktuMengumpulkan) || 0,
      uangSaatIni: parseInt(uangSaatIni) || 0,
      menabungSetiap: menabungSetiap,
      targetInvestasiPerBulan: parseInt(targetInvestasiPerBulan) || 0,
      returnProduk: parseFloat(returnProduk) || 0,
    };

    const result = kalkulatorInvestasi(input);
    router.push({
      pathname: "/kalkulatorinvestasi-analisa",
      params: { input: JSON.stringify(input), result: JSON.stringify(result) },
    });
  };

  const validateNumberInput = (input: string): boolean => {
    const regex = /^[0-9.]*$/;
    return regex.test(input);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (text: string) => {
      if (validateNumberInput(text)) {
        setter(text);
      }
    };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <ImageBackground
          className="h-[100px] items-center justify-center"
          source={require("@/assets/images/gradientgreen-block.png")}
        >
          <TouchableOpacity
            className="absolute left-3 top-7 p-4"
            onPress={() => router.back()}
          >
            <Image source={require("@/assets/images/logo/backbutton.png")} />
          </TouchableOpacity>
          <LexendText bold={true} className="text-[20px]">
            Kalkulator Investasi
          </LexendText>
        </ImageBackground>
        <View className="px-7">
          <Spacer size={24} />
          <LexendText bold={true}>Jumlah uang yang ingin dicapai</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={jumlahTarget}
            onChangeText={handleInputChange(setJumlahTarget)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Waktu mengumpulkan uang</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row items-center gap-3">
            <LexendTextInput
              className="h-9 w-28 rounded-[8px] border border-[#C5C5C5] px-3"
              placeholder="0"
              value={waktuMengumpulkan}
              onChangeText={handleInputChange(setWaktuMengumpulkan)}
              keyboardType="numeric"
            />
            <LexendText>tahun lagi</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Uang yang dimiliki saat ini</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="0"
            value={uangSaatIni}
            onChangeText={handleInputChange(setUangSaatIni)}
            keyboardType="numeric"
          />
          <Spacer size={20} />
          <LexendText bold={true}>Akan menabung setiap</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row gap-4">
            <Pressable
              className={`px-3 py-2 ${
                menabungSetiap == "Bulan"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setMenabungSetiap("Bulan")}
            >
              <LexendText
                className={menabungSetiap == "Bulan" ? "" : "text-[#c5c5c5]"}
              >
                Setiap Bulan
              </LexendText>
            </Pressable>
            <Pressable
              className={`px-3 py-2 ${
                menabungSetiap == "Tahun"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setMenabungSetiap("Tahun")}
            >
              <LexendText
                className={menabungSetiap == "Tahun" ? "" : "text-[#c5c5c5]"}
              >
                Setiap Tahun
              </LexendText>
            </Pressable>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan menambahkan dana pada</LexendText>
          <Spacer size={8} />
          <View className="flex flex-row gap-4">
            <Pressable
              className={`px-3 py-2 ${
                menambahPada == "Awal"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setMenambahPada("Awal")}
            >
              <LexendText
                className={menambahPada == "Awal" ? "" : "text-[#c5c5c5]"}
              >
                Awal {menabungSetiap}
              </LexendText>
            </Pressable>
            <Pressable
              className={`px-3 py-2 ${
                menambahPada == "Akhir"
                  ? "bg-[#76c063]"
                  : "border border-[#c5c5c5]"
              } rounded-[8px]`}
              onPress={() => setMenambahPada("Akhir")}
            >
              <LexendText
                className={menambahPada == "Akhir" ? "" : "text-[#c5c5c5]"}
              >
                Akhir {menabungSetiap}
              </LexendText>
            </Pressable>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>
            Target investasi setiap {menabungSetiap.toLowerCase()}
          </LexendText>
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
              value={returnProduk}
              onChangeText={handleInputChange(setReturnProduk)}
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
