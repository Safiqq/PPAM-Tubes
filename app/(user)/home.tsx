import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'expo-image';

import { View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import { Shadow } from 'react-native-shadow-2';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1, paddingTop: 36, paddingBottom: 52 }}
    >
      <View style={{ marginHorizontal: 32 }}>
        <LexendText style={{ fontSize: 20, color: '#C5C5C5' }}>Hello,</LexendText>
        <LexendText
          bold={true}
          style={{ fontSize: 20 }}
        >
          Hilmi Baskara Radanto
        </LexendText>
      </View>
      <View style={{ margin: 24 }}>
        <ImageBackground
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
          imageStyle={{ borderRadius: 12 }}
          source={require('@/assets/images/balance-bg.png')}
        >
          <View style={{ backgroundColor: 'transparent' }}>
            <LexendText
              bold={true}
              style={{ fontSize: 24 }}
            >
              Rp600.000
            </LexendText>
            <LexendText style={{ fontSize: 12 }}>Total Saldo</LexendText>
          </View>
          <LexendText style={{ fontSize: 12 }}>April 2024</LexendText>
        </ImageBackground>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 32,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
            }}
          >
            <Image
              style={{ width: 24, height: 20 }}
              source={require('@/assets/images/logo/arrowdown.png')}
            />
          </View>
          <View style={{}}>
            <LexendText style={{ fontSize: 12, color: '#C5C5C5' }}>Pendapatan</LexendText>
            <LexendText
              bold={true}
              style={{ fontSize: 16 }}
            >
              Rp50.000
            </LexendText>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
            }}
          >
            <Image
              style={{ width: 24, height: 20 }}
              source={require('@/assets/images/logo/arrowup.png')}
            />
          </View>
          <View style={{}}>
            <LexendText style={{ fontSize: 12, color: '#C5C5C5' }}>Pengeluaran</LexendText>
            <LexendText
              bold={true}
              style={{ fontSize: 16 }}
            >
              Rp50.000
            </LexendText>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 32 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <LexendText
            bold={true}
            style={{ fontSize: 16 }}
          >
            Pengingat Pembayaran
          </LexendText>
          <LexendText style={{ color: '#76C063', textDecorationLine: 'underline' }}>
            Detail
          </LexendText>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', gap: 12 }}>
          <View style={{ width: 6, height: 96, backgroundColor: '#76C063' }}></View>
          <View style={{ flex: 1, gap: 12 }}>
            {/* Loop reminders */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <LexendText bold={true}>18 Apr 2024</LexendText>
                <LexendText>Tabungan Pensiun</LexendText>
              </View>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginHorizontal: 14,
                  backgroundColor: '#D9D9D9',
                  borderRadius: 24,
                }}
              ></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <LexendText bold={true}>18 Apr 2024</LexendText>
                <LexendText>Dana Darurat</LexendText>
              </View>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginHorizontal: 14,
                  backgroundColor: '#D9D9D9',
                  borderRadius: 24,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 32 }}>
        <LexendText
          bold={true}
          style={{ fontSize: 16 }}
        >
          Financial Planning
        </LexendText>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/simulasikpr.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>Simulasi KPR</LexendText>
          </View>
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/danapensiun.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>Dana Pensiun</LexendText>
          </View>
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/danadarurat.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>Dana Darurat</LexendText>
          </View>
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/investasi.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>Investasi</LexendText>
          </View>
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/danamenikah.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>Dana Menikah</LexendText>
          </View>
          <View style={styles.card}>
            <Shadow
              distance={5}
              style={styles.shadow}
            >
              <Image
                source={require('@/assets/images/logo/fitur/dpproperti.png')}
                style={styles.image}
              />
            </Shadow>
            <LexendText style={{ fontSize: 12 }}>DP Properti</LexendText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    gap: 8,
  },
  shadow: {
    width: 72,
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 52,
    height: 52,
  },
});
