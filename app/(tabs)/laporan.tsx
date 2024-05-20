import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import SegmentedControl from '@/components/SegmentedControl'; // Adjust the import path as necessary
import AlokasiKeuangan from '@/components/AlokasiKeuangan'; // Adjust the import path as necessary
import { LexendText } from '@/components/StyledText';
import Spacer from '@/components/Spacer';
import { Picker } from '@react-native-picker/picker';


const screenWidth = Dimensions.get("window").width;

const lineData = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50, 60, 70],
      strokeWidth: 2, // optional
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }
  ]
};

const barData = {
  labels: ["Pemasukan", "Pengeluaran", "Tabungan"],
  datasets: [
    {
      data: [3000, 2000, 1000]
    }
  ]
};

const data = {
  mingguan: [
    { name: "Makan dan Minum", amount: 45000, color: "#76C063", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Transportasi", amount: 20000, color: "#FFD700", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Kesehatan", amount: 35000, color: "#1E90FF", legendFontColor: "#7F7F7F", legendFontSize: 12 }
  ],
  bulanan: [
    { name: "Makan dan Minum", amount: 50000, color: "#76C063", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Transportasi", amount: 30000, color: "#FFD700", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Kesehatan", amount: 20000, color: "#1E90FF", legendFontColor: "#7F7F7F", legendFontSize: 12 }
  ],
  tahunan: [
    { name: "Makan dan Minum", amount: 40000, color: "#76C063", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Transportasi", amount: 25000, color: "#FFD700", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Kesehatan", amount: 35000, color: "#1E90FF", legendFontColor: "#7F7F7F", legendFontSize: 12 }
  ]
};

const FinancialReportScreen = () => {
  const [selectedSegment, setSelectedSegment] = useState('Mingguan');
  const [selectedContent, setSelectedContent] = useState('pengeluaran');
  const segments = ['Mingguan', 'Bulanan', 'Tahunan'];
  const contentOptions = ['Pengeluaran', 'Pendapatan', 'Tabungan'];

  // nanti buat ngatur2 datanya di sini aja sebelum dipassing ke alokasikeuangan biar ga ribet di sana
  const handlePicker = (itemValue) => {
    // Handle the picker change logic here
    console.log(`Picker changed to ${itemValue}`);
    setSelectedContent(itemValue);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 pt-11">
        <View className="">
          <LexendText bold className="text-2xl">Laporan Keuangan</LexendText>
          <Spacer size={27} />

          <LineChart
            data={lineData}
            width={screenWidth - 32}
            height={180}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>

        <Spacer size={16} />
        <LexendText bold className="text-xl">Alokasi Keuangan</LexendText>
        <Spacer size={24} />

        <SegmentedControl
          selectedSegment={selectedSegment}
          setSelectedSegment={setSelectedSegment}
          segments={segments}
        />
        <Spacer size={16} />
        <View className="h-10 justify-center w-1/2" style={{paddingHorizontal: 0}}>
          <Picker
            selectedValue={selectedContent}
            onValueChange={(itemValue) => handlePicker(itemValue)}
            style={{ height: 35 }}
            itemStyle={{ textAlign: 'center', height: 35, justifyContent: 'center' }}
          >
            {contentOptions.map((interval, index) => (
              <Picker.Item
                key={index}
                label={interval}
                value={interval}
                style={{ textAlign: 'center', fontSize: 13}}
              />
            ))}
          </Picker>
        </View>
        <Spacer size={16} />

        <AlokasiKeuangan
          data={data}
          interval={selectedSegment.toLowerCase()}
          barData={barData}
          content={selectedContent}
        />
      </ScrollView>
    </View>
  );
};

export default FinancialReportScreen;
