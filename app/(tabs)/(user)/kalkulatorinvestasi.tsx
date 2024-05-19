import { ImageBackground, Image, Pressable, ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LexendText, LexendTextInput } from '@/components/StyledText';
import Spacer from '@/components/Spacer';
import { useState } from 'react';

export default function KalkulatorInvestasiScreen() {
  const [menabungSetiap, setMenabungSetiap] = useState('Bulan');
  const [menambahPada, setMenambahPada] = useState('Awal');

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='flex-1'>
        <ImageBackground
          className='h-[100px] items-center justify-center'
          source={require('@/assets/images/gradientgreen-block.png')}
        >
          <Image
            className='absolute top-11 left-7'
            source={require('@/assets/images/logo/backbutton.png')}
          />
          <LexendText
            bold={true}
            className='text-[20px]'
          >
            Kalkulator Investasi
          </LexendText>
        </ImageBackground>
        <View className='px-7'>
          <Spacer size={24} />
          <LexendText bold={true}>Jumlah uang yang ingin dicapai</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className='border border-[#C5C5C5] rounded-[8px] h-9 px-3'
            placeholder='0'
          />
          <Spacer size={20} />
          <LexendText bold={true}>Waktu mengumpulkan uang</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row items-center gap-3'>
            <LexendTextInput
              className='w-28 border border-[#C5C5C5] rounded-[8px] h-9 px-3'
              placeholder='0'
            />
            <LexendText>tahun lagi</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Uang yang dimiliki saat ini</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className='border border-[#C5C5C5] rounded-[8px] h-9 px-3'
            placeholder='0'
          />
          <Spacer size={20} />
          <LexendText bold={true}>Akan menabung setiap</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row gap-4'>
            <Pressable
              className={`px-3 py-2 ${
                menabungSetiap == 'Bulan' ? 'bg-[#76c063]' : 'border border-[#c5c5c5]'
              } rounded-[8px]`}
              onPress={() => setMenabungSetiap('Bulan')}
            >
              <LexendText className={menabungSetiap == 'Bulan' ? '' : 'text-[#c5c5c5]'}>
                Setiap Bulan
              </LexendText>
            </Pressable>
            <Pressable
              className={`px-3 py-2 ${
                menabungSetiap == 'Tahun' ? 'bg-[#76c063]' : 'border border-[#c5c5c5]'
              } rounded-[8px]`}
              onPress={() => setMenabungSetiap('Tahun')}
            >
              <LexendText className={menabungSetiap == 'Tahun' ? '' : 'text-[#c5c5c5]'}>
                Setiap Tahun
              </LexendText>
            </Pressable>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan menambahkan dana pada</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row gap-4'>
            <Pressable
              className={`px-3 py-2 ${
                menambahPada == 'Awal' ? 'bg-[#76c063]' : 'border border-[#c5c5c5]'
              } rounded-[8px]`}
              onPress={() => setMenambahPada('Awal')}
            >
              <LexendText className={menambahPada == 'Awal' ? '' : 'text-[#c5c5c5]'}>
                Awal {menabungSetiap}
              </LexendText>
            </Pressable>
            <Pressable
              className={`px-3 py-2 ${
                menambahPada == 'Akhir' ? 'bg-[#76c063]' : 'border border-[#c5c5c5]'
              } rounded-[8px]`}
              onPress={() => setMenambahPada('Akhir')}
            >
              <LexendText className={menambahPada == 'Akhir' ? '' : 'text-[#c5c5c5]'}>
                Akhir {menabungSetiap}
              </LexendText>
            </Pressable>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Target investasi setiap bulan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className='border border-[#C5C5C5] rounded-[8px] h-9 px-3'
            placeholder='0'
          />
          <Spacer size={20} />
          <LexendText bold={true}>Berinvestasi di produk yang returnnya</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row items-center gap-3'>
            <LexendTextInput
              className='w-28 border border-[#C5C5C5] rounded-[8px] h-9 px-3'
              placeholder='0'
            />
            <LexendText>% / tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Akan rutin berinvestasi selama</LexendText>
          <Spacer size={8} />
          <LexendText className='bg-[#d9d9d9] rounded-[8px] p-2 w-20 text-center'>
            5 tahun
          </LexendText>
          <Spacer size={32} />
          <Pressable className='bg-black h-11 rounded-[12px]'>
            <LexendText
              bold={true}
              className='text-[16px] text-white py-3 text-center'
            >
              Lihat Hasil Strategi
            </LexendText>
          </Pressable>
          <Spacer size={32} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
