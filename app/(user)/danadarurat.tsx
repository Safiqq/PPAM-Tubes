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
import BlackButton from "@/components/BlackButton";

export default function DanaDaruratScreen() {
  const [sudahMenikah, setSudahMenikah] = useState("Sudah");

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
          <Spacer size={32} />
          <BlackButton
            text="Lihat Hasil Strategi"
            href="/danadarurat-analisa"
          />
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
