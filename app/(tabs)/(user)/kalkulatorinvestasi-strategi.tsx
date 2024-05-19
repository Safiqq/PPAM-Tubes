import { ImageBackground, Pressable, ScrollView, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import { Image } from 'expo-image';

export default function TambahTransaksiPanduanAplikasiScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground></ImageBackground>
      <LexendText>Analisa</LexendText>
      <LexendText>Strategi</LexendText>
      <ImageBackground></ImageBackground>
      <ImageBackground></ImageBackground>
      <LexendText
        bold={true}
        style={{ fontSize: 16 }}
      >
        Strategimu
      </LexendText>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/koin.png')}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#BDBDBD' }}>
          <LexendText style={{ fontSize: 10 }}>Uangmu saat ini</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 12 }}
          >
            Rp5.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/koin.png')}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#BDBDBD' }}>
          <LexendText style={{ fontSize: 10 }}>Jumlah investasi / bulan</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 12 }}
          >
            Rp1.000.000
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/diskon.png')}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#BDBDBD' }}>
          <LexendText style={{ fontSize: 10 }}>Return investasi</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 12 }}
          >
            7.35% / tahun
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/jam.png')}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#BDBDBD' }}>
          <LexendText style={{ fontSize: 10 }}>Lama investasi</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 12 }}
          >
            5 tahun
          </LexendText>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/piala.png')}
          style={{ width: 12, height: 12 }}
        />
        <View style={{ borderBottomWidth: 2, borderBottomColor: '#BDBDBD' }}>
          <LexendText style={{ fontSize: 10 }}>Hasil investasi</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 12 }}
          >
            Rp79.457.735
          </LexendText>
          <LexendText style={{ fontSize: 10, color: '#FF4848' }}>Kurang Rp20.542.265</LexendText>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('@/assets/images/logo/jam.png')}
          style={{ width: 12, height: 12 }}
        />
        <View>
          <LexendText style={{ fontSize: 10 }}>Breakdown</LexendText>
          {/* Insert bar chart */}
          <View style={{ flexDirection: 'row' }}>
            <View>
              <LexendText style={{ fontSize: 8 }}>Rp65.000.000</LexendText>
              <LexendText style={{ fontSize: 8 }}>Pokok investasi</LexendText>
            </View>
            <View>
              <LexendText style={{ fontSize: 8 }}>Rp14.457.735</LexendText>
              <LexendText style={{ fontSize: 8 }}>Bunga investasi</LexendText>
            </View>
          </View>
        </View>
      </View>
      <LexendText
        bold={true}
        style={{ fontSize: 12 }}
      >
        Timeline Investasi
      </LexendText>
      {/* Insert timeline */}
      <Pressable style={{ backgroundColor: '#000000', height: 44, borderRadius: 12 }}>
        <LexendText
          bold={true}
          style={{ fontSize: 16 }}
        >
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </Pressable>
    </ScrollView>
  );
}
