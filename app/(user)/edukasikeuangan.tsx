import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import ArticleListItem from "@/components/ArticleListItem"; // Adjust the import path as necessary
import { LexendText } from "@/components/StyledText";
import BottomNavBar from "@/components/BottomNavBar";
import { createFinancialEducationResource, getAllFinancialEducationResources } from "@/services/FinancialEducationService";
import { FinancialEducation } from "@/constants/Types";

const EdukasiKeuanganScreen = () => {
  // const articles = [
  //   {
  //     id: 1,
  //     title: "Pentingnya Melek Keuangan",
  //     imageSrc: require("@/assets/images/dummyimage.png"),
  //   },
  //   {
  //     id: 2,
  //     title: "Top 10 Instrumen Investasi yang Bikin Cepet Kaya!",
  //     imageSrc: require("@/assets/images/dummyimage.png"),
  //   },
  //   {
  //     id: 3,
  //     title: "3 Crypto ini Akan Membuat Kamu Bisa Beli McLaren Besok!",
  //     imageSrc: require("@/assets/images/dummyimage.png"),
  //   },
  // ];
  const [articles, setArticles] = useState<FinancialEducation[]>([]);

  useEffect(() => {
    async function getArticles() {
      const art_ = [
        {
          title: "Sudahkah Membuat Perencanaan Keuangan Bagi Keluarga?",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/sudahkah-membuat-perencanaan-keuangan-bagi-keluarga",
          imageSrc:
            "https://www.sinarmas.co.id/property/9356167/Membuat-Perencanaan-Keuangan-Desktop.png",
        } as FinancialEducation,
        {
          title:
            "10 Strategi Investasi Awal Yang Menguntungkan Bagi Pemula dengan Modal Terbatas",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/10-strategi-investasi-awal-yang-menguntungkan-bagi-pemula-dengan-modal-terbatas",
          imageSrc:
            "https://www.sinarmas.co.id/property/6400805/10-Strategi-Investasi-Awal-yang-Menguntungkan-Desktop.png",
        } as FinancialEducation,
        {
          title: "Berikut Keuntungan Investasi Sejak Dini!",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/berikut-keuntungan-investasi-sejak-dini",
          imageSrc:
            "https://www.sinarmas.co.id/property/6397033/Berikut-Keuntungan-Investasi-Sejak-Dini!-Desktop.png",
        } as FinancialEducation,
        {
          title: "Cara Menabung dengan Efektif untuk Pelajar",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/cara-menabung-dengan-efektif-untuk-pelajar",
          imageSrc:
            "https://www.sinarmas.co.id/property/6398919/Cara-Menabung-dengan-Efektif-untuk-Pelajar-Desktop.png",
        } as FinancialEducation,
        {
          title: "7 Strategi Mengelola Keuangan Pribadi Bagi Karyawan",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/7-strategi-mengelola-keuangan-pribadi-bagi-karyawan",
          imageSrc:
            "https://www.sinarmas.co.id/property/6395147/7-Strategi-Mengelola-Keuangan-Pribadi-Bagi-Karyawan-Desktop.png",
        } as FinancialEducation,
        {
          title: "Tips Akali Budget Belanja Bulanan Supaya Lebih Irit",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/tips-akali-budget-belanja-bulanan-supaya-lebih-irit",
          imageSrc:
            "https://www.sinarmas.co.id/property/4069709/tips-akali-budget-belanja-bulanan-supaya-lebih-irit.jpg",
        } as FinancialEducation,
        {
          title:
            "Manfaat Perencanaan Keuangan untuk Kepentingan Pribadi dan Bisnis",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/manfaat-perencanaan-keuangan-untuk-kepentingan-pribadi-dan-bisnis",
          imageSrc: "https://www.sinarmas.co.id/property/2927736/1.png",
        } as FinancialEducation,
        {
          title:
            "Pentingnya Edukasi Tentang Layanan Jasa Keuangan Bagi Masyarakat",
          contentLink:
            "https://www.sinarmas.co.id/read/edukasi-keuangan/pentingnya-edukasi-tentang-layanan-jasa-keuangan-bagi-masyarakat",
          imageSrc:
            "https://www.sinarmas.co.id/property/1793307/Pentingnya-Edukasi-Tentang-Layanan-Jasa-Keuangan-Bagi-Masyarakat-Desktop.png",
        } as FinancialEducation,
      ];
      for (let i = 0; i < art_.length; i++) {
        createFinancialEducationResource(art_[i]); // cek lagi, pastiin jalan cmn sekali
      }
      const arts = await getAllFinancialEducationResources();
      setArticles(arts);
    }

    getArticles();
  }, []);

  https: return (
    <View>
      <ScrollView className="min-h-full bg-white px-5 pt-11">
        <Text className="mb-4 text-2xl font-bold">Edukasi Keuangan</Text>

        <Pressable className="mb-8 flex flex-row rounded-xl bg-black">
          <LexendText className="ml-3 py-7 text-xl text-white">
            Panduan Aplikasi
          </LexendText>
          <Image
            source={require("@/assets/images/logo/panduan.png")}
            className="absolute -bottom-8 right-1 h-44 w-44"
          />
        </Pressable>

        <Text className="mb-4 text-xl font-semibold">Artikel Keuangan</Text>

        {articles.map((article, index) => (
          <View key={index} className="pl-3">
            <ArticleListItem
              key={article.id}
              title={article.title}
              imageSrc={article.imageSrc}
              onPress={() => console.log("Article pressed", article.id)}
            />
          </View>
        ))}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

export default EdukasiKeuanganScreen;
