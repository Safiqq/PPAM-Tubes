import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Lexend: require("@/assets/fonts/Lexend-Regular.ttf"),
    LexendBold: require("@/assets/fonts/Lexend-Bold.ttf"),
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
        <Stack initialRouteName="tambahtransaksi">
          <Stack.Screen name="danadarurat" options={{ headerShown: false }} />
          <Stack.Screen name="danamenikah" options={{ headerShown: false }} />
          <Stack.Screen name="danapensiun" options={{ headerShown: false }} />
          <Stack.Screen
            name="detailpengingat"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="dpproperti" options={{ headerShown: false }} />
          <Stack.Screen
            name="kalkulatorinvestasi-rekomendasi"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="kalkulatorinvestasi-strategi"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="kalkulatorinvestasi"
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="panduanaplikasi"
              options={{ headerShown: false }}
            />
          <Stack.Screen
            name="simulasikpr-analisa"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="simulasikpr" options={{ headerShown: false }} />
          <Stack.Screen
            name="panduanaplikasi"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tambahtransaksi"
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
