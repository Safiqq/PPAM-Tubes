import { ImageBackground, Pressable, ScrollView, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';

export default function DetailPengingatScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
    </ScrollView>
  );
}
