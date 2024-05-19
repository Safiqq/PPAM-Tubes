import { ImageBackground, Pressable, ScrollView, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';

export default function TambahTransaksiPanduanAplikasiScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground>
        <LexendText>Panduan Aplikasi</LexendText>
        <LexendText>
          * Setelah menginstal aplikasi, buatlah akun dengan mengisi informasi yang diperlukan,
          seperti nama, alamat email, dan kata sandi.
        </LexendText>
        <LexendText>
          * Masukkan informasi keuangan Anda ke dalam aplikasi, seperti pengeluaran dan pemasukan.
        </LexendText>
        <LexendText>
          * Gunakan fitur-fitur yang disediakan oleh aplikasi, seperti pelacakan pengeluaran, atau
          pemantauan portofolio investasi. Manfaatkan alat-alat ini untuk mengelola keuangan Anda
          dengan lebih efisien.
        </LexendText>
        <LexendText>
          * Pantau kinerja keuangan Anda melalui aplikasi dan lakukan evaluasi secara berkala.
          Tinjau kemajuan Anda terhadap tujuan keuangan Anda dan buatlah penyesuaian jika
          diperlukan.
        </LexendText>
      </ImageBackground>
    </ScrollView>
  );
}
