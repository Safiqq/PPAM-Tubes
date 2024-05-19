import { Pressable, ScrollView, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";

export default function TambahTransaksiPendapatanScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LexendText>Tambah Transaksi</LexendText>
      <LexendText>Pendapatan</LexendText>
      <LexendText bold={true} style={{ fontSize: 12 }}>
        Nominal
      </LexendText>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#c5c5c5",
          borderRadius: 12,
          width: "85%",
          height: 36,
        }}
        placeholder="0"
      />
      <LexendText bold={true} style={{ fontSize: 12 }}>
        Kategori
      </LexendText>
      <View>
        <Pressable
          style={{
            padding: 8,
            borderColor: "#c5c5c5",
            borderRadius: 24,
            borderWidth: 1,
          }}
        >
          <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
            Gaji
          </LexendText>
        </Pressable>
        <Pressable
          style={{
            padding: 8,
            borderColor: "#c5c5c5",
            borderRadius: 24,
            borderWidth: 1,
          }}
        >
          <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
            Bonus
          </LexendText>
        </Pressable>
        <Pressable
          style={{
            padding: 8,
            borderColor: "#c5c5c5",
            borderRadius: 24,
            borderWidth: 1,
          }}
        >
          <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
            Hasil Investasi
          </LexendText>
        </Pressable>
        <Pressable
          style={{
            padding: 8,
            borderColor: "#c5c5c5",
            borderRadius: 24,
            borderWidth: 1,
          }}
        >
          <LexendText style={{ color: "#c5c5c5", fontSize: 12 }}>
            Lainnya
          </LexendText>
        </Pressable>
      </View>
      <LexendText bold={true} style={{ fontSize: 12 }}>
        Tanggal
      </LexendText>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#c5c5c5",
          borderRadius: 12,
          width: "85%",
          height: 36,
        }}
      ></TextInput>
      {/* Implement date picker */}
      {/* Implement checkbox Transaksi Berulang */}
      {/* Hide View di bawah kalau checkboxnya false */}
      <View style={{ flexDirection: "row" }}>
        <View>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Berulang Setiap
          </LexendText>
        </View>
        <View>
          <LexendText bold={true} style={{ fontSize: 12 }}>
            Berulang Hingga
          </LexendText>
        </View>
      </View>
      <LexendText bold={true} style={{ fontSize: 12 }}>
        Keterangan
      </LexendText>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#c5c5c5",
          borderRadius: 12,
          width: "85%",
          height: 36,
        }}
        placeholder="Deskripsi singkat"
      />
    </ScrollView>
  );
}
