import React, { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LexendText } from '@/components/StyledText';
// import { useTailwind } from 'nativewind';
import SegmentedControl from '@/components/SegmentedControl';
import Pengeluaran from '@/components/TambahTransaksiPengeluaran';
import Spacer from '@/components/Spacer';
import Pendapatan from '@/components/TambahTransaksiPendapatan';
import Tabungan from '@/components/TambahTransaksiTabungan';

export default function TambahTransaksiScreen() {
  const insets = useSafeAreaInsets();
  // const { tw } = useTailwind();
  const [transactionType, setTransactionType] = useState('Pengeluaran'); // 'Pengeluaran', 'Pendapatan', 'Tabungan'
  const [showDatePicker, setShowDatePicker] = useState(false);

  const categories = {
    Pengeluaran: [
      'Makan dan Minum', 'Bahan Makanan', 'Belanja', 'Bensin', 'Transportasi',
      'Hiburan', 'Liburan', 'Keluarga dan Teman', 'Tagihan', 'Investasi'
    ],
    Pendapatan: ['Gaji', 'Bonus', 'Hasil Investasi', 'Lainnya'],
    Tabungan: ['Deposito', 'Reksa Dana', 'Emas', 'Lainnya']
  };

  const intervals = [
    'Harian', 'Mingguan', 'Bulanan', 'Tahunan'
  ];

  const renderComponent = () => {
    switch (transactionType) {
      case 'Pendapatan':
        return <Pendapatan categories={categories.Pendapatan} intervals={intervals} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />;
      case 'Tabungan':
        return <Tabungan intervals={intervals} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />;
      default:
        return <Pengeluaran categories={categories.Pengeluaran} intervals={intervals} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />;
    }
  };

  return (
    <ScrollView className="bg-white" contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <LexendText className="text-xl font-bold mb-2 text-center pt-11">Tambah Transaksi</LexendText>
      <Spacer size={28} />
      <View className="mb-4">
        <SegmentedControl selectedSegment={transactionType} setSelectedSegment={setTransactionType} />
        {renderComponent()}
      </View>
    </ScrollView>
  );
}
