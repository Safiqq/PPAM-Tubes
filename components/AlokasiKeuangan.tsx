import React from "react";
import { View, Text, Dimensions } from "react-native";
import { PieChart, BarChart } from "react-native-chart-kit";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";

const screenWidth = Dimensions.get("window").width;

const AlokasiKeuangan = ({ data, interval, barData, content }) => {
  const totalAmount = data[interval].reduce(
    (sum, item) => sum + item.amount,
    0,
  );

  const getColor = () => {
    if (content === "Pengeluaran") {
      return "red";
    } else if (content === "Pendapatan" || content === "Tabungan") {
      return "green";
    }
  };

  return (
    <View>
      <PieChart
        data={data[interval]}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />

      <Spacer size={16} />
      <LexendText className="text-xl font-semibold">Profil Arus Kas</LexendText>
      <Spacer size={16} />
      <BarChart
        data={barData}
        width={screenWidth - 32}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForLabels: {
            fontSize: 12,
            rotation: 0,
          },
        }}
        verticalLabelRotation={0}
        style={{
          borderRadius: 16,
        }}
      />
      <Spacer size={16} />

      <LexendText className="text-semibold mt-4 text-xl">
        Pengeluaran Berdasarkan Kategori
      </LexendText>
      <Spacer size={16} />

      {data[interval].map((item, index) => (
        <View
          key={index}
          className="mx-2 mb-4 flex-row items-center rounded-lg bg-white p-4 shadow-md shadow-black"
        >
          <View className="flex-1">
            <LexendText
              className="text-base font-semibold"
              style={{ color: item.color }}
            >
              {item.name}
            </LexendText>
            <Text
              className="text-xs text-gray-500"
              style={{ color: getColor() }}
            >
              Rp {item.amount}
            </Text>
          </View>
          <LexendText className="text-base font-semibold">
            {(item.amount * 100) / totalAmount}%
          </LexendText>
        </View>
      ))}
      <Spacer size={40} />
    </View>
  );
};

export default AlokasiKeuangan;
