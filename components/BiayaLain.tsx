import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import AnalisaRow from "@/components/AnalisaRow";
import React from "react";
import AnalisaSubRow from "./AnalisaSubRow";
import AnalisaGreenHero3 from "./Hero/AnalisaGreenHero3";
import { OutputGabungan, OutputSimulasiKPR } from "@/constants/Types";

const BiayaLain = ({
  result,
}: {
  input: InputSimulasiKPR;
  result: OutputSimulasiKPR;
  setNewResultCb?: (result: OutputGabungan) => void;
}) => {
  return (
    <ScrollView className="px-6">
      <Spacer size={28} />
      <AnalisaGreenHero3 uang={result.totalBiayaLain} />
      <Spacer size={16} />
      <View>
        <LexendText bold={true} className="text-[16px]">
          Strategimu
        </LexendText>
        <Spacer size={12} />
        <View className="mx-4">
          <AnalisaRow image="koin" title="Biaya BPHTB" content="Isi NJOP-TKP" />
          <AnalisaRow
            image="koin"
            title="Biaya AJB"
            content={`Rp${result.biayaAJB.toLocaleString("id")}`}
          />
          <AnalisaRow
            image="koin"
            title="Biaya balik nama"
            content={`Rp${result.biayaBalikNama.toLocaleString("id")}`}
          />
          <AnalisaRow
            image="koin"
            title="Biaya notaris"
            content={`Rp${result.biayaNotaris.toLocaleString("id")}`}
          />
          <AnalisaRow
            image="koin"
            title="Biaya bank"
            content={`+- Rp${result.biayaBank.toLocaleString("id")}`}
          />
        </View>
        <View className="ml-12 rounded-[16px] bg-[#F5F5F5] px-4 py-1">
          <AnalisaSubRow
            title="Appraisal"
            content={`Rp${result.appraisal.toLocaleString("id")}`}
          />
          <AnalisaSubRow
            title="Administrasi"
            content={`Rp${result.administrasi.toLocaleString("id")}`}
          />
          <AnalisaSubRow
            title="Provinsi"
            content={`Rp${result.provinsi.toLocaleString("id")}`}
          />
          <AnalisaSubRow title="Asuransi jiwa" content="Sesuai umur" />
          <AnalisaSubRow
            title="Asuransi kebakaran"
            content="Sesuai nilai rumah"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BiayaLain;
