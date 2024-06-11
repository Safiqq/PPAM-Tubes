import pilihanInvestasi from "@/constants/Investasi";
import {
  BreakdownInvestasi,
  InputKalkulatorDanaMenikah,
  OutputKalkulatorDanaMenikah,
} from "@/constants/Types";

function kalkulatorDanaMenikah(
  input: InputKalkulatorDanaMenikah,
): OutputKalkulatorDanaMenikah {
  const {
    totalBiayaPernikahan,
    lamaMengumpulkan,
    asumsiInflasi,
    uangSaatIni,
    targetInvestasiPerBulan,
    returnInvestasi,
  } = input;
  const n = lamaMengumpulkan * 12; // jumlah bulan
  const rInflasi = asumsiInflasi / 100;
  const rInvestasi = returnInvestasi / 100 / 12;

  // Menghitung total biaya pernikahan dengan inflasi
  const totalUangDibutuhkan =
    totalBiayaPernikahan * Math.pow(1 + rInflasi, lamaMengumpulkan);

  // Menghitung nilai akhir investasi
  let FV = uangSaatIni * Math.pow(1 + rInvestasi, n);
  for (let i = 1; i <= n; i++) {
    FV += targetInvestasiPerBulan * Math.pow(1 + rInvestasi, n - i);
  }

  const strategiCocok = FV >= totalUangDibutuhkan;
  const hasilInvestasi = FV;
  const totalPokokInvestasi = uangSaatIni + targetInvestasiPerBulan * n;
  const totalBungaInvestasi = hasilInvestasi - totalPokokInvestasi;
  const persentasePokokInvestasi =
    (totalPokokInvestasi / hasilInvestasi) * 100;
  const persentaseBungaInvestasi =
    (totalBungaInvestasi / hasilInvestasi) * 100;

  const breakdownInvestasi: BreakdownInvestasi = {
    totalPokokInvestasi,
    persentasePokokInvestasi,
    totalBungaInvestasi,
    persentaseBungaInvestasi,
  };

  let rekomendasiInvestasiPerBulan;
  let rekomendasiDurasiInvestasi;
  let rekomendasiBreakdownNominal: BreakdownInvestasi | undefined;
  let rekomendasiBreakdownDurasi: BreakdownInvestasi | undefined;

  if (!strategiCocok) {
    // Cari investasi per bulan agar mencapai target
    rekomendasiInvestasiPerBulan = (totalUangDibutuhkan - FV) / n;

    // Breakdown nominal rekomendasi
    const totalPokokRekomendasiNominal =
      uangSaatIni + rekomendasiInvestasiPerBulan * n;
    const totalBungaRekomendasiNominal =
      totalUangDibutuhkan - totalPokokRekomendasiNominal;
    rekomendasiBreakdownNominal = {
      totalPokokInvestasi: totalPokokRekomendasiNominal,
      persentasePokokInvestasi:
        (totalPokokRekomendasiNominal / totalUangDibutuhkan) *
        100,
      totalBungaInvestasi: totalBungaRekomendasiNominal,
      persentaseBungaInvestasi:
        (totalBungaRekomendasiNominal / totalUangDibutuhkan) *
        100,
    };

    // Cari durasi investasi dengan nominal yang sama agar mencapai target
    let tempFV = uangSaatIni;
    let tempN = 0;
    while (tempFV < totalUangDibutuhkan) {
      tempN++;
      tempFV = uangSaatIni * Math.pow(1 + rInvestasi, tempN);
      for (let i = 1; i <= tempN; i++) {
        tempFV += targetInvestasiPerBulan * Math.pow(1 + rInvestasi, tempN - i);
      }
    }
    rekomendasiDurasiInvestasi = tempN;

    // Breakdown durasi rekomendasi
    const totalPokokRekomendasiDurasi =
      uangSaatIni + targetInvestasiPerBulan * rekomendasiDurasiInvestasi;
    const totalBungaRekomendasiDurasi =
      totalUangDibutuhkan - totalPokokRekomendasiDurasi;
    rekomendasiBreakdownDurasi = {
      totalPokokInvestasi: totalPokokRekomendasiDurasi,
      persentasePokokInvestasi:
        (totalPokokRekomendasiDurasi / totalUangDibutuhkan) * 100,
      totalBungaInvestasi: totalBungaRekomendasiDurasi,
      persentaseBungaInvestasi:
        (totalBungaRekomendasiDurasi / totalUangDibutuhkan) * 100,
    };
  }

  const rekomendasiPilihanInvestasi = pilihanInvestasi.filter(
    (inv) =>
      inv.returnTahunan >= returnInvestasi - 2 &&
      inv.returnTahunan <= returnInvestasi + 2,
  );

  return {
    strategiCocok,
    totalUangDibutuhkan,
    hasilInvestasi,
    breakdownInvestasi,
    rekomendasiInvestasiPerBulan,
    rekomendasiDurasiInvestasi,
    rekomendasiBreakdownNominal,
    rekomendasiBreakdownDurasi,
    rekomendasiPilihanInvestasi,
  };
}

// const inputContoh: InputKalkulatorDanaMenikah = {
//   totalBiayaPernikahan: 200_000_000, // Total biaya pernikahan 200 juta
//   lamaMengumpulkan: 5, // Akan menikah dalam 5 tahun
//   asumsiInflasi: 5, // Asumsi inflasi 5%
//   uangSaatIni: 50_000_000, // Uang yang dimiliki saat ini 50 juta
//   targetInvestasiPerBulan: 2_000_000, // Target investasi setiap bulan 2 juta
//   returnInvestasi: 12, // Return investasi 12% per tahun
// };

// const result1 = kalkulatorDanaMenikah(inputContoh);

// console.log("=========== NEW TEST CASE ==============");
// console.log(
//   "Apakah strateginya cocok? ",
//   result1.strategiCocok ? "Ya" : "Tidak",
// );
// console.log(
//   "Total biaya pernikahan setelah kena inflasi: ",
//   result1.totalUangDibutuhkan,
// );
// console.log("result1 investasi: ", result1.hasilInvestasi);
// console.log(
//   "Breakdown total pokok investasi: ",
//   result1.breakdownInvestasi.totalPokokInvestasi,
// );
// console.log(
//   "Persentase pokok investasi: ",
//   result1.breakdownInvestasi.persentasePokokInvestasi.toFixed(2),
//   "%",
// );
// console.log(
//   "Total bunga investasi: ",
//   result1.breakdownInvestasi.totalBungaInvestasi,
// );
// console.log(
//   "Persentase bunga investasi: ",
//   result1.breakdownInvestasi.persentaseBungaInvestasi.toFixed(2),
//   "%",
// );

// if (!result1.strategiCocok) {
//   console.log(
//     "Rekomendasi nominal investasi per bulan: ",
//     result1.rekomendasiInvestasiPerBulan,
//   );
//   console.log(
//     "Rekomendasi breakdown pokok investasi (nominal): ",
//     result1.rekomendasiBreakdownNominal?.totalPokokInvestasi,
//   );
//   console.log(
//     "Rekomendasi persentase pokok investasi (nominal): ",
//     result1.rekomendasiBreakdownNominal?.persentasePokokInvestasi.toFixed(2),
//     "%",
//   );
//   console.log(
//     "Rekomendasi total bunga investasi (nominal): ",
//     result1.rekomendasiBreakdownNominal?.totalBungaInvestasi,
//   );
//   console.log(
//     "Rekomendasi persentase bunga investasi (nominal): ",
//     result1.rekomendasiBreakdownNominal?.persentaseBungaInvestasi.toFixed(2),
//     "%",
//   );
//   console.log(
//     "Rekomendasi durasi lama investasi (bulan): ",
//     result1.rekomendasiDurasiInvestasi,
//   );
//   console.log(
//     "Rekomendasi breakdown pokok investasi (durasi): ",
//     result1.rekomendasiBreakdownDurasi?.totalPokokInvestasi,
//   );
//   console.log(
//     "Rekomendasi persentase pokok investasi (durasi): ",
//     result1.rekomendasiBreakdownDurasi?.persentasePokokInvestasi.toFixed(2),
//     "%",
//   );
//   console.log(
//     "Rekomendasi total bunga investasi (durasi): ",
//     result1.rekomendasiBreakdownDurasi?.totalBungaInvestasi,
//   );
//   console.log(
//     "Rekomendasi persentase bunga investasi (durasi): ",
//     result1.rekomendasiBreakdownDurasi?.persentaseBungaInvestasi.toFixed(2),
//     "%",
//   );
// }

// console.log("Rekomendasi pilihan investasi sesuai return:");
// result1.rekomendasiPilihanInvestasi.forEach((investasi) => {
//   console.log(`- ${investasi.nama} (${investasi.returnTahunan}%)`);
// });

export default kalkulatorDanaMenikah;
