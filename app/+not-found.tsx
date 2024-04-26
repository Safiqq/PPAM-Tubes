import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { LexendText } from '@/components/StyledText';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <LexendText style={styles.title}>This screen doesn't exist.</LexendText>

        <Link
          href='/'
          style={styles.link}
        >
          <LexendText style={styles.linkText}>Go to home screen!</LexendText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
