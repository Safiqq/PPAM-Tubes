import { StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Image } from "expo-image";

import { View } from "@/components/Themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import { Shadow } from "react-native-shadow-2";
import { Link } from "expo-router";
import BottomNavBar from "@/components/BottomNavBar";
import Spacer from "@/components/Spacer";
import { useEffect, useState } from "react";
import { getUserDataOnce } from "@/services/AuthService";
import { User } from "@/constants/Types";
import { getBalance } from "@/services/TransactionService";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const formatter = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
  });

  const [userData, setUserData] = useState<User>();
  const [userBalance, setUserBalance] = useState<{
    Pendapatan: number;
    Pengeluaran: number;
    Tabungan: number;
  }>();

  useEffect(() => {
    async function fetchData() {
      const usrData = await getUserDataOnce();
      if (usrData) setUserData(usrData);

      const usrBalance = await getBalance();
      if (usrBalance) setUserBalance(usrBalance);
    }

    fetchData();
  }, []);

  return (
    <View>
      <ScrollView
        style={{ backgroundColor: "white", paddingTop: insets.top }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 36,
          paddingBottom: 52,
        }}
      >
        <View className="mx-8">
          <LexendText className="text-[20px] text-[#C5C5C5]">Hello,</LexendText>
          <LexendText bold={true} className="text-[20px]">
            {userData?.name}
          </LexendText>
        </View>
        <Spacer size={24} />
        <View className="mx-6">
          <ImageBackground
            className="flex flex-row items-center justify-between px-4 py-6"
            imageStyle={{ borderRadius: 12 }}
            source={require("@/assets/images/gradientgreen.png")}
          >
            <View style={{ backgroundColor: "transparent" }}>
              <LexendText bold={true} className="text-[24px]">
                Rp{(
                  userBalance.Pendapatan +
                  userBalance.Tabungan -
                  userBalance.Pengeluaran
                ).toLocaleString("id")}
              </LexendText>
              <LexendText>Total Saldo</LexendText>
            </View>
            <LexendText>{formatter.format(new Date())}</LexendText>
          </ImageBackground>
        </View>
        <Spacer size={24} />
        <View className="mx-8 flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <View className="mr-2 h-12 w-12 items-center justify-center rounded-[12px] bg-black">
              <Image
                className="h-5 w-6"
                source={require("@/assets/images/logo/arrowdown.png")}
              />
            </View>
            <View>
              <LexendText className="text-[#C5C5C5]">Pendapatan</LexendText>
              <LexendText bold={true} className="text-[16px]">
                Rp50.000
              </LexendText>
            </View>
          </View>
          <View className="flex flex-row">
            <View className="mr-2 h-12 w-12 items-center justify-center rounded-[12px] bg-black">
              <Image
                className="h-5 w-6"
                source={require("@/assets/images/logo/arrowup.png")}
              />
            </View>
            <View>
              <LexendText className="text-[#C5C5C5]">Pengeluaran</LexendText>
              <LexendText bold={true} className="text-[16px]">
                Rp50.000
              </LexendText>
            </View>
          </View>
        </View>
        <Spacer size={32} />
        <View className="mx-6">
          <View className="flex flex-row items-center justify-between">
            <LexendText bold={true} className="text-[16px]">
              Pengingat Pembayaran
            </LexendText>
            <Link href="(user)/detailpengingat">
              <LexendText className="text-[#76C063] underline">
                Detail
              </LexendText>
            </Link>
          </View>
          <Spacer size={20} />
          <View className="flex flex-row gap-3">
            <View className="h-24 w-2 bg-[#76C063]"></View>
            <View className="flex-1 gap-3">
              {/* Loop reminders */}
              <View className="flex flex-row items-center justify-between">
                <View>
                  <LexendText bold={true}>18 Apr 2024</LexendText>
                  <LexendText>Tabungan Pensiun</LexendText>
                </View>
                <View className="mx-3 h-3 w-3 rounded-[24px] bg-[#D9D9D9]"></View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <View>
                  <LexendText bold={true}>18 Apr 2024</LexendText>
                  <LexendText>Dana Darurat</LexendText>
                </View>
                <View className="mx-3 h-3 w-3 rounded-[24px] bg-[#D9D9D9]"></View>
              </View>
            </View>
          </View>
        </View>
        <Spacer size={32} />
        <View className="mx-6">
          <LexendText bold={true} className="text-[16px]">
            Financial Planning
          </LexendText>
          <View className="mt-4 flex w-full flex-row items-center justify-between">
            <Link href="(user)/simulasikpr">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/simulasikpr.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>Simulasi KPR</LexendText>
              </View>
            </Link>
            <Link href="(user)/danapensiun">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/danapensiun.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>Dana Pensiun</LexendText>
              </View>
            </Link>
            <Link href="(user)/danadarurat">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/danadarurat.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>Dana Darurat</LexendText>
              </View>
            </Link>
          </View>
          <View className="mt-4 flex w-full flex-row items-center justify-between">
            <Link href="(user)/kalkulatorinvestasi">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/investasi.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>Investasi</LexendText>
              </View>
            </Link>
            <Link href="(user)/danamenikah">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/danamenikah.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>Dana Menikah</LexendText>
              </View>
            </Link>
            <Link href="(user)/dpproperti">
              <View className="items-center justify-center">
                <Shadow distance={5} style={styles.shadow}>
                  <Image
                    source={require("@/assets/images/logo/fitur/dpproperti.png")}
                    style={styles.image}
                  />
                </Shadow>
                <LexendText>DP Properti</LexendText>
              </View>
            </Link>
          </View>
        </View>
        <Spacer size={100} />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "center",
    gap: 8,
  },
  shadow: {
    width: 72,
    height: 72,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 52,
    height: 52,
  },
});
