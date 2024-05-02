import { Image } from 'expo-image';
import { ImageBackground, Pressable, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';

import { View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  
  const auth = FIREBASE_AUTH

  const signUp = async () => {
    try {
      // const response = "tes"
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      setIsSignUpSuccess(true);
      alert('Sign up berhasil!')
     } catch (error: any) {
      console.log(error)
      alert('Sign up gagal: ' + error.message)
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
          Create Account
        </LexendText>
        <LexendText style={styles.subtitle}>Email</LexendText>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={''}
        />
        <LexendText style={styles.subtitle}>Name</LexendText>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setName(newText)}
          defaultValue={''}
        />
        <LexendText style={styles.subtitle}>Password</LexendText>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={''}
        />
        <LexendText style={styles.subtitle}>Referral Code</LexendText>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setReferralCode(newText)}
          defaultValue={''}
        />
        <Link
          href='/home'
          asChild
        >
          <Pressable style={styles.button} onPress={()=>signUp()}>
            <LexendText style={styles.buttonText}>Create an Account</LexendText>
          </Pressable>
        </Link>
        <LexendText>Already have an account?</LexendText>
        <Link
          href='/signin'
          asChild
        >
          <LexendText style={styles.underlineText}>Sign in</LexendText>
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
    marginBottom: 36,
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
