export const validateNumberInput = (input: string): boolean => {
  const regex = /^[0-9.]*$/;
  return regex.test(input);
};

export const handleInputChange =
  (setter: React.Dispatch<React.SetStateAction<string>>) => (text: string) => {
    if (validateNumberInput(text)) {
      setter(text);
    }
  };

export const int = (str: string) => {
  return parseInt(str.replaceAll(".", ""));
};

export const float = (str: string) => {
  return parseFloat(str.replaceAll(".", "").replaceAll(",", "."));
};
