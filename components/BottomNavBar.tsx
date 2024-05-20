import { ImageBackground, Image, View } from "react-native";

const BottomNavBar = () => {
  return (
    <ImageBackground
      className="mx-2 mb-3 flex flex-row items-center px-6"
      source={require("@/assets/images/tab-bg.png")}
    >
      <Image
        className="absolute -top-5 mx-auto bg-[#76C063] p-4"
        source={require("@/assets/images/logo/navbar/tambahtransaksi.png")}
      />
      <View>
        <Image source={require("@/assets/images/logo/navbar/home.png")} />
        <Image source={require("@/assets/images/logo/navbar/home.png")} />
      </View>
    </ImageBackground>
  );
};

export default BottomNavBar;
