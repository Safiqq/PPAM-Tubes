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
      <LexendText>Strategi</LexendText>
      <ImageBackground></ImageBackground>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 6, backgroundColor: "#ff4848" }}></View>
        <View>
          <LexendText>
            Cicilan KPRmu adalah Rp146,614,787 dan ini setara dengan 18.3% dari
            penghasilan bulananmu.
          </LexendText>
          <LexendText>
            Rasio ini sudah berbahaya, karena berpotensi mengganggu cash flow mu
            di masa depan. Pertimbangkan untuk menambah DP atau memperpanjang
            masa KPR.
          </LexendText>
        </View>
      </View>
      <LexendText bold={true} style={{ fontSize: 16 }}>
        Strategimu
      </LexendText>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/bag.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Pokok pinjaman</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp800.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Jumlah periode</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            60 bulan
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Bunga fix</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            5%
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>
            Total bunga periode fix
          </LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp57.116.775
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Bunga floating</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            9%
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>
            Total bunga periode floating
          </LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp89.498.012
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>
            % Total bunga KPR dari pokok pinjaman
          </LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            18.3%
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View>
          <LexendText style={{ fontSize: 10 }}>
            Sisa pokok pinjaman setelah periode fix
          </LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp555.177.075
          </LexendText>
        </View>
      </View>
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
