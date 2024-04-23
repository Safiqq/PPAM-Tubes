import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Image
        style={styles.image}
        source={require('../assets/images/home-hero.svg')}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.title}>Making finance more accessible, transparent, and fair</Text>
      <Text style={styles.text}>Empowering people around the world to live a more fulfilling life through financial independence</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get started</Text>
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
    fontSize: 36,
    fontWeight: 'bold',
    width: '80%',
  },
  text: {
    flex: 1,
    fontSize: 16,
    width: '80%',
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    paddingVertical: 20,
    margin: 12,
    borderRadius: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});
