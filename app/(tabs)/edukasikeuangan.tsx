import React from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import ArticleListItem from '@/components/ArticleListItem'; // Adjust the import path as necessary
import { LexendText } from '@/components/StyledText';

const EdukasiKeuanganScreen = () => {
  const articles = [
    { id: 1, title: 'Pentingnya Melek Keuangan', imageSrc: require('@/assets/images/dummyimage.png') },
    { id: 2, title: 'Top 10 Instrumen Investasi yang Bikin Cepet Kaya!', imageSrc: require('@/assets/images/dummyimage.png') },
    { id: 3, title: '3 Crypto ini Akan Membuat Kamu Bisa Beli McLaren Besok!', imageSrc: require('@/assets/images/dummyimage.png') },
  ];

  return (
    <ScrollView className="bg-white pt-11 px-5">
      <Text className="text-2xl font-bold mb-4">Edukasi Keuangan</Text>

      <Pressable className="mb-8 bg-black rounded-xl flex flex-row">
        <LexendText className="text-xl text-white py-7 ml-3">Panduan Aplikasi</LexendText>
        <Image 
          source={require('@/assets/images/logo/panduan.png')}
          className="absolute right-1 -bottom-8 w-44 h-44"
        />
      </Pressable>

      <Text className="text-xl font-semibold mb-4">Artikel Keuangan</Text>

      {articles.map(article => (
        <View className="pl-3">
        <ArticleListItem
          key={article.id}
          title={article.title}
          imageSrc={article.imageSrc}
          onPress={() => console.log('Article pressed', article.id)}
        />
        </View>
      ))}
    </ScrollView>
  );
};

export default EdukasiKeuanganScreen;
