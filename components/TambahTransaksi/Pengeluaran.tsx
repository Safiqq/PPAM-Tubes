import React, { useState } from "react";
import { Pressable, TextInput, View, Text, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LexendText } from "@/components/StyledText";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createTransaction } from "@/services/TransactionService";
import { Transaction } from "@/constants/Types";
import { useRouter } from "expo-router";
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Pengeluaran = ({
  categories,
  intervals,
}: {
  categories: string[];
  intervals: string[];
}) => {
  const router = useRouter();

  const [amount, setAmount] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [recurring, setRecurring] = useState<boolean>(false);
  const [repeatInterval, setRepeatInterval] = useState<string>("");
  const [repeatUntil, setRepeatUntil] = useState<Date>(new Date());
  const [showRepeatUntilDatePicker, setShowRepeatUntilDatePicker] =
    useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleTambah = () => {
    const transaction = {
      type: "Pengeluaran",
      amount: parseFloat(amount) || 0,
      category: selectedCategory,
      isRecurring: recurring,
      ...(recurring && {
        recurringEach: repeatInterval,
        recurringUntil: repeatUntil,
      }),
      date,
      description,
    };

    if (transaction.amount === 0 || transaction.category === null) {
      Alert.alert("Data transaksi belum lengkap!");
      console.log("Data transaksi belum lengkap");
    } else {
      console.log(JSON.stringify(transaction));
      createTransaction(transaction as Transaction);
      alert("Berhasil menambahkan ke pengingat pembayaran!");
      router.navigate("/transaksi");
    }
  };

  return (
    <View className="mb-4">
      <LexendText className="mb-2 text-lg">Nominal</LexendText>
      <TextInput
        className="mb-4 rounded-lg border border-gray-400 p-2"
        placeholder="0"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <LexendText className="mb-2 text-lg">Kategori</LexendText>
      <View className="mb-4 flex-row flex-wrap">
        {categories.map((category, index) => (
          <Pressable
            key={index}
            className={`m-1 rounded-full border p-2 ${
              selectedCategory === category
                ? "border-green-500 bg-[#76C063]"
                : "border-gray-400"
            }`}
            onPress={() => setSelectedCategory(category)}
          >
            <LexendText
              className={
                selectedCategory === category ? "text-white" : "text-gray-600"
              }
            >
              {category}
            </LexendText>
          </Pressable>
        ))}
      </View>

      <LexendText className="mb-2 text-lg">Tanggal</LexendText>
      <Pressable
        className="mb-4 rounded-lg border border-gray-400 p-2"
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(false);
            setDate(currentDate);
          }}
        />
      )}

      <View className="mb-4 flex-row items-center">
        <Pressable className="mr-2" onPress={() => setRecurring(!recurring)}>
          <View
            className={`h-6 w-6 rounded border ${recurring ? "bg-[#76C063]" : "border-gray-400"} flex items-center justify-center`}
          >
            {recurring && <Icon name="check" size={18} color="white" />}
          </View>
        </Pressable>
        <LexendText>Transaksi Berulang</LexendText>
      </View>

      {recurring && (
        <>
          <View className="mb-4 flex-row justify-between">
            <View className="mr-2 flex-1">
              <LexendText className="mb-2">Berulang Setiap</LexendText>
              <View className="h-10 justify-center rounded-lg border border-gray-400">
                <Picker
                  selectedValue={repeatInterval}
                  onValueChange={(itemValue) => setRepeatInterval(itemValue)}
                  style={{ height: 35 }}
                  itemStyle={{
                    textAlign: "center",
                    height: 35,
                    justifyContent: "center",
                  }}
                >
                  {intervals.map((interval, index) => (
                    <Picker.Item
                      key={index}
                      label={interval}
                      value={interval}
                      style={{ textAlign: "center" }}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View className="ml-2 flex-1">
              <LexendText className="mb-2">Berulang Hingga</LexendText>
              <Pressable
                className="rounded-lg border border-gray-400 p-2"
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

      <LexendText className="mb-2 text-lg">Keterangan</LexendText>
      <TextInput
        className="mb-4 rounded-lg border border-gray-400 p-2"
        placeholder="Deskripsi singkat"
        value={description}
        onChangeText={setDescription}
      />

      <Pressable
        className="mt-4 rounded-full bg-black px-6 py-3"
        onPress={handleTambah}
      >
        <LexendText className="text-center text-white">Tambah</LexendText>
      </Pressable>
    </View>
  );
};

export default Pengeluaran;
