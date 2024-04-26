import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Image
        style={styles.image}
        source={require('@/assets/images/home-hero.svg')}
      />
      <LexendText
        bold={true}
        style={styles.title}
      >
        Making finance more accessible, transparent, and fair
      </LexendText>
      <LexendText style={styles.text}>
        Empowering people around the world to live a more fulfilling life through financial
        independence
      </LexendText>
      <Link
        href='/signup'
        asChild
      >
        <Pressable style={styles.button}>
          <LexendText style={styles.buttonText}>Get started</LexendText>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 5,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 32,
    width: '80%',
  },
  text: {
    fontSize: 16,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    paddingVertical: 20,
    margin: 32,
    borderRadius: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
