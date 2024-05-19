import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LexendText } from '@/components/StyledText';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tabungan = ({ intervals }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [repeatInterval, setRepeatInterval] = useState('');
  const [repeatUntil, setRepeatUntil] = useState(new Date());
  const [showRepeatUntilDatePicker, setShowRepeatUntilDatePicker] = useState(false);
  const [description, setDescription] = useState('');

  const handleTambah = () => {
    const data = {
      nominal: amount,
      kategori: selectedCategory,
      tanggal: date.toLocaleDateString(),
      ...(recurring && {
        berulangSetiap: repeatInterval,
        berulangHingga: repeatUntil.toLocaleDateString()
      }),
      keterangan: description
    };
    
    if (data.nominal === "") {
      Alert.alert("Data transaksi BELUM LENGKAP!");
      console.log("data transaksi belum lengkap")
    } else {
      // console.log("dordor")
      console.log(JSON.stringify(data));
      Alert.alert("Data transaksi BERHASIL DITAMBAHKAN!");
    }
    // Alert.alert("Data Submitted", JSON.stringify(data, null, 2));
  };

  return (
    <View className="mb-4">
      <LexendText className="text-lg mb-2">Nominal</LexendText>
      <TextInput
        className="border border-gray-400 rounded-lg p-2 mb-4"
        placeholder="0"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <LexendText className="text-lg mb-2">Tanggal</LexendText>
      <Pressable
        className="border border-gray-400 rounded-lg p-2 mb-4"
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(false);
            setDate(currentDate);
          }}
        />
      )}

      <View className="flex-row items-center mb-4">
        <Pressable
          className="mr-2"
          onPress={() => setRecurring(!recurring)}
        >
          <View className={`h-6 w-6 border rounded ${recurring ? 'bg-[#76C063]' : 'border-gray-400'} flex items-center justify-center`}>
            {recurring && <Icon name="check" size={18} color="white" />}
          </View>
        </Pressable>
        <LexendText>Transaksi Berulang</LexendText>
      </View>

      {recurring && (
        <>
          <View className="flex-row justify-between mb-4">
            <View className="flex-1 mr-2">
              <LexendText className="mb-2">Berulang Setiap</LexendText>
              <View className="border border-gray-400 rounded-lg h-10 justify-center">
                <Picker
                  selectedValue={repeatInterval}
                  onValueChange={(itemValue) => setRepeatInterval(itemValue)}
                  style={{ height: 35 }}
                  itemStyle={{ textAlign: 'center', height: 35, justifyContent: 'center' }}
                >
                  {intervals.map((interval, index) => (
                    <Picker.Item
                      key={index}
                      label={interval}
                      value={interval}
                      style={{ textAlign: 'center' }}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View className="flex-1 ml-2">
              <LexendText className="mb-2">Berulang Hingga</LexendText>
              <Pressable
                className="border border-gray-400 rounded-lg p-2"
                onPress={() => setShowRepeatUntilDatePicker(true)}
              >
                <Text>{repeatUntil.toLocaleDateString()}</Text>
              </Pressable>
              {showRepeatUntilDatePicker && (
                <DateTimePicker
                  value={repeatUntil}
                  mode="date"
                  display="default"
                  minimumDate={new Date()}
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || repeatUntil;
                    setShowRepeatUntilDatePicker(false);
                    setRepeatUntil(currentDate);
                  }}
                />
              )}
            </View>
          </View>
        </>
      )}

      <LexendText className="text-lg mb-2">Keterangan</LexendText>
      <TextInput
        className="border border-gray-400 rounded-lg p-2 mb-4"
        placeholder="Deskripsi singkat"
        value={description}
        onChangeText={setDescription}
      />

      <Pressable className="bg-black rounded-full py-3 px-6 mt-4" onPress={handleTambah}>
        <LexendText className="text-white text-center">Tambah</LexendText>
      </Pressable>
    </View>
  );
};

export default Tabungan;
