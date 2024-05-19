import { Image } from 'expo-image';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function UserLayout() {
  const [loaded, error] = useFonts({
    Lexend: require('@/assets/fonts/Lexend-Regular.ttf'),
    LexendBold: require('@/assets/fonts/Lexend-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <TabsLayoutNav />;
}

function TabsLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: 'black', height: 40, padding: 16 },
          }}
        >
          <Tabs.Screen
            name='home'
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={
                    focused
                      ? require('@/assets/images/logo/navbar/home-fill.png')
                      : require('@/assets/images/logo/navbar/home.png')
                  }
                  tintColor={'white'}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='transaksi-riwayattransaksi'
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <Image
                  style={{ width: 20, height: 16 }}
                  source={
                    focused
                      ? require('@/assets/images/logo/navbar/transaksi-fill.png')
                      : require('@/assets/images/logo/navbar/transaksi.png')
                  }
                  tintColor={'white'}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='(user)'
            options={{
              title: '',
              tabBarIcon: ({ color }) => (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('@/assets/images/logo/navbar/tambahtransaksi.png')}
                  tintColor={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='edukasikeuangan'
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={
                    focused
                      ? require('@/assets/images/logo/navbar/edukasi-fill.png')
                      : require('@/assets/images/logo/navbar/edukasi.png')
                  }
                  tintColor={'white'}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='laporan'
            options={{
              title: '',
              tabBarIcon: ({ focused }) => (
                <Image
                  style={{ width: 24, height: 24 }}
                  source={
                    focused
                      ? require('@/assets/images/logo/navbar/laporan-fill.png')
                      : require('@/assets/images/logo/navbar/laporan.png')
                  }
                  tintColor={'white'}
                />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
