import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Reminder } from "@/constants/Types";
import { createReminder } from "@/services/ReminderService";
import { useRouter } from "expo-router";

export default function TambahTransaksiScreen() {
  const router = useRouter();
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [repeatInterval, setRepeatInterval] = useState("");
  const [description, setDescription] = useState("");

  const intervals = ["Harian", "Mingguan", "Bulanan", "Tahunan"];

  const handleAddReminder = () => {
    const reminder: Reminder = {
      title,
      type: repeatInterval,
      date,
      description,
    };
    createReminder(reminder);
    alert("Berhasil menambahkan ke pengingat pembayaran!");
    router.navigate("/detailpengingat");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="h-[100px] items-center justify-center">
          <Image
            className="absolute left-7 top-11"
            source={require("@/assets/images/logo/backbutton.png")}
          />
          <LexendText bold={true} className="text-[20px]">
            Tambah Pengingat
          </LexendText>
        </View>
        <Spacer size={4} />
        <View className="mx-7">
          <LexendText bold={true}>Judul</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            onChangeText={(newText) => setTitle(newText)}
            placeholder="Nama pengingat"
            value={title}
          />
          <Spacer size={20} />
          <LexendText bold={true}>Tanggal</LexendText>
          <Spacer size={8} />
          <Pressable
            className="rounded-lg border border-gray-400 p-2"
            onPress={() => setShowDatePicker(true)}
          >
            <LexendText>{date.toLocaleDateString()}</LexendText>
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
          <Spacer size={20} />
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
          <Spacer size={20} />
          <LexendText bold={true}>Keterangan</LexendText>
          <Spacer size={8} />
          <LexendTextInput
            className="h-9 rounded-[8px] border border-[#C5C5C5] px-3"
            placeholder="Deskripsi singkat"
            onChangeText={(newText) => setDescription(newText)}
            value={description}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="mx-4 rounded-[12px] bg-black py-3"
        onPress={handleAddReminder}
      >
        <LexendText bold={true} className="text-center text-[16px] text-white">
          Tambah ke Pengingat Pembayaran
        </LexendText>
      </TouchableOpacity>
      <Spacer size={16} />
    </SafeAreaView>
  );
}
