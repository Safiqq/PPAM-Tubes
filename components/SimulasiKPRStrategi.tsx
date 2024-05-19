import { View, Image, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { LexendText } from "./StyledText";

const SimulasiKPRStrategi = () => {
  return (
    <View className="mx-6">
      <Spacer size={28} />
      <View className="flex flex-row items-center rounded-[16px] bg-[#76C063] px-3 py-6">
        <View className="w-2/3">
          <LexendText className="text-[10px]">
            Total bunga KPR yang harus kamu bayarkan adalah
            <LexendText bold={true} className="text-[10px]">
              {" "}
              Rp146,614,787{" "}
            </LexendText>
            setara dengan
            <LexendText bold={true} className="text-[10px]">
              {" "}
              18.3%{" "}
            </LexendText>
            dari pokok pinjamanmu.
          </LexendText>
        </View>
        <Image
          className="absolute -bottom-[5px] right-2"
          source={require("@/assets/images/hero-simulasikpr.png")}
        />
      </View>
      <Spacer size={16} />
      <View className="flex flex-row justify-between gap-2">
        <View className="h-full w-1.5 bg-[#FF4848]" />
        <View className="mr-4">
          <LexendText className="text-[10px]">
            Cicilan KPRmu adalah
            <LexendText bold={true} className="text-[10px]">
              {" "}
              Rp146,614,787{" "}
            </LexendText>
            dan ini setara dengan
            <LexendText bold={true} className="text-[10px]">
              {" "}
              18.3%{" "}
            </LexendText>
            dari penghasilan bulananmu.
          </LexendText>
          <Spacer size={8} className="block" />
          <LexendText className="text-[10px]">
            Rasio ini sudah
            <LexendText bold={true} className="text-[10px]">
              {" "}
              berbahaya{" "}
            </LexendText>
            , karena berpotensi mengganggu cash flow mu di masa depan.
            Pertimbangkan untuk menambah DP atau memperpanjang masa KPR.
          </LexendText>
        </View>
      </View>
      <Spacer size={16} />
      <View>
        <LexendText bold={true} className="text-[16px]">
          Strategimu
        </LexendText>
        <Spacer size={12} />
        <View className="mx-4">
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">Pokok pinjaman</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp800.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/kalender.png")} />
            <View>
              <LexendText className="text-[10px]">Jumlah periode</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>60 bulan</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/diskon.png")} />
            <View>
              <LexendText className="text-[10px]">Bunga fix</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>5%</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">
                Total bunga periode fix
              </LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp57.116.775</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/diskon.png")} />
            <View>
              <LexendText className="text-[10px]">Bunga floating</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>9%</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">
                Total bunga periode floating
              </LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp89.490.012</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/diskon.png")} />
            <View>
              <LexendText className="text-[10px]">
                % Total bunga KPR dari pokok pinjaman
              </LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>18.3%</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 py-2">
            <Image source={require("@/assets/images/logo/diskon.png")} />
            <View>
              <LexendText className="text-[10px]">
                Sisa pokok pinjaman setelah periode fix
              </LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp555.177.075</LexendText>
            </View>
          </View>
        </View>
      </View>
      <Spacer size={12} />
      <TouchableOpacity className="rounded-lg bg-black py-3">
        <LexendText bold={true} className="text-center text-[16px] text-white">
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </TouchableOpacity>
      <Spacer size={28} />
    </View>
  );
};

export default SimulasiKPRStrategi;
