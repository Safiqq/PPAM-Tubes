import { Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import { View } from '@/components/Themed';
import { Shadow } from 'react-native-shadow-2';

export default function LaporanScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LexendText
        bold={true}
        style={{ fontSize: 20 }}
      >
        Laporan Keuangan
      </LexendText>
      {/* Insert graph */}
      <LexendText
        bold={true}
        style={{ fontSize: 16 }}
      >
        Alokasi Keuangan
      </LexendText>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={{ padding: 8, borderRadius: 24, backgroundColor: '#f0f0f0' }}>
          <LexendText style={{ fontSize: 12, color: '#8e8e8e' }}>Mingguan</LexendText>
        </Pressable>
        <Pressable style={{ padding: 8, borderRadius: 24, backgroundColor: '#76C063' }}>
          <LexendText style={{ fontSize: 12 }}>Bulanan</LexendText>
        </Pressable>
        <Pressable style={{ padding: 8, borderRadius: 24, backgroundColor: '#f0f0f0' }}>
          <LexendText style={{ fontSize: 12, color: '#8e8e8e' }}>Tahunan</LexendText>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <LexendText style={{ fontSize: 12 }}>Pendapatan</LexendText>
        <Image
          source={require('@/assets/images/logo/chevrondown.png')}
          style={{ width: 16, height: 16 }}
        />
      </View>
      {/* Insert graph */}
      <LexendText
        bold={true}
        style={{ fontSize: 16 }}
      >
        Profil Arus Kas
      </LexendText>
      {/* Insert graph */}
      <LexendText
        bold={true}
        style={{ fontSize: 16 }}
      >
        Pengeluaran Berdasarkan Kategori
      </LexendText>
      <View>
        {/* Loop pengeluaran berdasarkan kategori */}
        <Shadow style={{ flexDirection: 'row' }}>
          <Image
            source={require('@/assets/images/logo/makandanminum.png')}
            style={{ width: 16, height: 16 }}
          />
          <View>
            <LexendText
              bold={true}
              style={{ fontSize: 16 }}
            >
              Makan dan Minum
            </LexendText>
            <LexendText style={{ fontSize: 10, color: '#ef4e4e' }}>- Rp50.000</LexendText>
          </View>
          <LexendText style={{ fontSize: 16 }}>33%</LexendText>
        </Shadow>
        <Shadow style={{ flexDirection: 'row' }}>
          <Image
            source={require('@/assets/images/logo/kesehatan.png')}
            style={{ width: 16, height: 16 }}
          />
          <View>
            <LexendText
              bold={true}
              style={{ fontSize: 16 }}
            >
              Kesehatan
            </LexendText>
            <LexendText style={{ fontSize: 10, color: '#ef4e4e' }}>- Rp50.000</LexendText>
          </View>
          <LexendText style={{ fontSize: 16 }}>33%</LexendText>
        </Shadow>
        <Shadow style={{ flexDirection: 'row' }}>
          <Image
            source={require('@/assets/images/logo/bahanmakanan.png')}
            style={{ width: 16, height: 16 }}
          />
          <View>
            <LexendText
              bold={true}
              style={{ fontSize: 16 }}
            >
              Bahan Makanan
            </LexendText>
            <LexendText style={{ fontSize: 10, color: '#ef4e4e' }}>- Rp50.000</LexendText>
          </View>
          <LexendText style={{ fontSize: 16 }}>33%</LexendText>
        </Shadow>
      </View>
    </ScrollView>
  );
}
