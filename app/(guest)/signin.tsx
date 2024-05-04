import { Image } from 'expo-image';
import { ImageBackground, Pressable, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/FirebaseConfig';

import { View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Sign in berhasil!');
    } catch (error: any) {
      console.log(error);
      alert('Sign in gagal: ' + error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ImageBackground
        style={styles.image}
        source={require('@/assets/images/log-bg.png')}
      >
        <LexendText
          bold={true}
          style={styles.title}
        >
          Login
        </LexendText>
        <LexendText style={styles.subtitle}>Email</LexendText>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={''}
        />
        <LexendText style={styles.subtitle}>Password</LexendText>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={''}
        />
        <Link
          href='/home'
          asChild
        >
          <Pressable style={styles.button} onPress={()=>signIn()}>
            <LexendText style={styles.buttonText}>Login</LexendText>
          </Pressable>
        </Link>
        <LexendText>Don't have an account?</LexendText>
        <Link
          href='/signup'
          asChild
        >
          <LexendText style={styles.underlineText}>Register</LexendText>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 84,
    fontSize: 36,
  },
  subtitle: {
    fontSize: 20,
    width: '85%',
    marginTop: 12,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#868686',
    borderRadius: 32,
    width: '85%',
    height: 56,
  },
  text: {
    fontSize: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#76C063',
    width: '80%',
    paddingVertical: 20,
    marginTop: 72,
    marginBottom: 16,
    borderRadius: 32,
  },
  buttonText: {
    textAlign: 'center',
  },
  underlineText: {
    color: '#76C063',
    textDecorationLine: 'underline',
  },
});
