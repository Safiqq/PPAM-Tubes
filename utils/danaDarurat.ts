import pilihanInvestasi from "@/constants/Investasi";
import {
  BreakdownInvestasi,
  InputKalkulatorDanaDarurat,
  Investasi,
  OutputKalkulatorDanaDarurat,
} from "@/constants/Types";

function kalkulatorDanaDarurat(
  input: InputKalkulatorDanaDarurat,
): OutputKalkulatorDanaDarurat {
  const {
    pengeluaranWajibPerBulan,
    sudahMenikah,
    jumlahTanggungan,
    targetLamaMengumpulkan,
    danaSaatIni,
    targetInvestasiPerBulan,
    returnInvestasi,
  } = input;
  const rInvestasi = returnInvestasi / 100 / 12;
  const n = targetLamaMengumpulkan;

  // Menghitung total uang yang dibutuhkan
  let totalUangDibutuhkan =
    pengeluaranWajibPerBulan * 6 * (1 + jumlahTanggungan);
  if (sudahMenikah) {
    totalUangDibutuhkan += pengeluaranWajibPerBulan * 3;
  }

  // Menghitung nilai akhir investasi
  let FV = danaSaatIni * Math.pow(1 + rInvestasi, n);
  for (let i = 1; i <= n; i++) {
    FV += targetInvestasiPerBulan * Math.pow(1 + rInvestasi, n - i);
  }

  const strategiCocok = FV >= totalUangDibutuhkan;
  const hasilInvestasi = FV;
  const totalPokokInvestasi = danaSaatIni + targetInvestasiPerBulan * n;
  const totalBungaInvestasi = hasilInvestasi - totalPokokInvestasi;
  const persentasePokokInvestasi = (totalPokokInvestasi / hasilInvestasi) * 100;
  const persentaseBungaInvestasi = (totalBungaInvestasi / hasilInvestasi) * 100;

  const breakdownInvestasi: BreakdownInvestasi = {
    totalPokokInvestasi,
    persentasePokokInvestasi,
    totalBungaInvestasi,
    persentaseBungaInvestasi,
  };

  let investasiKurang;
  let rekomendasiInvestasiPerBulan;
  let rekomendasiDurasiInvestasi;
  let rekomendasiBreakdownNominal: BreakdownInvestasi | undefined;
  let rekomendasiBreakdownDurasi: BreakdownInvestasi | undefined;
  let rekomendasiPilihanInvestasi: Investasi[];

  if (!strategiCocok) {
    investasiKurang = totalUangDibutuhkan - hasilInvestasi;

    // Cari investasi per bulan agar mencapai target
    rekomendasiInvestasiPerBulan = (totalUangDibutuhkan - FV) / n;

    // Breakdown nominal rekomendasi
    const totalPokokRekomendasiNominal =
      danaSaatIni + rekomendasiInvestasiPerBulan * n;
    const totalBungaRekomendasiNominal =
      totalUangDibutuhkan - totalPokokRekomendasiNominal;
    rekomendasiBreakdownNominal = {
      totalPokokInvestasi: totalPokokRekomendasiNominal,
      persentasePokokInvestasi:
        (totalPokokRekomendasiNominal / totalUangDibutuhkan) * 100,
      totalBungaInvestasi: totalBungaRekomendasiNominal,
      persentaseBungaInvestasi:
        (totalBungaRekomendasiNominal / totalUangDibutuhkan) * 100,
    };

    // Cari durasi investasi dengan nominal yang sama agar mencapai target
    let tempFV = danaSaatIni;
    let tempN = 0;
    while (tempFV < totalUangDibutuhkan) {
      tempN++;
      tempFV = danaSaatIni * Math.pow(1 + rInvestasi, tempN);
      for (let i = 1; i <= tempN; i++) {
        tempFV += targetInvestasiPerBulan * Math.pow(1 + rInvestasi, tempN - i);
      }
    }
    rekomendasiDurasiInvestasi = tempN;

    // Breakdown durasi rekomendasi
    const totalPokokRekomendasiDurasi =
      danaSaatIni + targetInvestasiPerBulan * rekomendasiDurasiInvestasi;
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

    rekomendasiPilihanInvestasi = pilihanInvestasi.filter(
      (inv) =>
        inv.returnTahunan >= returnInvestasi - 2 &&
        inv.returnTahunan <= returnInvestasi + 2,
    );
  } else {
    rekomendasiPilihanInvestasi = pilihanInvestasi.filter(
      (inv) =>
        inv.returnTahunan >= returnInvestasi - 2 &&
        inv.returnTahunan <= returnInvestasi + 2,
    );
  }

  return {
    strategiCocok,
    totalUangDibutuhkan,
    hasilInvestasi,
    breakdownInvestasi,
    investasiKurang,
    rekomendasiInvestasiPerBulan,
    rekomendasiDurasiInvestasi,
    rekomendasiBreakdownNominal,
    rekomendasiBreakdownDurasi,
    rekomendasiPilihanInvestasi,
  };
}

const inputContoh: InputKalkulatorDanaDarurat = {
  pengeluaranWajibPerBulan: 5_000_000, // Pengeluaran wajib per bulan 5 juta
  sudahMenikah: true, // Sudah menikah
  jumlahTanggungan: 1, // Jumlah tanggungan 1 orang
  targetLamaMengumpulkan: 12, // Target lama mengumpulkan 12 bulan
  danaSaatIni: 20_000_000, // Jumlah dana yang dimiliki saat ini 20 juta
  targetInvestasiPerBulan: 2_000_000, // Target investasi setiap bulan 2 juta
  returnInvestasi: 8, // Return investasi per tahun 8%
};

const hasil = kalkulatorDanaDarurat(inputContoh);

console.log("=========== NEW TEST CASE ==============");
console.log("Apakah strateginya cocok? ", hasil.strategiCocok ? "Ya" : "Tidak");
console.log("Total uang yang dibutuhkan: ", hasil.totalUangDibutuhkan);
console.log("Hasil investasi: ", hasil.hasilInvestasi);
console.log(
  "Breakdown total pokok investasi: ",
  hasil.breakdownInvestasi.totalPokokInvestasi,
);
console.log(
  "Persentase pokok investasi: ",
  hasil.breakdownInvestasi.persentasePokokInvestasi.toFixed(2),
  "%",
);
console.log(
  "Total bunga investasi: ",
  hasil.breakdownInvestasi.totalBungaInvestasi,
);
console.log(
  "Persentase bunga investasi: ",
  hasil.breakdownInvestasi.persentaseBungaInvestasi.toFixed(2),
  "%",
);

if (!hasil.strategiCocok) {
  console.log("Investasi kurang: ", hasil.investasiKurang);
  console.log(
    "Rekomendasi nominal investasi per bulan: ",
    hasil.rekomendasiInvestasiPerBulan,
  );
  console.log(
    "Rekomendasi breakdown pokok investasi (nominal): ",
    hasil.rekomendasiBreakdownNominal?.totalPokokInvestasi,
  );
  console.log(
    "Rekomendasi persentase pokok investasi (nominal): ",
    hasil.rekomendasiBreakdownNominal?.persentasePokokInvestasi.toFixed(2),
    "%",
  );
  console.log(
    "Rekomendasi total bunga investasi (nominal): ",
    hasil.rekomendasiBreakdownNominal?.totalBungaInvestasi,
  );
  console.log(
    "Rekomendasi persentase bunga investasi (nominal): ",
    hasil.rekomendasiBreakdownNominal?.persentaseBungaInvestasi.toFixed(2),
    "%",
  );
  console.log(
    "Rekomendasi durasi lama investasi (bulan): ",
    hasil.rekomendasiDurasiInvestasi,
  );
  console.log(
    "Rekomendasi breakdown pokok investasi (durasi): ",
    hasil.rekomendasiBreakdownDurasi?.totalPokokInvestasi,
  );
  console.log(
    "Rekomendasi persentase pokok investasi (durasi): ",
    hasil.rekomendasiBreakdownDurasi?.persentasePokokInvestasi.toFixed(2),
    "%",
  );
  console.log(
    "Rekomendasi total bunga investasi (durasi): ",
    hasil.rekomendasiBreakdownDurasi?.totalBungaInvestasi,
  );
  console.log(
    "Rekomendasi persentase bunga investasi (durasi): ",
    hasil.rekomendasiBreakdownDurasi?.persentaseBungaInvestasi.toFixed(2),
    "%",
  );
}

console.log("Rekomendasi pilihan investasi sesuai return:");
hasil.rekomendasiPilihanInvestasi.forEach((investasi) => {
  console.log(`- ${investasi.nama} (${investasi.returnTahunan}%)`);
});

export default kalkulatorDanaDarurat;
