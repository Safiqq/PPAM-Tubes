export const validateNumberInput = (input: string): boolean => {
  const regex = /^[0-9.]*$/;
  return regex.test(input);
};

export const formatNumber = (input: string): string => {
  // Remove any existing dots to handle reformatting correctly
  const cleanInput = input.replace(/\./g, "");

  // Convert the clean input into an integer and format it
  return cleanInput.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const handleInputCurrencyChange =
  (setter: React.Dispatch<React.SetStateAction<string>>) => (text: string) => {
    if (validateNumberInput(text)) {
      const formattedText = formatNumber(text);
      setter(formattedText);
    }
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
