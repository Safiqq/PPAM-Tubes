import { forwardRef } from 'react';
import { Text, TextProps, TextInput, TextInputProps } from './Themed';

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

export const LexendTextInput = forwardRef((props: TextInputProps, ref) => {
  return (
    <TextInput
      {...props}
      style={[props.style, { fontFamily: 'Lexend' }]}
    />
  );
});
