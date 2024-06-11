import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaPilihanInvestasi from "@/components/AnalisaPilihanInvestasi";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";
import React, { useEffect, useState } from "react";
import AnalisaSubHeader from "@/components/AnalisaSubHeader";
import {
  InputGabungan,
  InputKalkulatorDanaDarurat,
  InputKalkulatorDanaMenikah,
  InputKalkulatorInvestasi,
  InputKalkulatorDanaPensiun,
  OutputGabungan,
  OutputKalkulatorDanaDarurat,
  OutputKalkulatorDanaMenikah,
  OutputKalkulatorInvestasi,
  OutputKalkulatorDanaPensiun,
  InputKalkulatorDPProperti,
  OutputKalkulatorDPProperti,
} from "@/constants/Types";
import kalkulatorInvestasi from "@/utils/kalkulatorInvestasi";
import kalkulatorDanaDarurat from "@/utils/danaDarurat";
import kalkulatorDanaMenikah from "@/utils/danaMenikah";
import kalkulatorDanaPensiun from "@/utils/danaPensiun";
import kalkulatorDPProperti from "@/utils/dpProperti";

const Rekomendasi = ({
  nama,
  input,
  result,
}: {
  nama:
    | "danadarurat"
    | "danamenikah"
    | "danapensiun"
    | "dpproperti"
    | "kalkulatorinvestasi"
    | "simulasikpr";
  input: InputGabungan;
  result: OutputGabungan;
}) => {
  const [tab, setTab] = useState("Nominal");

  if (nama == "danadarurat") {
    result = result as OutputKalkulatorDanaDarurat;
  } else if (nama == "danamenikah") {
    result = result as OutputKalkulatorDanaMenikah;
  } else if (nama == "danapensiun") {
    result = result as OutputKalkulatorDanaPensiun;
  } else if (nama == "dpproperti") {
    result = result as OutputKalkulatorDPProperti;
  } else if (nama == "kalkulatorinvestasi") {
    result = result as OutputKalkulatorInvestasi;
  }

  useEffect(() => {
    let res: any = (() => {
      switch (nama) {
        case "danadarurat":
          return kalkulatorDanaDarurat(input as InputKalkulatorDanaDarurat);
        case "danamenikah":
          return kalkulatorDanaMenikah(input as InputKalkulatorDanaMenikah);
        case "danapensiun":
          return kalkulatorDanaPensiun(input as InputKalkulatorDanaPensiun);
        case "dpproperti":
          return kalkulatorDPProperti(input as InputKalkulatorDPProperti);
        case "kalkulatorinvestasi":
          return kalkulatorInvestasi(input as InputKalkulatorInvestasi);
        default:
          throw new Error(`Unknown calculator name: ${nama}`);
      }
    })();
  }, [tab]);

  return (
    <ScrollView className="px-6">
      <Spacer size={12} />
      {!result.strategiCocok && (
        <>
          <AnalisaSubHeader
            tab={tab}
            setTab={setTab}
            type={nama === "danapensiun" || nama === "dpproperti" ? 2 : 1}
          />
          <Spacer size={20} />
        </>
      )}
      <AnalisaGreenHero uang={result.totalUangDibutuhkan} />
      <Spacer size={16} />
      <View>
        <View className="mx-4">
          <AnalisaRow
            image="koin"
            title="Uangmu saat ini"
            content={`Rp${input.uangSaatIni.toLocaleString("id")}`}
          />
          <AnalisaRow
            image="kalender"
            title="Jumlah investasi / bulan"
            content={`Rp${input.targetInvestasiPerBulan.toLocaleString("id")}`}
            content2={
              tab == "Nominal" && result.rekomendasiInvestasiPerBulan
                ? `Rp${result.rekomendasiInvestasiPerBulan.toLocaleString("id")}`
                : ""
            }
            type={tab == "Nominal" ? 2 : 1}
          />
          <AnalisaRow
            image="diskon"
            title="Return investasi"
            content={`${input.returnInvestasi}% / tahun`}
          />
          <AnalisaRow
            image="jam"
            title="Lama investasi"
            content={`${input.lamaMengumpulkan} tahun`}
            content2={
              tab == "Durasi" && result.rekomendasiDurasiInvestasi
                ? `${result.rekomendasiDurasiInvestasi} tahun`
                : ""
            }
            type={tab == "Durasi" ? 2 : 1}
          />
          <AnalisaRow
            image="piala"
            title="Hasil investasi"
            content={`Rp${Math.ceil(result.hasilInvestasi).toLocaleString("id")}`}
          />
          <AnalisaPilihanInvestasi
            pilihans={result.rekomendasiPilihanInvestasi.map(
              (investasi) => investasi.nama,
            )}
          />
          {result.rekomendasiBreakdownNominal &&
            result.rekomendasiBreakdownDurasi && (
              <AnalisaBreakdown
                totalPokokInvestasi={
                  result.rekomendasiBreakdownDurasi.totalPokokInvestasi
                }
                totalBungaInvestasi={
                  result.rekomendasiBreakdownDurasi.totalBungaInvestasi
                }
              />
            )}
        </View>
      </View>
      <Spacer size={8} />
      <TimelineInvestasi
        uangSaatIni={input.uangSaatIni}
        rekomendasiPilihanInvestasi={result.rekomendasiPilihanInvestasi}
        hasilInvestasi={result.rekomendasiInvestasiPerBulan}
      />
      <Spacer size={12} />
    </ScrollView>
  );
};

export default Rekomendasi;
