import { View, ScrollView } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import TimelineInvestasi from "@/components/TimelineInvestasi";
import AnalisaRow from "@/components/AnalisaRow";
import AnalisaBreakdown from "@/components/AnalisaBreakdown";
import BlackButton from "@/components/BlackButton";
import AnalisaBlackHero from "@/components/Hero/AnalisaBlackHero";
import AnalisaGreenHero from "@/components/Hero/AnalisaGreenHero";
import AnalisaGreenHero2 from "./Hero/AnalisaGreenHero2";
import {
  InputKalkulatorInvestasi,
  OutputKalkulatorInvestasi,
} from "@/constants/Types";

const Strategi = ({
  nama = "",
  input,
  result,
}: {
  nama: string;
  input: InputKalkulatorInvestasi;
  result: OutputKalkulatorInvestasi;
}) => {
  return (
    <ScrollView className="px-6">
      <Spacer size={28} />
      {nama == "simulasikpr" ? (
        <AnalisaGreenHero2
          uang={input.uangSaatIni}
          percentage={result.persentaseBungaInvestasi}
        /> // uang sm percentage blm bener
      ) : (
        <AnalisaBlackHero cocok={result.strategiCocok} />
      )}
      <Spacer size={16} />
      {nama != "simulasikpr" && (
        <>
          <AnalisaGreenHero uang={input.jumlahTarget} />
          <Spacer size={16} />
        </>
      )}
      {nama == "simulasikpr" && !result.strategiCocok && (
        <>
          <View className="flex flex-row justify-between gap-2">
            <View className="h-full w-1.5 bg-[#FF4848]" />
            <View className="mr-4">
              {/* CICILAN KPR dan setara dengan BELUM BENER */}
              <LexendText className="text-[10px]">
                Cicilan KPRmu adalah
                <LexendText bold={true} className="text-[10px]">
                  {" "}
                  Rp{input.uangSaatIni.toLocaleString("id")}{" "}
                </LexendText>
                dan ini setara dengan
                <LexendText bold={true} className="text-[10px]">
                  {" "}
                  {result.persentaseBungaInvestasi}%{" "}
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
                content="Rp800.000.000"
              />
              <AnalisaRow
                image="kalender"
                title="Jumlah periode"
                content="60 bulan"
              />
              <AnalisaRow image="diskon" title="Bunga fix" content="5%" />
              <AnalisaRow
                image="koin"
                title="Total bunga periode fix"
                content="Rp57.116.775"
              />
              <AnalisaRow image="diskon" title="Bunga floating" content="9%" />
              <AnalisaRow
                image="koin"
                title="Total bunga periode floating"
                content="Rp89.490.012"
              />
              <AnalisaRow
                image="diskon"
                title="% Total bunga KPR dari pokok pinjaman"
                content="18.3%"
              />
              <AnalisaRow
                image="diskon"
                title="Sisa pokok pinjaman setelah periode fix"
                content="Rp555.177.075"
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
                image="koin"
                title="Jumlah investasi / bulan"
                content={`Rp${input.targetInvestasiPerBulan.toLocaleString("id")}`}
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
              />
              <AnalisaRow
                image="piala"
                title="Hasil investasi"
                content={`Rp${Math.ceil(result.resultInvestasi).toLocaleString("id")}`}
                content2={
                  result.strategiCocok
                    ? ""
                    : `Kurang Rp${Math.floor(input.jumlahTarget - result.resultInvestasi).toLocaleString("id")}`
                }
              />
              <AnalisaBreakdown
                totalPokokInvestasi={result.totalPokokInvestasi}
                totalBungaInvestasi={result.totalBungaInvestasi}
              />
            </>
          )}
        </View>
      </View>
      {nama != "simulasikpr" && result.strategiCocok && (
        <>
          <Spacer size={8} />
          <TimelineInvestasi
            uangSaatIni={input.uangSaatIni}
            rekomendasiPilihanInvestasi={result.rekomendasiPilihanInvestasi}
            resultInvestasi={result.resultInvestasi}
          />
          <Spacer size={12} />
        </>
      )}
    </ScrollView>
  );
};

export default Strategi;
