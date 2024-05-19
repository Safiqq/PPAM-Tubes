import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Lexend: require('@/assets/fonts/Lexend-Regular.ttf'),
    LexendBold: require('@/assets/fonts/Lexend-Bold.ttf'),
  });

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

  return <UserLayoutNav />;
}

function UserLayoutNav() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaProvider>
        <Stack initialRouteName='tambahtransaksi-pengeluaran'>
          <Stack.Screen
            name='danapensiun'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='detailpengingat'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='kalkulatorinvestasi-rekomendasi'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='kalkulatorinvestasi-strategi'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='kalkulatorinvestasi'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='simulasikpr-biayalain'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='simulasikpr-strategi'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='simulasikpr'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='tambahtransaksi-panduanaplikasi'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='tambahtransaksi-pendapatan'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='tambahtransaksi-pengeluaran'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='tambahtransaksi-tabungan'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='transaksi-transaksiberulang'
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
