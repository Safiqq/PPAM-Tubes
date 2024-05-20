import React from 'react';
import { StyleSheet, ImageBackground, ScrollView, View, Text, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { LexendText } from '@/components/StyledText';
import { Link } from "expo-router";

export default function DetailPengingatScreen() {
  const insets = useSafeAreaInsets();

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
                        <View className="mb-8 bg-black rounded-xl flex flex-row items-center px-20">
                        <Image
                                  source={require('@/assets/images/tambahpengingat.png')}
                                  className="absolute left-1 w-30 h-30"
                                />
                            <LexendText bold={true} className="text-xl text-right justify-end text-white py-7 ml-3 flex-1">Tambah Pengingat</LexendText>

                               <Image
                                   className="absolute right-7 h-5 w-5"
                                   source={require("@/assets/images/detail_white.png")}
                                   />
                        </View>
                    </Link>
                </View>
                 <View style={{ flex: 2, gap: 12 }}>
                                             <View
                                               style={{
                                                 flexDirection: "row",
                                                 alignItems: "center",
                                                 justifyContent: "space-between",
                                                  marginHorizontal: 20,
                                                        marginVertical : 15
                                               }}
                                             >
                                               <View>
                                                 <LexendText bold={true}>18 Apr 2024</LexendText>
                                                 <LexendText>Tabungan Pensiun</LexendText>
                                               </View>
                                               <View
                                                 style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 14,
                                                   backgroundColor: "#D9D9D9",
                                                   borderRadius: 24,
                                                 }}
                                               ></View>
                                             </View>
                                             </View>
                                             <View
                                                           style={{
                                                             flexDirection: "row",
                                                             alignItems: "center",
                                                             justifyContent: "space-between",
                                                               marginHorizontal: 20,
                                                               marginVertical : 5
                                                           }}
                                                         >
                                                           <View>
                                                             <LexendText bold={true}>18 Apr 2024</LexendText>
                                                             <LexendText>Dana Darurat</LexendText>
                                                           </View>
                                                           <View
                                                             style={{
                                                               width: 12,
                                                               height: 12,
                                                               marginHorizontal: 14,
                                                               backgroundColor: "#D9D9D9",
                                                               borderRadius: 24,
                                                             }}
                                                           ></View>
                                                         </View>
        </ScrollView>
    </SafeAreaView>
  );
}
