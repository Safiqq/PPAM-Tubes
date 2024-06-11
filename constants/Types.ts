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

export type Balance = {
  Pendapatan: number;
  Pengeluaran: number;
  Tabungan: number;
};

// Transaction
export type Transaction = {
  id: string;
  userID: DocumentReference;
  type: "Pengeluaran" | "Pendapatan" | "Tabungan";
  amount: number;
  category:
    | "Makan dan Minum" // Pengeluaran
    | "Bahan Makanan"
    | "Belanja"
    | "Bensin"
    | "Transportasi"
    | "Hiburan"
    | "Liburan"
    | "Keluarga dan Teman"
    | "Tagihan"
    | "Investasi"
    | "Gaji" // Pendapatan
    | "Bonus"
    | "Hasil Investasi"
    | "Lainnya"
    | "Deposito" // Tabungan
    | "Reksa Dana"
    | "Emas"
    | "Lainnya";
  isRecurring: boolean;
  recurringEach?: "Hari" | "Minggu" | "Bulan" | "Tahun";
  recurringUntil?: Date;
  date: Date;
  description: string;
};

// Reminder
export type Reminder = {
  id: string;
  userID: DocumentReference;
  title: string;
  recurringEach: "Bulan" | "Tahun";
  date: Date;
  description: string;
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
  lamaMengumpulkan: number; // dalam bulan
  uangSaatIni: number;
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
export type InputKalkulatorDanaMenikah = {
  totalBiayaPernikahan: number;
  lamaMengumpulkan: number; // dalam tahun
  asumsiInflasi: number; // dalam persen
  uangSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorDanaMenikah = {
  strategiCocok: boolean;
  totalUangDibutuhkan: number;
  hasilInvestasi: number;
  breakdownInvestasi: BreakdownInvestasi;
  rekomendasiInvestasiPerBulan?: number;
  rekomendasiDurasiInvestasi?: number;
  rekomendasiBreakdownNominal?: BreakdownInvestasi;
  rekomendasiBreakdownDurasi?: BreakdownInvestasi;
  rekomendasiPilihanInvestasi: Investasi[];
};

// Dana Pensiun
export type InputKalkulatorDanaPensiun = {
  pengeluaranPerBulan: number;
  usiaSekarang: number;
  usiaPensiun: number;
  lamaMengumpulkan: number;
  asumsiInflasiTahunan: number;
  uangSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorDanaPensiun = {
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
export type InputKalkulatorDPProperti = {
  lamaMengumpulkan: number;
  hargaProperti: number;
  persenDP: number;
  inflasiProperti: number;
  uangSaatIni: number;
  targetInvestasiPerBulan: number;
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorDPProperti = {
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
  lamaMengumpulkan: number; // dalam tahun atau bulan
  uangSaatIni: number;
  menabungSetiap: "Bulan" | "Tahun";
  targetInvestasiPerBulan: number; // tambahan nominal investasi per bulan
  returnInvestasi: number; // return tahunan dalam persen
};

export type OutputKalkulatorInvestasi = {
  totalUangDibutuhkan: number;
  strategiCocok: boolean;
  hasilInvestasi: number;
  breakdownInvestasi: BreakdownInvestasi;
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
  totalBiayaLain: number;
  biayaAJB: number;
  biayaBalikNama: number;
  biayaNotaris: number;
  biayaBank: number;
  appraisal: number;
  administrasi: number;
  provinsi: number;
};

export type InputGabungan =
  | InputKalkulatorDanaDarurat
  | InputKalkulatorDanaMenikah
  | InputKalkulatorInvestasi
  | InputKalkulatorDanaPensiun
  | InputKalkulatorDPProperti;

export type OutputGabungan =
  | OutputKalkulatorInvestasi
  | OutputKalkulatorDanaDarurat
  | OutputKalkulatorDanaMenikah
  | OutputKalkulatorDanaPensiun
  | OutputKalkulatorDPProperti;
