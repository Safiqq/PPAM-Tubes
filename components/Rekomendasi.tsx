import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import BlackButton from "@/components/BlackButton";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaPilihanInvestasi from "@/components/AnalisaPilihanInvestasi";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";
import React, { useEffect, useState } from "react";
import AnalisaSubHeader from "@/components/AnalisaSubHeader";
import AnalisaSubRow from "./AnalisaSubRow";
import AnalisaGreenHero3 from "./Hero/AnalisaGreenHero3";
import {
  InputKalkulatorInvestasi,
  OutputKalkulatorInvestasi,
} from "@/constants/Types";
import kalkulatorInvestasi from "@/utils/kalkulatorInvestasi";

const Rekomendasi = ({
  nama,
  input,
  result,
  setNewResultCb,
}: {
  nama: string;
  input: InputKalkulatorInvestasi;
  result: OutputKalkulatorInvestasi;
  setNewResultCb: (result: OutputKalkulatorInvestasi) => void;
}) => {
  const [tab, setTab] = useState("Nominal");
  const [newInput, setNewInput] = useState<InputKalkulatorInvestasi>();
  const [newResult, setNewResult] = useState<OutputKalkulatorInvestasi>();
  useState<number>(0);

  const totalBiayaLain = 1_000;

  useEffect(() => {
    const inp: InputKalkulatorInvestasi = {
      jumlahTarget: input.jumlahTarget,
      waktuMengumpulkan: input.waktuMengumpulkan,
      uangSaatIni: input.uangSaatIni,
      menabungSetiap: input.menabungSetiap,
      targetInvestasiPerBulan: input.targetInvestasiPerBulan,
      returnProduk: input.returnProduk,
    };
    let res = kalkulatorInvestasi(inp);
    if (tab == "Nominal") {
      while (res.resultInvestasi < input.jumlahTarget) {
        inp.targetInvestasiPerBulan += 100_000;
        res = kalkulatorInvestasi(inp);
      }
    } else if (tab == "Durasi") {
      while (res.resultInvestasi < input.jumlahTarget) {
        inp.waktuMengumpulkan += 1;
        res = kalkulatorInvestasi(inp);
      }
    }
    setNewResult(res);
    setNewInput(inp);
    setNewResultCb(res);
  }, [tab]);

  return (
    <ScrollView className="px-6">
      {nama == "simulasikpr" ? (
        <>
          <Spacer size={28} />
          <AnalisaGreenHero3 uang={totalBiayaLain} />
        </>
      ) : (
        <>
          <Spacer size={12} />
          {!result.strategiCocok && (
            <>
              <AnalisaSubHeader tab={tab} setTab={setTab} />
              <Spacer size={20} />
            </>
          )}
          <AnalisaGreenHero uang={input.jumlahTarget} />
        </>
      )}
      <Spacer size={16} />
      <View>
        {nama == "simulasikpr" && (
          <>
            <LexendText bold={true} className="text-[16px]">
              Strategimu
            </LexendText>
            <Spacer size={12} />{" "}
          </>
        )}
        <View className="mx-4">
          {nama == "simulasikpr" ? (
            <>
              <AnalisaRow
                image="koin"
                title="Biaya BPHTB"
                content="Isi NJOP-TKP"
              />
              <AnalisaRow
                image="koin"
                title="Biaya AJB"
                content="Rp10.000.000"
              />
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
            </>
          ) : (
            <>
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
                  tab == "Nominal"
                    ? `Rp${newInput?.targetInvestasiPerBulan.toLocaleString("id")}`
                    : ""
                }
                type={tab == "Nominal" ? 2 : 1}
              />
              <AnalisaRow
                image="diskon"
                title="Return investasi"
                content={`${input.returnProduk}% / tahun`}
              />
              <AnalisaRow
                image="jam"
                title="Lama investasi"
                content={`${input.waktuMengumpulkan} tahun`}
                content2={
                  tab == "Durasi" ? `${newInput?.waktuMengumpulkan} tahun` : ""
                }
                type={tab == "Durasi" ? 2 : 1}
              />
              {newResult && (
                <>
                  <AnalisaRow
                    image="piala"
                    title="Hasil investasi"
                    content={`Rp${Math.ceil(newResult.resultInvestasi).toLocaleString("id")}`}
                  />
                  <AnalisaPilihanInvestasi
                    pilihans={newResult.rekomendasiPilihanInvestasi.map(
                      (investasi) => investasi.nama,
                    )}
                  />
                  <AnalisaBreakdown
                    totalPokokInvestasi={newResult.totalPokokInvestasi}
                    totalBungaInvestasi={newResult.totalBungaInvestasi}
                  />
                </>
              )}
            </>
          )}
        </View>
        {nama == "simulasikpr" && (
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
        )}
      </View>
      {nama != "simulasikpr" && (
        <>
          <Spacer size={8} />
          {newResult && (
            <TimelineInvestasi
              uangSaatIni={input.uangSaatIni}
              rekomendasiPilihanInvestasi={
                newResult.rekomendasiPilihanInvestasi
              }
              resultInvestasi={newResult.resultInvestasi}
            />
          )}
          <Spacer size={12} />
        </>
      )}
    </ScrollView>
  );
};

export default Rekomendasi;
