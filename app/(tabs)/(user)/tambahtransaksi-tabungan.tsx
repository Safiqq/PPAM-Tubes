import { ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";

export default function TambahTransaksiPendaScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LexendText>Tambah Transaksi</LexendText>
      <LexendText>Tabungan</LexendText>
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
