import { TouchableOpacity } from "react-native";
import { LexendText } from "@/components/StyledText";
import { useRouter } from "expo-router";

const BlackButton = ({
  text,
  href = "/",
}: {
  text: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="w-full rounded-[12px] bg-black py-3"
      style={{ flex: 0.1 }}
      onPress={() => {
        router.push({
          pathname: href,
        });
      }}
    >
      <LexendText bold={true} className="text-center text-[16px] text-white">
        {text}
      </LexendText>
    </TouchableOpacity>
  );
};

export default BlackButton;
