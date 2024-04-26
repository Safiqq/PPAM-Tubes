import { forwardRef } from 'react';
import { Text, TextProps } from './Themed';

interface LexendTextProps extends TextProps {
  bold?: boolean;
}

// Don't delete the unused ref, just let it be...
export const LexendText = forwardRef((props: LexendTextProps, ref) => {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: props.bold ? 'LexendBold' : 'Lexend' }]}
    />
  );
});
