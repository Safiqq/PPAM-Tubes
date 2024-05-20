import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const ArticleListItem = ({ title, imageSrc, onPress }) => {
  return (
    <Pressable onPress={onPress} className="flex-row items-center ml-2 mr-2 mb-4 bg-white rounded-lg p-4 shadow-md shadow-black gap-2">
      <Image source={imageSrc} className="w-16 h-16 rounded-lg" />
      <View className="flex-1">
        <Text className="font-semibold text-base">{title}</Text>
      </View>
      <Image 
      source={require('@/assets/images/logo/detail.png')}
      className="" />
    </Pressable>
  );
};

export default ArticleListItem;
