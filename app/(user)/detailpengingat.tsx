import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from "@/components/StyledText";
import { Link } from "expo-router";
import { deleteReminder, getAllReminders } from "@/services/ReminderService";
import { Reminder } from "@/constants/Types";

export default function DetailPengingatScreen() {
  const [reminders, setReminders] = useState<Reminder[]>();

  useEffect(() => {
    async function getReminders() {
      const reminds = await getAllReminders();
      setReminders(reminds);
    }

    getReminders();
  }, []);

  const handleDeleteReminder = (reminder: Reminder) => {
    Alert.alert(
      reminder.title,
      "Are you sure you want to delete this reminder?",
      [
        {
          text: "Delete",
          onPress: () => deleteReminder(reminder.id),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className="h-[100px] items-center justify-center">
          <Image
            className="absolute left-7 top-11"
            source={require("@/assets/images/logo/backbutton.png")}
          />
          <LexendText bold={true} className="text-[20px]">
            Pengingat
          </LexendText>
        </View>
        <View className="items-center justify-center">
          <Link href="(user)/tambahpengingat">
            <View className="mb-8 flex flex-row items-center rounded-xl bg-black px-20">
              <Image
                source={require("@/assets/images/tambahpengingat.png")}
                className="w-30 h-30 absolute left-1"
              />
              <LexendText
                bold={true}
                className="ml-3 flex-1 justify-end py-7 text-right text-xl text-white"
              >
                Tambah Pengingat
              </LexendText>

              <Image
                className="absolute right-7 h-5 w-5"
                source={require("@/assets/images/detail_white.png")}
              />
            </View>
          </Link>
        </View>
        {reminders?.map((reminder, index) => (
          <View key={index} style={{ flex: 2, gap: 12 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginVertical: 15,
              }}
            >
              <View className="max-w-[90%]">
                <LexendText bold={true}>
                  {reminder.date.getDate()}{" "}
                  {reminder.date.toLocaleString("default", { month: "short" })}{" "}
                  {reminder.date.getFullYear()}
                </LexendText>
                <LexendText bold={true}>{reminder.title}</LexendText>
                <LexendText>{reminder.description}</LexendText>
              </View>
              <TouchableOpacity onPress={() => handleDeleteReminder(reminder)}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    marginHorizontal: 14,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 24,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
