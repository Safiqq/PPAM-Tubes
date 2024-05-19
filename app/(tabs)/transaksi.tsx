import {
  ImageBackground,
  ScrollView,
  View,
  Image,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import { Shadow } from "react-native-shadow-2";
import Spacer from "@/components/Spacer";
import { useState } from "react";

export default function TransaksiRiwayatTransaksiScreen() {
  const [tab, setTab] = useState("Riwayat Transaksi");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <Image
          className="absolute top-0 -mt-8 h-64 w-full rounded-[28px]"
          source={require("@/assets/images/gradientgreen-1.png")}
        />
        <Spacer size={44} />
        <View>
          <LexendText bold={true} className="mx-7 text-[20px]">
            Transaksi
          </LexendText>
          <Spacer size={32} />
          <View className="items-center">
            <LexendText className="text-[16px]">Total Balance</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[40px]">
              Rp600.000
            </LexendText>
          </View>
          <Spacer size={16} />
          <View className="mx-5">
            <Shadow className="flex w-full flex-row justify-between rounded-[16px] bg-[#ffffff] px-6 py-5">
              <View className="items-center">
                <View className="flex flex-row items-center gap-1">
                  <Image
                    className="h-2.5 w-1.5"
                    source={require("@/assets/images/logo/arrowdown.png")}
                  />
                  <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
                    Pendapatan
                  </LexendText>
                </View>
                <LexendText bold={true} className="text-[14px] text-[#76C063]">
                  Rp50.000
                </LexendText>
              </View>
              <View className="items-center">
                <View className="flex flex-row items-center gap-1">
                  <Image
                    className="h-2.5 w-1.5"
                    source={require("@/assets/images/logo/arrowup.png")}
                    tintColor="#EF4E4E"
                  />
                  <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
                    Pengeluaran
                  </LexendText>
                </View>
                <LexendText
                  bold={true}
                  style={{ color: "#EF4E4E", fontSize: 14 }}
                >
                  Rp50.000
                </LexendText>
              </View>
              <View className="items-center">
                <View className="flex flex-row items-center gap-1">
                  <Image
                    source={require("@/assets/images/logo/bag.png")}
                    className="h-4 w-4"
                  />
                  <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
                    Tabungan
                  </LexendText>
                </View>
                <LexendText bold={true} className="text-[14px]">
                  Rp600.000
                </LexendText>
              </View>
            </Shadow>
          </View>
        </View>
        <Spacer size={20} />
        <View className="mx-5 flex flex-row justify-between">
          <Pressable
            className={`w-1/2 text-center ${tab == "Riwayat Transaksi" ? "border-b" : ""}`}
            onPress={() => setTab("Riwayat Transaksi")}
          >
            <LexendText
              className={`text-center text-[14px] font-semibold ${tab == "Riwayat Transaksi" ? "" : "text-[#C5C5C5]"}`}
            >
              Riwayat Transaksi
            </LexendText>
            <Spacer size={8} />
          </Pressable>
          <Pressable
            className={`w-1/2 text-center ${tab == "Transaksi Berutang" ? "border-b" : ""}`}
            onPress={() => setTab("Transaksi Berutang")}
          >
            <LexendText
              className={`text-center text-[14px] font-semibold ${tab == "Transaksi Berutang" ? "" : "text-[#C5C5C5]"}`}
            >
              Transaksi Berutang
            </LexendText>
            <Spacer size={8} />
          </Pressable>
        </View>
        <Spacer size={20} />
        <View className="mx-5">
          <LexendText className="text-[#C5C5C5]">14 Apr 2024</LexendText>
          <Spacer size={4} />
          <Shadow className="flex w-full flex-row items-center justify-between rounded-[16px] px-4 py-4">
            <View className="flex flex-row items-center gap-3">
              <Image source={require("@/assets/images/logo/gaji.png")} />
              <View>
                <LexendText bold={true} className="text-[16px]">
                  Design
                </LexendText>
                <LexendText className="text-[10px]">Gaji</LexendText>
              </View>
            </View>
            <LexendText className="text-[16px] text-[#EF4E4E]">
              - Rp50.000
            </LexendText>
          </Shadow>
          <Spacer size={20} />
          <LexendText>13 Apr 2024</LexendText>
          <Spacer size={4} />
          <Shadow className="w-full rounded-[16px] px-4 py-4">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-3">
                <Image source={require("@/assets/images/logo/gaji.png")} />
                <View>
                  <LexendText bold={true} className="text-[16px]">
                    Design
                  </LexendText>
                  <LexendText className="text-[10px]">Gaji</LexendText>
                </View>
              </View>
              <LexendText className="text-[16px] text-[#76C063]">
                + Rp50.000
              </LexendText>
            </View>
            <Spacer size={28} />
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-3">
                <Image source={require("@/assets/images/logo/tabungan.png")} />
                <View>
                  <LexendText bold={true} className="text-[16px]">
                    Tabungan
                  </LexendText>
                </View>
              </View>
              <LexendText className="text-[16px]">+ Rp600.000</LexendText>
            </View>
          </Shadow>
        </View>
        <Spacer size={8} />
      </ScrollView>
    </SafeAreaView>
  );
}
