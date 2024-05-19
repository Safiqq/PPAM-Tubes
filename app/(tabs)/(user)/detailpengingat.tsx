import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailPengingatScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: "white", paddingTop: insets.top }}
      contentContainerStyle={{ flexGrow: 1 }}
    ></ScrollView>
  );
}
