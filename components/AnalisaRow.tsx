import { View, Image } from "react-native";
import Spacer from "@/components/Spacer";
import { LexendText } from "@/components/StyledText";
import Images from "@/constants/Images";

const AnalisaRow = ({
  image,
  title,
  content = "",
  content2 = "",
  border = true,
  type = 1,
}: {
  image: string;
  title: string;
  content?: string;
  content2?: string;
  border?: boolean;
  type?: number;
}) => {
  return (
    <View
      className={`flex flex-row items-center gap-4 py-2 ${border && "border-b border-b-[#BDBDBD]"}`}
    >
      <Image source={Images[image]} />
      <View>
        <LexendText className="text-[10px]">{title}</LexendText>
        {type == 1 && content !== "" && (
          <>
            <Spacer size={4} />
            <LexendText bold={true}>{content}</LexendText>
          </>
        )}
        {type == 1 && content2 !== "" && (
          <>
            <Spacer size={4} />
            <LexendText className=" text-[10px] text-[#FF4848]">
              {content2}
            </LexendText>
          </>
        )}
        {type == 2 && (
          <>
            <Spacer size={4} />
            <LexendText bold={true} className="text-black">
              <LexendText bold={true} className="text-[#FF4848] line-through">
                {content}
              </LexendText>{" "}
              {content2}
            </LexendText>
          </>
        )}
        {type == 3 && (
          <>
            <LexendText className="text-[10px]">{title}</LexendText>
            <Spacer size={4} />
            <LexendText className="text-[#EF4E4E] underline">
              {content}
            </LexendText>
          </>
        )}
      </View>
    </View>
  );
};

export default AnalisaRow;
