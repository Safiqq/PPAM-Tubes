import { View, Image } from "react-native";
import { LexendText } from "@/components/StyledText";
import Spacer from "@/components/Spacer";
import { Shadow } from "react-native-shadow-2";
import { getAllTransactions } from "@/services/TransactionService";
import { useState, useEffect } from "react";
import { Transaction } from "@/constants/Types";
import Images from "@/constants/Images";

const RiwayatTransaksi = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchTransactions() {
      const fetchedTransactions = await getAllTransactions();
      setTransactions(fetchedTransactions);
    }

    fetchTransactions();
  }, []);

  const getCategoryImage = (category: string) => {
    return (
      Images[category.replaceAll(" ", "").toLowerCase()] ||
      require("@/assets/images/logo/list.png")
    );
  };

  return (
    <View className="mx-5">
      {transactions.map((transaction) => (
        <View key={transaction.id}>
          <LexendText className="text-[#C5C5C5]">
            {transaction.date.toDateString()}
          </LexendText>
          <Spacer size={4} />
          <Shadow className="flex w-full flex-row items-center justify-between rounded-[16px] px-4 py-4">
            <View className="flex flex-row items-center gap-3">
              <Image source={getCategoryImage(transaction.category)} />
              <View>
                <LexendText bold={true} className="text-[16px]">
                  {transaction.description}
                </LexendText>
                <Spacer size={4} />
                <LexendText className="text-[10px]">
                  {transaction.category}
                </LexendText>
              </View>
            </View>
            <LexendText
              className={`text-[16px] ${transaction.type === "Pendapatan" ? "text-[#76C063]" : transaction.type == "Pengeluaran" ? "text-[#EF4E4E]" : ""}`}
            >
              {transaction.type === "Pendapatan" ||
              transaction.type == "Tabungan"
                ? "+"
                : "-"}
              Rp{transaction.amount.toLocaleString("id")}
            </LexendText>
          </Shadow>
          <Spacer size={20} />
        </View>
      ))}
    </View>
  );
};

export default RiwayatTransaksi;
