import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import ArticleListItem from "@/components/ArticleListItem"; // Adjust the import path as necessary
import { LexendText } from "@/components/StyledText";
import BottomNavBar from "@/components/BottomNavBar";
import {
  createFinancialEducationResource,
  getAllFinancialEducationResources,
} from "@/services/FinancialEducationService";
import { FinancialEducation } from "@/constants/Types";
import { useRouter } from "expo-router";

const EdukasiKeuanganScreen = () => {
  const router = useRouter();
  
  const [articles, setArticles] = useState<FinancialEducation[]>([]);

  useEffect(() => {
    async function getArticles() {
      const arts = await getAllFinancialEducationResources();
      setArticles(arts);
    }

    getArticles();
  }, []);

  return (
    <View>
      <ScrollView className="min-h-full bg-white px-5 pt-11">
        <LexendText className="mb-4 text-2xl font-bold">Edukasi Keuangan</LexendText>
        <Pressable className="mb-8 flex flex-row rounded-xl bg-black" onPress={() => router.navigate("/panduanaplikasi")}>
          <LexendText className="ml-3 py-7 text-xl text-white">
            Panduan Aplikasi
          </LexendText>
          <Image
            source={require("@/assets/images/logo/panduan.png")}
            className="absolute -bottom-8 right-1 h-44 w-44"
          />
        </Pressable>
        <LexendText className="mb-4 text-xl font-semibold">Artikel Keuangan</LexendText>
        {articles.map((article, index) => (
          <View key={index} className="pl-3">
            <ArticleListItem
              key={article.id}
              title={article.title}
              imageSrc={article.imageSrc}
              contentLink={article.contentLink}
            />
          </View>
        ))}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default EdukasiKeuanganScreen;
