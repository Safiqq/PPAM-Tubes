import { ImageBackground, Pressable, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import { Image } from "expo-image";

export default function TambahTransaksiPanduanAplikasiScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground></ImageBackground>
      <LexendText>Analisa</LexendText>
      <LexendText>Rekomendasi</LexendText>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={{ backgroundColor: "#C5C5C5" }}>
          <LexendText style={{ fontSize: 12, color: "#8E8E8E" }}>
            Nominal
          </LexendText>
        </Pressable>
        <Pressable style={{ backgroundColor: "#000000" }}>
          <LexendText style={{ fontSize: 12, color: "#ffffff" }}>
            Durasi
          </LexendText>
        </Pressable>
      </View>
      <ImageBackground></ImageBackground>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/koin.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Uangmu saat ini</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp5.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/koin.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>
            Jumlah investasi / bulan
          </LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp1.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/diskon.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Return investasi</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            7.35% / tahun
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/jam.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Lama investasi</LexendText>
          <View style={{ flexDirection: "row" }}>
            <LexendText
              bold={true}
              style={{
                fontSize: 12,
                color: "#EF4E4E",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              5 tahun
            </LexendText>
            <LexendText bold={true} style={{ fontSize: 12 }}>
              7 tahun
            </LexendText>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/piala.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Hasil investasi</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp117.767.858
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/list.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Pilihan investasi</LexendText>
          <LexendText
            bold={true}
            style={{ backgroundColor: "#76C063", padding: 4 }}
          >
            Emas
          </LexendText>
          <LexendText
            bold={true}
            style={{ backgroundColor: "#76C063", padding: 4 }}
          >
            Reksadana Indeks
          </LexendText>
          <LexendText
            bold={true}
            style={{ backgroundColor: "#76C063", padding: 4 }}
          >
            Reksadana Campuran
          </LexendText>
          <LexendText
            bold={true}
            style={{ backgroundColor: "#76C063", padding: 4 }}
          >
            Saham
          </LexendText>
          <LexendText
            bold={true}
            style={{ backgroundColor: "#76C063", padding: 4 }}
          >
            Exchange-Traded Fund (ETF)
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/jam.png")}
          style={{ width: 12, height: 12 }}
        />
        <View>
          <LexendText style={{ fontSize: 10 }}>Breakdown</LexendText>
          {/* Insert bar chart */}
          <View style={{ flexDirection: "row" }}>
            <View>
              <LexendText style={{ fontSize: 8 }}>Rp5.000.420</LexendText>
              <LexendText style={{ fontSize: 8 }}>Pokok investasi</LexendText>
            </View>
            <View>
              <LexendText style={{ fontSize: 8 }}>Rp112.767.458</LexendText>
              <LexendText style={{ fontSize: 8 }}>Bunga investasi</LexendText>
            </View>
          </View>
        </View>
      </View>
      <LexendText bold={true} style={{ fontSize: 12 }}>
        Timeline Investasi
      </LexendText>
      {/* Insert timeline */}
      <Pressable
        style={{ backgroundColor: "#000000", height: 44, borderRadius: 12 }}
      >
        <LexendText bold={true} style={{ fontSize: 16 }}>
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </Pressable>
    </ScrollView>
  );
}
