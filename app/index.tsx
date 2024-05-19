import { Image, Pressable, View } from 'react-native';
import { Link } from 'expo-router';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText, LexendTextInput } from '@/components/StyledText';
import Spacer from '@/components/Spacer';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* <ScrollView className='flex-1'> */}
      <Image source={require('@/assets/images/log-bg.png')} />
      <View
        className='absolute items-center justify-center w-full h-full mt-8'
        paddingTop={insets.top}
      >
        <LexendText
          bold={true}
          className='text-[36px]'
        >
          Login
        </LexendText>
        <Spacer size={100} />
        <View className='px-11 w-full'>
          <LexendText className='text-[20px]'>Email</LexendText>
          <Spacer size={8} />
          <LexendTextInput className='text-[16px] h-12 w-full border rounded-[24px] px-4' />
          <Spacer size={16} />
          <LexendText className='text-[20px]'>Password</LexendText>
          <Spacer size={8} />
          <LexendTextInput className='text-[16px] h-12 w-full border rounded-[24px]' />
          <Spacer size={172} />
          <Link
            href='/home'
            asChild
          >
            <Pressable className='bg-[#76C063] rounded-[32px]'>
              <LexendText className='py-4 text-center text-[16px]'>Login</LexendText>
            </Pressable>
          </Link>
          <Spacer size={16} />
          <LexendText className='text-[16px] text-center'>Don't have an account?</LexendText>
          <Spacer size={4} />
          <Link
            href='/signup'
            asChild
          >
            <LexendText className='text-[#76C063] text-[16px] text-center'>Register</LexendText>
          </Link>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
