import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import AnalisaBlackHero from "@/components/Hero/AnalisaBlackHero";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";
import AnalisaGreenHero2 from "./Hero/AnalisaGreenHero2";
import {
  InputGabungan,
  InputSimulasiKPR,
  OutputGabungan,
  OutputSimulasiKPR,
} from "@/constants/Types";

const Strategi = ({
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
  input: InputGabungan | InputSimulasiKPR;
  result: OutputGabungan | OutputSimulasiKPR;
}) => {
  return (
    <ScrollView className="px-6">
      <Spacer size={28} />
      {nama == "simulasikpr" ? (
        <AnalisaGreenHero2
          uang={(result as OutputSimulasiKPR).totalBungaKPRYangHarusDibayar}
          percentage={
            (result as OutputSimulasiKPR).totalHasilBungaDariPokokPinjaman
          }
        />
      ) : (
        <AnalisaBlackHero cocok={(result as OutputGabungan).strategiCocok} />
      )}
      <Spacer size={16} />
      {nama != "simulasikpr" && (
        <>
          <AnalisaGreenHero
            uang={(result as OutputGabungan).totalUangDibutuhkan}
          />
          <Spacer size={16} />
        </>
      )}
      {nama == "simulasikpr" &&
        (result as OutputSimulasiKPR).totalHasilBungaDariPokokPinjaman >=
          15 && (
          <>
            <View className="flex flex-row justify-between gap-2">
              <View className="h-full w-1.5 bg-[#FF4848]" />
              <View className="mr-4">
                <LexendText className="text-[10px]">
                  Cicilan KPRmu adalah
                  <LexendText bold={true} className="text-[10px]">
                    {" "}
                    Rp
                    {(
                      result as OutputSimulasiKPR
                    ).totalBungaKPRYangHarusDibayar.toLocaleString("id")}{" "}
                  </LexendText>
                  dan ini setara dengan
                  <LexendText bold={true} className="text-[10px]">
                    {" "}
                    {(
                      result as OutputSimulasiKPR
                    ).totalHasilBungaDariPokokPinjaman.toLocaleString("id")}
                    %{" "}
                  </LexendText>
                  dari penghasilan bulananmu.
                </LexendText>
                <Spacer size={8} />
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
          </>
        )}
      <View>
        <LexendText bold={true} className="text-[16px]">
          Strategimu
        </LexendText>
        <Spacer size={12} />
        <View className="mx-4">
          {nama == "simulasikpr" ? (
            <>
              <AnalisaRow
                image="koin"
                title="Pokok pinjaman"
                content={`Rp${(result as OutputSimulasiKPR).pokokPinjaman.toLocaleString("id")}`}
              />
              <AnalisaRow
                image="kalender"
                title="Jumlah periode"
                content={`${(result as OutputSimulasiKPR).jumlahPeriode} bulan`}
              />
              <AnalisaRow image="diskon" title="Bunga fix" content="5%" />
              <AnalisaRow
                image="koin"
                title="Total bunga periode fix"
                content={`Rp${(result as OutputSimulasiKPR).totalBungaPeriodeFix.toLocaleString("id")}`}
              />
              <AnalisaRow image="diskon" title="Bunga floating" content="9%" />
              <AnalisaRow
                image="koin"
                title="Total bunga periode floating"
                content={`Rp${(result as OutputSimulasiKPR).totalBungaPeriodeFloating.toLocaleString("id")}`}
              />
              <AnalisaRow
                image="diskon"
                title="% Total bunga KPR dari pokok pinjaman"
                content={`Rp${(result as OutputSimulasiKPR).totalHasilBungaDariPokokPinjaman.toLocaleString("id")}%`}
              />
              <AnalisaRow
                image="diskon"
                title="Sisa pokok pinjaman setelah periode fix"
                content={`Rp${(result as OutputSimulasiKPR).sisaPokokPinjamanSetelahPeriodeFix.toLocaleString("id")}`}
              />
            </>
          ) : (
            <>
              <AnalisaRow
                image="koin"
                title="Uangmu saat ini"
                content={`Rp${(input as InputGabungan).uangSaatIni.toLocaleString("id")}`}
              />
              <AnalisaRow
                image="koin"
                title="Jumlah investasi / bulan"
                content={`Rp${(input as InputGabungan).targetInvestasiPerBulan.toLocaleString("id")}`}
              />
              <AnalisaRow
                image="diskon"
                title="Return investasi"
                content={`${(input as InputGabungan).returnInvestasi}% / tahun`}
              />
              <AnalisaRow
                image="jam"
                title="Lama investasi"
                content={`${(input as InputGabungan).lamaMengumpulkan} tahun`}
              />
              <AnalisaRow
                image="piala"
                title="Hasil investasi"
                content={`Rp${Math.ceil((result as OutputGabungan).hasilInvestasi).toLocaleString("id")}`}
                content2={
                  (result as OutputGabungan).strategiCocok
                    ? ""
                    : `Kurang Rp${Math.floor((result as OutputGabungan).totalUangDibutuhkan - (result as OutputGabungan).hasilInvestasi).toLocaleString("id")}`
                }
              />
              <AnalisaBreakdown
                totalPokokInvestasi={
                  (result as OutputGabungan).breakdownInvestasi
                    .totalPokokInvestasi
                }
                totalBungaInvestasi={
                  (result as OutputGabungan).breakdownInvestasi
                    .totalBungaInvestasi
                }
              />
            </>
          )}
        </View>
      </View>
      {nama != "simulasikpr" && (result as OutputGabungan).strategiCocok && (
        <>
          <Spacer size={8} />
          <TimelineInvestasi
            uangSaatIni={(input as InputGabungan).uangSaatIni}
            rekomendasiPilihanInvestasi={
              (result as OutputGabungan).rekomendasiPilihanInvestasi
            }
            hasilInvestasi={(result as OutputGabungan).hasilInvestasi}
          />
          <Spacer size={12} />
        </>
      )}
    </ScrollView>
  );
};

export default Strategi;
