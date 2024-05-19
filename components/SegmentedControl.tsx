import React from 'react';
import { View, Pressable, Text } from 'react-native';

const SegmentedControl = ({ selectedSegment, setSelectedSegment }) => {
  const segments = ['Pengeluaran', 'Pendapatan', 'Tabungan'];

  return (
    <View className="flex-row bg-gray-200 rounded-full overflow-hidden mb-4">
      {segments.map((segment) => (
        <Pressable
          key={segment}
          onPress={() => setSelectedSegment(segment)}
          className= {`flex-1 items-center rounded-full justify-center p-2 ${selectedSegment === segment ? 'bg-[#76C063]' : 'bg-gray-200'}`}
        >
          <Text className={`${selectedSegment === segment ? 'text-white' : 'text-gray-500'} font-semibold`}>
            {segment}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedControl;
