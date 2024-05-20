import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import Spacer from "./Spacer";
import { LexendText } from "./StyledText";

const KalkulatorInvestasiStrategi = ({ investasi }) => {
  const { pokok, bunga } = investasi;
  const pokok_percentage = (pokok / (pokok + bunga)) * 100;
  const bunga_percentage = (bunga / (pokok + bunga)) * 100;

  return (
    <ScrollView className="mx-6">
      <Spacer size={28} />
      <View className="flex flex-row items-center rounded-[16px] bg-black px-3 py-6">
        <View className="w-2/3">
          <LexendText className="text-[14px] text-white">
            Strateginya
            <LexendText bold={true} className="text-[14px] text-[#FF4848]">
              {" "}
              belum cocok{" "}
            </LexendText>
            untuk mimpi kamu
          </LexendText>
        </View>
        <Image
          className="absolute -bottom-[1px] right-2"
          source={require("@/assets/images/hero-kalkulatorinvestasi.png")}
        />
      </View>
      <Spacer size={16} />
      <View className="flex flex-row items-center justify-end rounded-[16px] bg-[#76C063] px-7 py-3">
        <View className="w-3/5">
          <LexendText className="text-[10px]">
            Total uang yang kamu butuhkan
          </LexendText>
          <LexendText bold={true} className="text-[20px]">
            Rp5.258.695.543
          </LexendText>
          <LexendText className="text-[10px]">Berdasarkan 4% rule</LexendText>
        </View>
        <Image
          className="absolute -bottom-[13px] left-5"
          source={require("@/assets/images/hero-kalkulatorinvestasi-1.png")}
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
              <LexendText className="text-[10px]">Uangmu saat ini</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp5.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/kalender.png")} />
            <View>
              <LexendText className="text-[10px]">
                Jumlah investasi / bulan
              </LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp3.000.000</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/diskon.png")} />
            <View>
              <LexendText className="text-[10px]">Return investasi</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>7.3% / tahun</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/jam.png")} />
            <View>
              <LexendText className="text-[10px]">Lama investasi</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>20 tahun</LexendText>
            </View>
          </View>
          <View className="flex flex-row items-center gap-4 border-b border-b-[#BDBDBD] py-2">
            <Image source={require("@/assets/images/logo/piala.png")} />
            <View>
              <LexendText className="text-[10px]">Hasil investasi</LexendText>
              <Spacer size={4} />
              <LexendText bold={true}>Rp1.662.550.228</LexendText>
              <Spacer size={4} />
              <LexendText className="text-[10px] text-[#FF4848]">
                Kurang Rp3.596.145.316
              </LexendText>
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
          <View className="flex flex-row items-center gap-4 py-2">
            <Image source={require("@/assets/images/logo/jam.png")} />
            <View className="flex-1">
              <LexendText className="text-[10px]">Breakdown</LexendText>
              <Spacer size={8} />
              <View className="flex h-5 flex-row rounded-[8px]">
                <View
                  className="justify-center rounded-l-[8px] bg-[#76C063]"
                  style={{ width: pokok_percentage * 2.8 }}
                >
                  <LexendText bold={true} className="text-center text-[10px]">
                    {pokok_percentage.toFixed(2)}%
                  </LexendText>
                </View>
                <View
                  className="justify-center rounded-r-[8px] bg-[#BDBDBD]"
                  style={{ width: bunga_percentage * 2.8 }}
                >
                  <LexendText bold={true} className="text-center text-[10px]">
                    {bunga_percentage.toFixed(2)}%
                  </LexendText>
                </View>
              </View>
              <Spacer size={8} />
              <View className="flex flex-row justify-between">
                <View>
                  <LexendText className="text-[8px]">Rp725.000.000</LexendText>
                  <LexendText className="text-[8px]">
                    Pokok investasi
                  </LexendText>
                </View>
                <View>
                  <LexendText className="text-[8px]">Rp937.550.228</LexendText>
                  <LexendText className="text-[8px]">
                    Bunga investasi
                  </LexendText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Spacer size={12} />
      {/* <StickyHeaderComponent */}
      <TouchableOpacity className="rounded-lg bg-black py-3" style={{flex: 0.1}}>
        <LexendText bold={true} className="text-center text-[16px] text-white">
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </TouchableOpacity>
      <Spacer size={28} />
    </ScrollView>
  );
};

export default KalkulatorInvestasiStrategi;
