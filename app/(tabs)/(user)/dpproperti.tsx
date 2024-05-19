import { ImageBackground, Image, Pressable, ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LexendText, LexendTextInput } from '@/components/StyledText';
import Spacer from '@/components/Spacer';

export default function DPPropertiScreen() {
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
            DP Properti
          </LexendText>
        </ImageBackground>
        <View className='px-7'>
          <Spacer size={24} />
          <LexendText bold={true}>Ingin mencapai mimpi dalam</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row items-center gap-3'>
            <LexendTextInput
              className='w-28 border border-[#C5C5C5] rounded-[8px] h-9 px-3'
              placeholder='0'
            />
            <LexendText>tahun</LexendText>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Harga Properti Impian</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className='border border-[#C5C5C5] rounded-[8px] h-9 px-3'
            placeholder='0'
          />
          <Spacer size={20} />
          <LexendText bold={true}>% DP yang Diinginkan</LexendText>
          <Spacer size={8} />
          <View className='flex flex-row items-center gap-3'>
            <LexendTextInput
              className='w-28 border border-[#C5C5C5] rounded-[8px] h-9 px-3'
              placeholder='0'
            />
            <LexendText>%</LexendText>
          </View>
          <Spacer size={20} />
          <View className='flex flex-row justify-between'>
            <View>
              <LexendText bold={true}>DP setara dengan</LexendText>
              <Spacer size={8} />
              <LexendText className='bg-[#D9D9D9] rounded-[8px] px-3 py-2.5 text-center'>
                Rp400.000
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>KPR / pokok utang</LexendText>
              <Spacer size={8} />
              <LexendText className='bg-[#D9D9D9] rounded-[8px] px-3 py-2.5 text-center'>
                Rp600.000.000
              </LexendText>
            </View>
            <View>
              <LexendText bold={true}>% KPR</LexendText>
              <Spacer size={8} />
              <LexendText className='bg-[#D9D9D9] rounded-[8px] w-12 px-3 py-2.5 text-center'>
                60%
              </LexendText>
              <Spacer size={20} />
              <LexendText bold={true}>Asumsi inflasi properti</LexendText>
              <Spacer size={8} />
              <View className='flex flex-row items-center gap-2'>
                <LexendTextInput
                  className='w-28 border border-[#C5C5C5] rounded-[8px] h-9 px-3'
                  placeholder='0'
                />
                <LexendText>%</LexendText>
              </View>
            </View>
          </View>
          <Spacer size={20} />
          <LexendText bold={true}>Jumlah dana yang dimiliki saat ini</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className='border border-[#C5C5C5] rounded-[8px] h-9 px-3'
            placeholder='0'
          />
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
            10 tahun
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
