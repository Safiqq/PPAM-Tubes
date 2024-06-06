import { View, Image } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import AnalisaGreenHero3 from "@/components/Hero/AnalisaGreenHero3";
import AnalisaRow from "@/components/AnalisaRow";
import BlackButton from "@/components/BlackButton";
import AnalisaSubRow from "@/components/AnalisaSubRow";

const BiayaLain = () => {
  return (
    <View className="mx-6">
      <Spacer size={28} />
      <AnalisaGreenHero3 uang={45_000_000} />
      <Spacer size={16} />
      <View>
        <LexendText bold={true} className="text-[16px]">
          Strategimu
        </LexendText>
        <Spacer size={12} />
        <View className="mx-4">
          <AnalisaRow image="koin" title="Biaya BPHTB" content="Isi NJOP-TKP" />
          <AnalisaRow image="koin" title="Biaya AJB" content="Rp10.000.000" />
          <AnalisaRow
            image="koin"
            title="Biaya balik nama"
            content="Rp10.000.000"
          />
          <AnalisaRow
            image="koin"
            title="Biaya notaris"
            content="Rp10.000.000"
          />
          <AnalisaRow
            image="koin"
            title="Biaya bank"
            content="+- Rp10.000.000"
          />
        </View>
        <View className="ml-12 rounded-[16px] bg-[#F5F5F5] px-4 py-1">
          <AnalisaSubRow title="Appraisal" content="Rp1.000.000" />
          <AnalisaSubRow title="Administrasi" content="Ro1.000.000" />
          <AnalisaSubRow title="Provinsi" content="Rp8.000.000" />
          <AnalisaSubRow title="Asuransi jiwa" content="Sesuai umur" />
          <AnalisaSubRow
            title="Asuransi kebakaran"
            content="Sesuai nilai rumah"
          />
        </View>
      </View>
      <Spacer size={16} />
      <BlackButton text="Tambah ke Pengingat Pembayaran" />
      <Spacer size={28} />
    </View>
  );
};

export default BiayaLain;
