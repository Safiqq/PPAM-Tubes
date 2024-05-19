import { ImageBackground, ScrollView, View } from 'react-native';

import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import { Shadow } from 'react-native-shadow-2';

export default function TransaksiTransaksiBerulangScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground>
        <LexendText
          bold={true}
          style={{ fontSize: 20 }}
        >
          Transaksi
        </LexendText>
        <View style={{ alignItems: 'center' }}>
          <LexendText style={{ fontSize: 16 }}>Total Balance</LexendText>
          <LexendText
            bold={true}
            style={{ fontSize: 40 }}
          >
            Rp600.000
          </LexendText>
        </View>
        <Shadow
          distance={5}
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            // alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('@/assets/images/logo/arrowdown.png')}
                style={{ width: 12, height: 12 }}
              />
              <LexendText style={{ color: '#c5c5c5', fontSize: 12 }}>Pendapatan</LexendText>
            </View>
            <LexendText
              bold={true}
              style={{ color: '#76C063', fontSize: 14 }}
            >
              Rp50.000
            </LexendText>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('@/assets/images/logo/arrowup.png')}
                style={{ width: 12, height: 12 }}
              />
              <LexendText style={{ color: '#c5c5c5', fontSize: 12 }}>Pengeluaran</LexendText>
            </View>
            <LexendText
              bold={true}
              style={{ color: '#EF4E4E', fontSize: 14 }}
            >
              Rp50.000
            </LexendText>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('@/assets/images/logo/bag.png')}
                style={{ width: 12, height: 12 }}
              />
              <LexendText style={{ color: '#c5c5c5', fontSize: 12 }}>Tabungan</LexendText>
            </View>
            <LexendText
              bold={true}
              style={{ fontSize: 14 }}
            >
              Rp600.000
            </LexendText>
          </View>
        </Shadow>
        <LexendText>Transaksi Berulang</LexendText>
        {/* Loop transaksi berulang */}
        <View>
          <LexendText>14 Apr 2024</LexendText>
          <Shadow style={{ flexDirection: 'row' }}>
            {/* Loop transaksi berulang pada hari yg sama */}
            <View>
              <Image
                source={require('@/assets/images/logo/makandanminum.png')}
                style={{ width: 16, height: 16 }}
              />
              <View>
                <LexendText
                  bold={true}
                  style={{ fontSize: 16 }}
                >
                  Makan siang
                </LexendText>
                <LexendText style={{ fontSize: 10 }}>Makan dan minum</LexendText>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('@/assets/images/logo/refresh.png')}
                    style={{ width: 12, height: 12 }}
                  />
                  <LexendText style={{ fontSize: 10, color: '#c5c5c5' }}>
                    Berulang setiap minggu
                  </LexendText>
                </View>
              </View>
              <LexendText style={{ fontSize: 16, color: '#ef4e4e' }}>- Rp50.000</LexendText>
            </View>
          </Shadow>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
