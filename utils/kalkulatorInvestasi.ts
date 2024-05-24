import { Investasi, pilihanInvestasi } from "./modelPilihanInvestasi";

interface InputKalkulator {
  jumlahTarget: number;
  waktuMengumpulkan: number; // dalam tahun atau bulan
  uangSaatIni: number;
  frekuensiMenabung: 'Setiap bulan' | 'Setiap tahun';
  waktuMenambah: 'Awal bulan' | 'Akhir bulan' | 'Awal tahun' | 'Akhir tahun';
  targetInvestasi: number; // return tahunan dalam persen
  nominalInvestasiPerBulan?: number; // tambahan nominal investasi per bulan
}

interface BreakdownInvestasi {
  totalPokokInvestasi: number;
  persentasePokokInvestasi: number;
  totalBungaInvestasi: number;
  persentaseBungaInvestasi: number;
}

interface OutputKalkulator {
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
}

function kalkulatorInvestasi(input: InputKalkulator): OutputKalkulator {
  const { jumlahTarget, waktuMengumpulkan, uangSaatIni, frekuensiMenabung, waktuMenambah, targetInvestasi, nominalInvestasiPerBulan } = input;
  const n = frekuensiMenabung === 'Setiap bulan' ? waktuMengumpulkan * 12 : waktuMengumpulkan;
  const r = targetInvestasi / 100 / (frekuensiMenabung === 'Setiap bulan' ? 12 : 1);
  
  let FV = uangSaatIni * Math.pow((1 + r), n);
  for (let i = 1; i <= n; i++) {
      FV += nominalInvestasiPerBulan ? nominalInvestasiPerBulan * Math.pow((1 + r), (n - i)) : 0;
  }
  
  const strategiCocok = FV >= jumlahTarget;
  const resultInvestasi = FV;
  const totalPokokInvestasi = uangSaatIni + (nominalInvestasiPerBulan ? nominalInvestasiPerBulan * n : 0);
  const totalBungaInvestasi = resultInvestasi - totalPokokInvestasi;
  const persentasePokokInvestasi = (totalPokokInvestasi / resultInvestasi) * 100;
  const persentaseBungaInvestasi = (totalBungaInvestasi / resultInvestasi) * 100;
  
  let rekomendasiInvestasiPerBulan;
  let rekomendasiDurasiInvestasi;
  let rekomendasiBreakdownNominal: BreakdownInvestasi | undefined;
  let rekomendasiBreakdownDurasi: BreakdownInvestasi | undefined;
  
  if (!strategiCocok) {
      // Cari investasi per bulan/tahun agar mencapai target
      rekomendasiInvestasiPerBulan = (jumlahTarget - FV) / n;

      // Breakdown nominal rekomendasi
      const totalPokokRekomendasiNominal = uangSaatIni + (rekomendasiInvestasiPerBulan ? rekomendasiInvestasiPerBulan * n : 0);
      const totalBungaRekomendasiNominal = jumlahTarget - totalPokokRekomendasiNominal;
      rekomendasiBreakdownNominal = {
          totalPokokInvestasi: totalPokokRekomendasiNominal,
          persentasePokokInvestasi: (totalPokokRekomendasiNominal / jumlahTarget) * 100,
          totalBungaInvestasi: totalBungaRekomendasiNominal,
          persentaseBungaInvestasi: (totalBungaRekomendasiNominal / jumlahTarget) * 100
      };

      // Cari durasi investasi dengan nominal yang sama agar mencapai target
      let tempFV = uangSaatIni;
      let tempN = 0;
      while (tempFV < jumlahTarget) {
          tempN++;
          tempFV = uangSaatIni * Math.pow((1 + r), tempN);
          for (let i = 1; i <= tempN; i++) {
              tempFV += nominalInvestasiPerBulan ? nominalInvestasiPerBulan * Math.pow((1 + r), (tempN - i)) : 0;
          }
      }
      rekomendasiDurasiInvestasi = tempN;
      
      // Breakdown durasi rekomendasi
      const totalPokokRekomendasiDurasi = uangSaatIni + (nominalInvestasiPerBulan ? nominalInvestasiPerBulan * tempN : 0);
      const totalBungaRekomendasiDurasi = jumlahTarget - totalPokokRekomendasiDurasi;
      rekomendasiBreakdownDurasi = {
          totalPokokInvestasi: totalPokokRekomendasiDurasi,
          persentasePokokInvestasi: (totalPokokRekomendasiDurasi / jumlahTarget) * 100,
          totalBungaInvestasi: totalBungaRekomendasiDurasi,
          persentaseBungaInvestasi: (totalBungaRekomendasiDurasi / jumlahTarget) * 100
      };
  }
  
  const rekomendasiPilihanInvestasi = pilihanInvestasi.filter(inv => 
      inv.returnTahunan >= targetInvestasi - 2 && inv.returnTahunan <= targetInvestasi + 2);
  
  return {
      strategiCocok,
      resultInvestasi,
      totalPokokInvestasi,
      persentasePokokInvestasi,
      totalBungaInvestasi,
      persentaseBungaInvestasi,
      rekomendasiInvestasiPerBulan,
      rekomendasiDurasiInvestasi,
      rekomendasiBreakdownNominal,
      rekomendasiBreakdownDurasi,
      rekomendasiPilihanInvestasi
  };
}

const inputContoh: InputKalkulator = {
  jumlahTarget: 10_000_000, // Target mencapai 100 juta
  waktuMengumpulkan: 1, // Waktu mengumpulkan 10 tahun
  uangSaatIni: 400_000, // Uang yang dimiliki saat ini 20 juta
  frekuensiMenabung: 'Setiap bulan', // Menabung setiap bulan
  waktuMenambah: 'Akhir bulan', // Menambah di akhir bulan
  targetInvestasi: 5, // Return investasi 12% per tahun
  nominalInvestasiPerBulan: 200_000 // Nominal investasi per bulan 1 juta
};

const result = kalkulatorInvestasi(inputContoh);

console.log("=========== NEW TEST CASE ==============");
console.log("Apakah strateginya cocok? ", result.strategiCocok ? "Ya" : "Tidak");
console.log("result investasi: ", result.resultInvestasi);
console.log("Total pokok investasi: ", result.totalPokokInvestasi);
console.log("Persentase pokok investasi: ", result.persentasePokokInvestasi.toFixed(2), "%");
console.log("Total bunga investasi: ", result.totalBungaInvestasi);
console.log("Persentase bunga investasi: ", result.persentaseBungaInvestasi.toFixed(2), "%");

if (!result.strategiCocok) {
  console.log("Rekomendasi nominal investasi per bulan: ", result.rekomendasiInvestasiPerBulan);
  console.log("Rekomendasi breakdown pokok investasi (nominal): ", result.rekomendasiBreakdownNominal?.totalPokokInvestasi);
  console.log("Rekomendasi persentase pokok investasi (nominal): ", result.rekomendasiBreakdownNominal?.persentasePokokInvestasi.toFixed(2), "%");
  console.log("Rekomendasi total bunga investasi (nominal): ", result.rekomendasiBreakdownNominal?.totalBungaInvestasi);
  console.log("Rekomendasi persentase bunga investasi (nominal): ", result.rekomendasiBreakdownNominal?.persentaseBungaInvestasi.toFixed(2), "%");
  console.log("Rekomendasi durasi lama investasi (bulan): ", result.rekomendasiDurasiInvestasi);
  console.log("Rekomendasi breakdown pokok investasi (durasi): ", result.rekomendasiBreakdownDurasi?.totalPokokInvestasi);
  console.log("Rekomendasi persentase pokok investasi (durasi): ", result.rekomendasiBreakdownDurasi?.persentasePokokInvestasi.toFixed(2), "%");
  console.log("Rekomendasi total bunga investasi (durasi): ", result.rekomendasiBreakdownDurasi?.totalBungaInvestasi);
  console.log("Rekomendasi persentase bunga investasi (durasi): ", result.rekomendasiBreakdownDurasi?.persentaseBungaInvestasi.toFixed(2), "%");
}

console.log("Rekomendasi pilihan investasi sesuai return:");
result.rekomendasiPilihanInvestasi.forEach(investasi => {
  console.log(`- ${investasi.nama} (${investasi.returnTahunan}%)`);
});
