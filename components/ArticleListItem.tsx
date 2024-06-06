import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const ArticleListItem = ({ title, imageSrc, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 ml-2 mr-2 flex-row items-center gap-2 rounded-lg bg-white p-4 shadow-md shadow-black"
    >
      <Image source={imageSrc} className="h-16 w-16 rounded-lg" />
      <View className="flex-1">
        <Text className="text-base font-semibold">{title}</Text>
      </View>
      <Image source={require("@/assets/images/logo/detail.png")} />
    </Pressable>
  );
};

export default ArticleListItem;
