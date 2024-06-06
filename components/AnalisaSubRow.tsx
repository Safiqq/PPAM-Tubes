import { View } from "react-native";
import { LexendText } from "./StyledText";
import Spacer from "./Spacer";

const AnalisaSubRow = ({ title, content, border = true }) => {
  return (
    <View className={`py-2 ${border && "border-b border-b-[#BDBDBD]"}`}>
      <LexendText className="text-[10px]">{title}</LexendText>
      <Spacer size={4} />
      <LexendText bold={true} className="text-[10px]">
        {content}
      </LexendText>
    </View>
  );
};

export default AnalisaSubRow;
