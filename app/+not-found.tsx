import { Link, Stack } from 'expo-router';

import { View } from '@/components/Themed';
import { LexendText } from '@/components/StyledText';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 items-center justify-center'>
        <LexendText bold={true} className='text-[20px]'>This screen doesn't exist.</LexendText>
        <Link
          href='/'
          className='mt-4 py-4'
        >
          <LexendText className='text-[14px] text-[#2e78b7]'>Go to home screen!</LexendText>
        </Link>
      </View>
    </>
  );
}
