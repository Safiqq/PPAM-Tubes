import React from "react";
import { View } from "react-native";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";

const TimelineInvestasi = ({
  uangSaatIni,
  rekomendasiPilihanInvestasi,
  resultInvestasi,
}) => {
  return (
    <View>
      <LexendText bold={true}>Timeline Investasi</LexendText>
      <Spacer size={8} />
      <View className="flex flex-row justify-between rounded-[12px] bg-[#F5F5F5] px-3 py-2">
        <View className="absolute left-0 right-0 top-[26px] mx-16 h-0.5 bg-black" />
        <View className="flex-1 items-center">
          <LexendText className="text-[8px] text-[#868686]">Tahun 1</LexendText>
          <Spacer size={4} />
          <View className="h-2 w-2 rounded-full bg-black" />
          <Spacer size={4} />
          <LexendText className="text-center text-[8px]">
            Uang saat ini{"\n"}
            <LexendText bold={true} className="text-[8px]">
              Rp{uangSaatIni.toLocaleString("id")}
            </LexendText>
          </LexendText>
        </View>
        <View className="flex-1 items-center">
          <LexendText className="text-[8px] text-[#868686] ">
            Tahun 3
          </LexendText>
          <Spacer size={4} />
          <View className="h-2 w-2 rounded-full bg-black" />
          <Spacer size={4} />
          <LexendText className="text-center text-[8px]">
            Pindahkan uangnya ke produk-produk seperti {" "}
            {rekomendasiPilihanInvestasi
              .map((investasi) => investasi.nama)
              .join(", ")}
          </LexendText>
        </View>
        <View className="flex-1 items-center">
          <LexendText className="text-[8px] text-[#868686]">Tahun 5</LexendText>
          <Spacer size={4} />
          <View className="h-2 w-2 rounded-full bg-black" />
          <Spacer size={4} />
          <LexendText className="text-center text-[8px]">
            Hasil Investasi{"\n"}
            <LexendText bold={true} className="text-center text-[8px]">
              Rp{Math.ceil(resultInvestasi).toLocaleString("id")}
            </LexendText>
          </LexendText>
        </View>
      </View>
    </View>
  );
};

export default TimelineInvestasi;
