import { TouchableOpacity } from "react-native";
import { LexendText } from "./StyledText";
import { Link } from "expo-router";

const BlackButton = ({ text }) => {
  return (
    <TouchableOpacity
      className="w-full rounded-[12px] bg-black py-3"
      style={{ flex: 0.1 }}
    >
      <LexendText bold={true} className="text-center text-[16px] text-white">
        {text}
      </LexendText>
    </TouchableOpacity>
  );
};

export default BlackButton;
