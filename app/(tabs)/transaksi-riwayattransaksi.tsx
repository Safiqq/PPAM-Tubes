import { ImageBackground, ScrollView, View } from "react-native";

import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import { Shadow } from "react-native-shadow-2";

export default function TransaksiRiwayatTransaksiScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <ImageBackground>
          <LexendText bold={true} style={{ fontSize: 20 }}>
            Transaksi
          </LexendText>
          <View style={{ alignItems: "center" }}>
            <LexendText style={{ fontSize: 16 }}>Total Balance</LexendText>
            <LexendText bold={true} style={{ fontSize: 40 }}>
              Rp600.000
            </LexendText>
          </View>
          <Shadow
            distance={5}
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              // alignItems: 'center',
              // justifyContent: 'center',
              flexDirection: "row",
            }}
          >
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("@/assets/images/logo/arrowdown.png")}
                  style={{ width: 12, height: 12 }}
                />
                <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
                  Pendapatan
                </LexendText>
              </View>
              <LexendText
                bold={true}
                style={{ color: "#76C063", fontSize: 14 }}
              >
                Rp50.000
              </LexendText>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("@/assets/images/logo/arrowup.png")}
                  style={{ width: 12, height: 12 }}
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
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("@/assets/images/logo/bag.png")}
                  style={{ width: 12, height: 12 }}
                />
                <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
                  Tabungan
                </LexendText>
              </View>
              <LexendText bold={true} style={{ fontSize: 14 }}>
                Rp600.000
              </LexendText>
            </View>
          </Shadow>
          <LexendText>Riwayat Transaksi</LexendText>
          {/* Loop riwayat transaksi */}
          <View>
            <LexendText>14 Apr 2024</LexendText>
            <Shadow style={{ flexDirection: "row" }}>
              {/* Loop riwayat transaksi pada hari yg sama */}
              <View>
                <Image
                  source={require("@/assets/images/logo/makandanminum.png")}
                  style={{ width: 16, height: 16 }}
                />
                <View>
                  <LexendText bold={true} style={{ fontSize: 16 }}>
                    Makan siang
                  </LexendText>
                  <LexendText style={{ fontSize: 10 }}>
                    Makan dan minum
                  </LexendText>
                </View>
                <LexendText style={{ fontSize: 16, color: "#ef4e4e" }}>
                  - Rp50.000
                </LexendText>
              </View>
            </Shadow>
          </View>
          <View>
            <LexendText>13 Apr 2024</LexendText>
            <Shadow style={{ flexDirection: "row" }}>
              <View>
                <Image
                  source={require("@/assets/images/logo/gaji.png")}
                  style={{ width: 16, height: 16 }}
                />
                <View>
                  <LexendText bold={true} style={{ fontSize: 16 }}>
                    Design
                  </LexendText>
                  <LexendText style={{ fontSize: 10 }}>Gaji</LexendText>
                </View>
                <LexendText style={{ fontSize: 16, color: "#76C063" }}>
                  + Rp50.000
                </LexendText>
              </View>
              <View>
                <Image
                  source={require("@/assets/images/logo/tabungan.png")}
                  style={{ width: 16, height: 16 }}
                />
                <View>
                  <LexendText bold={true} style={{ fontSize: 16 }}>
                    Tabungan
                  </LexendText>
                </View>
                <LexendText style={{ fontSize: 16 }}>+ Rp600.000</LexendText>
              </View>
            </Shadow>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
