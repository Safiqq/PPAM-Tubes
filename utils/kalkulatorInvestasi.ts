type InputInvestasi = {
  jumlahUangTarget: number;
  waktuMengumpulkanTahun: number;
  uangSaatIni: number;
  intervalTabungan: 'setiap bulan' | 'setiap tahun';
  waktuMenambahDana: 'awal bulan' | 'akhir bulan';
  targetInvestasiBulanan: number;
  returnInvestasiTahunan: number;
  durasiInvestasiTahun: number;
};

type OutputInvestasi = {
  uangSaatIni: number;
  jumlahInvestasiBulanan: number;
  lamaInvestasi: number;
  hasilInvestasi: number;
  kurangInvestasi: number;
  pokokInvestasi: number;
  bungaInvestasi: number;
  breakdown: {
    pokokInvestasiPersen: number;
    bungaInvestasiPersen: number;
  };
};

function kalkulatorInvestasi(input: InputInvestasi): OutputInvestasi {
  const {
    jumlahUangTarget,
    waktuMengumpulkanTahun,
    uangSaatIni,
    intervalTabungan,
    waktuMenambahDana,
    targetInvestasiBulanan,
    returnInvestasiTahunan,
    durasiInvestasiTahun
  } = input;

  const bulanDalamTahun = 12;
  const returnInvestasiBulanan = (returnInvestasiTahunan / 100) / bulanDalamTahun;
  const totalBulan = durasiInvestasiTahun * bulanDalamTahun;
  let saldo = uangSaatIni;
  let totalInvestasi = 0;
  let totalBunga = 0;

  for (let i = 0; i < totalBulan; i++) {
    if (intervalTabungan === 'setiap bulan') {
      saldo += targetInvestasiBulanan;
      totalInvestasi += targetInvestasiBulanan;

      const bunga = saldo * returnInvestasiBulanan;
      saldo += bunga;
      totalBunga += bunga;

      if (waktuMenambahDana === 'akhir bulan') {
        saldo += targetInvestasiBulanan;
        totalInvestasi += targetInvestasiBulanan;
      }
    }
  }

  const kurangInvestasi = jumlahUangTarget - saldo;
  const pokokInvestasiPersen = (totalInvestasi / saldo) * 100;
  const bungaInvestasiPersen = (totalBunga / saldo) * 100;

  return {
    uangSaatIni: uangSaatIni,
    jumlahInvestasiBulanan: targetInvestasiBulanan,
    lamaInvestasi: totalBulan,
    hasilInvestasi: saldo,
    kurangInvestasi: kurangInvestasi > 0 ? kurangInvestasi : 0,
    pokokInvestasi: totalInvestasi + uangSaatIni,
    bungaInvestasi: totalBunga,
    breakdown: {
      pokokInvestasiPersen: pokokInvestasiPersen,
      bungaInvestasiPersen: bungaInvestasiPersen
    }
  };
}

// Contoh penggunaan:
const masukan: InputInvestasi = {
  jumlahUangTarget: 100_000_000,
  waktuMengumpulkanTahun: 10,
  uangSaatIni: 500_000,
  intervalTabungan: 'setiap bulan', // atau 'setiap tahun'
  waktuMenambahDana: 'awal bulan', // atau 'akhir bulan'
  targetInvestasiBulanan: 5_000_000,
  returnInvestasiTahunan: 10,
  durasiInvestasiTahun: 10
};

const keluaran = kalkulatorInvestasi(masukan);
console.log(keluaran);