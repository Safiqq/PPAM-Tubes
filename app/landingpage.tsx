import { Image, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

import { View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import Spacer from '@/components/Spacer';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='flex-1'>
        <Image source={require('@/assets/images/hero.png')} />
        <Spacer size={8} />
        <View className='mx-8'>
          <LexendText
            bold={true}
            className='text-[32px]'
          >
            Making finance more accessible, transparent, and fair
          </LexendText>
          <Spacer size={4} />
          <LexendText className='text-[16px]'>
            Empowering people around the world to live a more fulfilling life through financial
            independence
          </LexendText>
          <Spacer size={36} />
          <Link
            href='/signup'
            asChild
          >
            <Pressable className='bg-black rounded-[32px]'>
              <LexendText className='text-white text-[16px] text-center py-5'>Get started</LexendText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}