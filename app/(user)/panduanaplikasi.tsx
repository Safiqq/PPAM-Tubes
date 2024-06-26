import {
  ImageBackground,
  Image,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { useRouter } from "expo-router";

export default function PanduanAplikasiScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <ImageBackground
          className="h-[100px] items-center justify-center"
          source={require("@/assets/images/gradientgreen-block.png")}
        >
          <Pressable
            className="absolute left-3 top-7 p-4"
            onPress={() => router.back()}
          >
            <Image source={require("@/assets/images/logo/backbutton.png")} />
          </Pressable>
          <LexendText bold={true} className="text-[20px]">
            Panduan Aplikasi
          </LexendText>
        </ImageBackground>
        <Spacer size={60} />
        <View className="px-10">
          <View className="flex flex-row gap-2">
            <LexendText className="text-[15px]">&#8226;</LexendText>
            <LexendText className="text-[15px]">
              Setelah menginstal aplikasi, buatlah akun dengan mengisi informasi
              yang diperlukan, seperti nama, alamat email, dan kata sandi.
            </LexendText>
          </View>
          <Spacer size={16} />
          <View className="flex flex-row gap-2">
            <LexendText className="text-[15px]">&#8226;</LexendText>
            <LexendText className="text-[15px]">
              Masukkan informasi keuangan Anda ke dalam aplikasi, seperti
              pengeluaran dan pemasukan.
            </LexendText>
          </View>
          <Spacer size={16} />
          <View className="flex flex-row gap-2">
            <LexendText className="text-[15px]">&#8226;</LexendText>
            <LexendText className="text-[15px]">
              Gunakan fitur-fitur yang disediakan oleh aplikasi, seperti
              pelacakan pengeluaran, atau pemantauan portofolio investasi.
              Manfaatkan alat-alat ini untuk mengelola keuangan Anda dengan
              lebih efisien.
            </LexendText>
          </View>
          <Spacer size={16} />
          <View className="flex flex-row gap-2">
            <LexendText className="text-[15px]">&#8226;</LexendText>
            <LexendText className="text-[15px]">
              Pantau kinerja keuangan Anda melalui aplikasi dan lakukan evaluasi
              secara berkala. Tinjau kemajuan Anda terhadap tujuan keuangan Anda
              dan buatlah penyesuaian jika diperlukan.
            </LexendText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
