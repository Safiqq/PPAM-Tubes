import { View } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import AnalisaGreenHero2 from "@/components/Hero/AnalisaGreenHero2";
import AnalisaRow from "@/components/AnalisaRow";
import BlackButton from "@/components/BlackButton";

const Strategi = () => {
  const uang = 146_614_787;
  const percentage = 18.3;

  return (
    <View className="mx-6">
      <Spacer size={28} />
      <AnalisaGreenHero2 uang={uang} percentage={percentage} />
      <Spacer size={16} />
      <View className="flex flex-row justify-between gap-2">
        <View className="h-full w-1.5 bg-[#FF4848]" />
        <View className="mr-4">
          <LexendText className="text-[10px]">
            Cicilan KPRmu adalah
            <LexendText bold={true} className="text-[10px]">
              {" "}
              Rp{uang.toLocaleString("id")}{" "}
            </LexendText>
            dan ini setara dengan
            <LexendText bold={true} className="text-[10px]">
              {" "}
              {percentage}%{" "}
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
        </View>
      </View>
      <Spacer size={12} />
      <BlackButton text="Tambah ke Pengingat Pembayaran" />
      <Spacer size={28} />
    </View>
  );
};

export default Strategi;
