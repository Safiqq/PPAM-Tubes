import { ImageBackground, Image, View, TouchableOpacity } from "react-native";
import Spacer from "@/components/Spacer";
import { useNavigation, useRouter } from "expo-router";
import Images from "@/constants/Images";

const icons = [
  { name: "home", id: 1 },
  { name: "credit-card", id: 2 },
  { name: "book", id: 3 },
  { name: "chart-bar", id: 4 },
];

const BottomNavBar = () => {
  const router = useRouter();
  const { getState } = useNavigation();

  return (
    <View className="items-center">
      <Image
        className="absolute bottom-4 items-center justify-center"
        source={require("@/assets/images/tab-bg.png")}
      />
      <View className="absolute bottom-7 flex w-full flex-row items-center justify-between">
        <View className="mx-6 flex flex-1 flex-row items-center justify-start">
          <TouchableOpacity
            className="items-center p-2"
            onPress={() =>
              router.navigate({
                pathname: "/home",
              })
            }
          >
            <Image
              source={
                getState().routes.at(-1)?.name == "home"
                  ? Images["homeFill"]
                  : Images["home"]
              }
            />
          </TouchableOpacity>
          <Spacer size={40} horizontal={true} />
          <TouchableOpacity
            className="items-center p-2"
            onPress={() =>
              router.navigate({
                pathname: "/transaksi",
              })
            }
          >
            <Image
              source={
                getState().routes.at(-1)?.name == "transaksi"
                  ? Images["transaksiFill"]
                  : Images["transaksi"]
              }
            />
          </TouchableOpacity>
        </View>
        <View className="mx-6 flex flex-1 flex-row items-center justify-end">
          <TouchableOpacity
            className="items-center p-2"
            onPress={() =>
              router.navigate({
                pathname: "/edukasikeuangan",
              })
            }
          >
            <Image
              source={
                getState().routes.at(-1)?.name == "edukasikeuangan"
                  ? Images["edukasiFill"]
                  : Images["edukasi"]
              }
            />
          </TouchableOpacity>
          <Spacer size={40} horizontal={true} />
          <TouchableOpacity
            className="items-center p-2"
            onPress={() =>
              router.navigate({
                pathname: "/laporan",
              })
            }
          >
            <Image
              source={
                getState().routes.at(-1)?.name == "laporan"
                  ? Images["laporanFill"]
                  : Images["laporan"]
              }
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="absolute -top-14 left-[41.75%] rounded-full bg-[#76C063] p-4"
          onPress={() =>
            router.navigate({
              pathname: "/tambahtransaksi",
            })
          }
        >
          <Image
            source={require("@/assets/images/logo/navbar/tambahtransaksi.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavBar;
