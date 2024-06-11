import { InputSimulasiKPR, OutputSimulasiKPR } from "@/constants/Types";

function hitungPeriodeBungaFloating(
  lamaKPRBulan: number,
  periodeBungaFix: number,
): number {
  return (lamaKPRBulan = periodeBungaFix);
}

function hitungSimulasiKPR(input: InputSimulasiKPR): OutputSimulasiKPR {
  const {
    hargaPropertiImpian,
    persentaseDP,
    penghasilanBulanan,
    lamaKPRBulan,
    persenBungaFix,
    periodeBungaFixBulan,
    persenBungaFloating,
  } = input;

  const dp = (hargaPropertiImpian * persentaseDP) / 100;
  const pokokPinjaman = hargaPropertiImpian - dp;

  const bungaBulananFix = persenBungaFix / 100 / 12;
  const bungaBulananFloating = persenBungaFloating / 100 / 12;

  const periodeBungaFix = periodeBungaFixBulan;
  const periodeBungaFloating = lamaKPRBulan - periodeBungaFix;

  let sisaPokokPinjaman = pokokPinjaman;
  let totalBungaPeriodeFix = 0;
  let totalBungaPeriodeFloating = 0;

  // Hitung periode bunga fix
  for (let i = 0; i < periodeBungaFix; i++) {
    const bunga = sisaPokokPinjaman * bungaBulananFix;
    totalBungaPeriodeFix += bunga;
    const angsuranPokok =
      (sisaPokokPinjaman * bungaBulananFix) /
      (1 - Math.pow(1 + bungaBulananFix, -periodeBungaFix + i));
    sisaPokokPinjaman -= angsuranPokok - bunga;
  }

  // Hitung periode bunga floating
  for (let i = 0; i < periodeBungaFloating; i++) {
    const bunga = sisaPokokPinjaman * bungaBulananFloating;
    totalBungaPeriodeFloating += bunga;
    const angsuranPokok =
      (sisaPokokPinjaman * bungaBulananFloating) /
      (1 - Math.pow(1 + bungaBulananFloating, -periodeBungaFloating + i));
    sisaPokokPinjaman -= angsuranPokok - bunga;
  }

  const totalBungaKPR = totalBungaPeriodeFix + totalBungaPeriodeFloating;
  const totalBungaKPRYangHarusDibayar = totalBungaKPR + pokokPinjaman;

  const rasioPembayaran = totalBungaKPR / lamaKPRBulan / penghasilanBulanan;
  const kategoriRasioPembayaran = rasioPembayaran > 0.3 ? "Berbahaya" : "Aman";

  const biayaAJB = 0.01 * hargaPropertiImpian;
  const biayaBalikNama = 0.01 * hargaPropertiImpian;
  const biayaNotaris =
    ((hargaPropertiImpian <= 100_000_000
      ? 2.5
      : hargaPropertiImpian <= 1_000_000_000
        ? 1.5
        : 1) /
      100) *
    hargaPropertiImpian;
  const appraisal = 1_000_000;
  const administrasi = 1_000_000;
  const provinsi = 0.007 * hargaPropertiImpian;
  const biayaBank = appraisal + administrasi + provinsi;
  const totalBiayaLain = biayaAJB + biayaBalikNama + biayaNotaris + biayaBank;

  return {
    periodeBungaFloating,
    pokokPinjaman,
    jumlahPeriode: lamaKPRBulan,
    bungaFix: persenBungaFix,
    totalBungaPeriodeFix,
    bungaFloating: persenBungaFloating,
    totalBungaPeriodeFloating,
    totalHasilBungaDariPokokPinjaman: totalBungaKPR,
    sisaPokokPinjamanSetelahPeriodeFix: sisaPokokPinjaman,
    totalBungaKPRYangHarusDibayar,
    kategoriRasioPembayaran,
    totalBiayaLain,
    biayaAJB,
    biayaBalikNama,
    biayaNotaris,
    biayaBank,
    appraisal,
    administrasi,
    provinsi,
  };
}

// Contoh penggunaan:
// const input: InputSimulasiKPR = {
//   hargaPropertiImpian: 1000000000,
//   persentaseDP: 20,
//   penghasilanBulanan: 20000000,
//   lamaKPRBulan: 240,
//   persenBungaFix: 5,
//   periodeBungaFixBulan: 60,
//   persenBungaFloating: 7,
// };

// const hasil = hitungSimulasiKPR(input);
// console.log(hasil);

export default hitungSimulasiKPR;
