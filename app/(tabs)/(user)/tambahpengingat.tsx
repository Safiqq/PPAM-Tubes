import React, { useState } from "react";
import { ScrollView, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText, LexendTextInput } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function TambahTransaksiScreen() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [repeatInterval, setRepeatInterval] = useState("");

  const intervals = ["Harian", "Mingguan", "Bulanan", "Tahunan"];

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
            placeholder="0"
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
          />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}
