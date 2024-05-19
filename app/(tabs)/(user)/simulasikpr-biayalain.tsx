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
      <LexendText>Biaya Lain</LexendText>
      <ImageBackground></ImageBackground>
      <LexendText bold={true} style={{ fontSize: 16 }}>
        Rincian
      </LexendText>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/koin.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Biaya BPHTB</LexendText>
          <LexendText
            bold={true}
            style={{
              fontSize: 12,
              color: "#EF4E4E",
              textDecorationLine: "underline",
            }}
          >
            Isi NJOP-TKP
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/kalender.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Biaya AJB</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp10.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/diskon.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Biaya balik nama</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp10.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/koin.png")}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Biaya notaris</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Rp15.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/logo/diskon.png")}
          style={{ width: 12, height: 12 }}
        />
        <View>
          <LexendText style={{ fontSize: 10 }}>Biaya bank</LexendText>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            +- Rp10.000.000
          </LexendText>
        </View>
      </View>
      <View
        style={{ borderRadius: 12, backgroundColor: "#F5F5F5", padding: 8 }}
      >
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Appraisal</LexendText>
          <LexendText bold={true} style={{ fontSize: 10 }}>
            Rp1.000.000
          </LexendText>
        </View>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Administrasi</LexendText>
          <LexendText bold={true} style={{ fontSize: 10 }}>
            Rp1.000.000
          </LexendText>
        </View>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Provinsi</LexendText>
          <LexendText bold={true} style={{ fontSize: 10 }}>
            Rp8.000.000
          </LexendText>
        </View>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "#BDBDBD" }}>
          <LexendText style={{ fontSize: 10 }}>Asuransi jiwa</LexendText>
          <LexendText bold={true} style={{ fontSize: 10 }}>
            Sesuai umur
          </LexendText>
        </View>
        <View>
          <LexendText style={{ fontSize: 10 }}>Asuransi kebakaran</LexendText>
          <LexendText bold={true} style={{ fontSize: 10 }}>
            Sesuai nilai rumah
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
