import { DocumentReference } from "firebase/firestore";
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
} from "react-native";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

// User
export type User = {
  email: string;
  password: string;
  name: string;
  referralCode: string;
};

// Transaction
export type Transaction = {
  id: string;
  accountID: DocumentReference;
  type: string;
  amount: number;
  category: string;
  isRecurring: boolean;
  recurringEach: string;
  date: Date;
  description: string;
};

// Account
export type Account = {
  id: string;
  name: string;
  balance: number;
};

// Reminder
export type Reminder = {
  id: string;
  userID: DocumentReference;
  title: string;
  type: string;
  date: Date;
  description: string;
};

// Simulation
export type Simulation = {
  id: string;
  userID: DocumentReference;
  type: string;
  input: JSON;
  result: JSON;
};

// Tutorial
export type Tutorial = {
  id: string;
  title: string;
  content: string;
};

// Financial Education
export type FinancialEducation = {
  id: string;
  title: string;
  contentLink: string;
  imageSrc: string;
};

// Financial Report
export type FinancialReport = {
  id: string;
  userID: string;
  date: Date;
  content: string;
};

// Investasi
export type Investasi = {
  nama: string;
  returnTahunan: number;
};

export type BreakdownInvestasi = {
  totalPokokInvestasi: number;
  persentasePokokInvestasi: number;
  totalBungaInvestasi: number;
  persentaseBungaInvestasi: number;
};

// Dana Darurat
export type InputKalkulatorDanaDarurat = {
  pengeluaranWajibPerBulan: number;
  sudahMenikah: boolean;
  jumlahTanggungan: number;
  targetLamaMengumpulkan: number; // dalam bulan
  danaSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorDanaDarurat = {
  strategiCocok: boolean;
  totalUangDibutuhkan: number;
  hasilInvestasi: number;
  breakdownInvestasi: BreakdownInvestasi;
  investasiKurang?: number;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// Dana Menikah
export type InputKalkulatorMenikah = {
  totalBiayaPernikahan: number;
  waktuMenikah: number; // dalam tahun
  asumsiInflasi: number; // dalam persen
  uangSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorMenikah = {
  strategiCocok: boolean;
  totalBiayaPernikahanDenganInflasi: number;
  result1Investasi: number;
  breakdownInvestasi: BreakdownInvestasi;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// Dana Pensiun
export type InputKalkulatorPensiun = {
  pengeluaranPerBulan: number;
  usiaSekarang: number;
  usiaPensiun: number;
  asumsiInflasiTahunan: number;
  danaPensiunSaatIni: number;
  targetInvestasiPerBulan: number;
  targetReturnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorPensiun = {
  strategiCocok: boolean;
  totalUangDibutuhkan: number;
  hasilInvestasi: number;
  breakdownInvestasi: BreakdownInvestasi;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiReturnBaru?: number;
  rekomendasiBreakdownReturnBaru?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// DP Properti
export type InputKalkulatorProperti = {
  tahunMimpi: number;
  hargaProperti: number;
  persenDP: number;
  inflasiProperti: number;
  danaSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorProperti = {
  strategiCocok: boolean;
  totalUangDibutuhkan: number;
  hasilInvestasi: number;
  breakdownInvestasi: BreakdownInvestasi;
  dpProperti: number;
  kprProperti: number;
  persenKPR: number;
  investasiKurang?: number;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiReturnBaru?: number;
  rekomendasiBreakdownReturnBaru?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// Kalkulator Investasi
export type InputKalkulatorInvestasi = {
  jumlahTarget: number;
  waktuMengumpulkan: number; // dalam tahun atau bulan
  uangSaatIni: number;
  menabungSetiap: "Bulan" | "Tahun";
  targetInvestasiPerBulan: number; // tambahan nominal investasi per bulan
  returnProduk: number; // return tahunan dalam persen
};

export type OutputKalkulatorInvestasi = {
  strategiCocok: boolean;
  resultInvestasi: number;
  totalPokokInvestasi: number;
  persentasePokokInvestasi: number;
  totalBungaInvestasi: number;
  persentaseBungaInvestasi: number;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// Simulasi KPR
export type InputSimulasiKPR = {
  hargaPropertiImpian: number;
  persentaseDP: number;
  penghasilanBulanan: number;
  lamaKPRBulan: number;
  persenBungaFix: number;
  periodeBungaFixBulan: number;
  persenBungaFloating: number;
};

export type OutputSimulasiKPR = {
  totalBungaKPR: number;
  periodeBungaFloating: number;
  pokokPinjaman: number;
  jumlahPeriode: number;
  bungaFix: number;
  totalBungaPeriodeFix: number;
  bungaFloating: number;
  totalBungaPeriodeFloating: number;
  totalHasilBungaDariPokokPinjaman: number;
  sisaPokokPinjamanSetelahPeriodeFix: number;
  totalBungaKPRYangHarusDibayar: number;
  kategoriRasioPembayaran: string;
};
