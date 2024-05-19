import { ImageBackground, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import { Shadow } from 'react-native-shadow-2';

export default function EdukasiScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LexendText>Edukasi Keuangan</LexendText>
      <ImageBackground>{/* Gambar panduan aplikasi */}</ImageBackground>
      <LexendText>Artikel Keuangan</LexendText>
      {/* Loop artikel keuangan */}
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
      <Shadow style={{ flexDirection: 'row', borderRadius: 12 }}>
        <Image
          source={require('@/assets/images/dummyimage.png')}
          style={{ width: 56, height: 56, borderRadius: 12 }}
        />
        <LexendText
          bold={true}
          style={{ fontSize: 12 }}
        >
          Pentingnya Melek Keuangan
        </LexendText>
        <Image
          source={require('@/assets/images/logo/detail.png')}
          style={{ width: 56, height: 56 }}
        />
      </Shadow>
    </ScrollView>
  );
}
