import { View, Image, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { LexendText } from "./StyledText";

const KalkulatorInvestasiRekomendasi = () => {
  return (
    <View className="mx-6">
      <Spacer size={28} />
      <View className="flex flex-row items-center rounded-[16px] bg-[#76C063] px-3 py-4">
        <View className="w-2/3">
          <LexendText className="text-[10px]">Total biaya lain</LexendText>
          <LexendText bold={true} className="text-[20px]">
            Rp45.000.000
          </LexendText>
          <LexendText className="text-[10px]">
            Belum termasuk biaya BPHTB & Asuransi
          </LexendText>
        </View>
        <Image
          className="absolute -bottom-[5px] right-2"
          source={require("@/assets/images/hero-simulasikpr.png")}
        />
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
              <LexendText className="text-[10px]">Biaya BPHTB</LexendText>
              <Spacer size={4} />
              <LexendText className="text-[#EF4E4E] underline">
                Isi NJOP-TKP
              </LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">Biaya AJB</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp10.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">Biaya balik nama</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp10.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">Biaya notaris</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp15.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 py-2">
            <Image source={require("@/assets/images/logo/koin.png")} />
            <View>
              <LexendText className="text-[10px]">Biaya bank</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>+- Rp10.000.000</LexendText>
            </View>
          </View>
        </View>
        <View className="ml-12 rounded-[16px] bg-[#F5F5F5] px-4 py-1">
          <View className="border-b border-b-[#BDBDBD] py-2">
            <LexendText className="text-[10px]">Appraisal</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[10px]">
              Rp1.000.000
            </LexendText>
          </View>
          <View className="border-b border-b-[#BDBDBD] py-2">
            <LexendText className="text-[10px]">Administrasi</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[10px]">
              Rp1.000.000
            </LexendText>
          </View>
          <View className="border-b border-b-[#BDBDBD] py-2">
            <LexendText className="text-[10px]">Provinsi</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[10px]">
              Rp8.000.000
            </LexendText>
          </View>
          <View className="border-b border-b-[#BDBDBD] py-2">
            <LexendText className="text-[10px]">Asuransi jiwa</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[10px]">
              Sesuai umur
            </LexendText>
          </View>
          <View className="py-2">
            <LexendText className="text-[10px]">Asuransi kebakaran</LexendText>
            <Spacer size={4} />
            <LexendText bold={true} className="text-[10px]">
              Sesuai nilai rumah
            </LexendText>
          </View>
        </View>
      </View>
      <Spacer size={16} />
      <TouchableOpacity className="rounded-lg bg-black py-3">
        <LexendText bold={true} className="text-center text-[16px] text-white">
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </TouchableOpacity>
      <Spacer size={28} />
    </View>
  );
};

export default KalkulatorInvestasiRekomendasi;
