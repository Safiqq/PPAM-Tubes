type InputSimulasiKPR = {
    hargaPropertiImpian: number;
    persentaseDP: number;
    penghasilanBulanan: number;
    lamaKPRBulan: number;
    persenBungaFix: number;
    periodeBungaFixBulan: number;
    persenBungaFloating: number;
  };
  
  type OutputSimulasiKPR = {
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
  
  function hitungSimulasiKPR(input: InputSimulasiKPR): OutputSimulasiKPR {
    const {
      hargaPropertiImpian,
      persentaseDP,
      penghasilanBulanan,
      lamaKPRBulan,
      persenBungaFix,
      periodeBungaFixBulan,
      persenBungaFloating
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
      const angsuranPokok = (sisaPokokPinjaman * bungaBulananFix) / (1 - Math.pow(1 + bungaBulananFix, -periodeBungaFix + i));
      sisaPokokPinjaman -= (angsuranPokok - bunga);
    }
  
    // Hitung periode bunga floating
    for (let i = 0; i < periodeBungaFloating; i++) {
      const bunga = sisaPokokPinjaman * bungaBulananFloating;
      totalBungaPeriodeFloating += bunga;
      const angsuranPokok = (sisaPokokPinjaman * bungaBulananFloating) / (1 - Math.pow(1 + bungaBulananFloating, -periodeBungaFloating + i));
      sisaPokokPinjaman -= (angsuranPokok - bunga);
    }
  
    const totalBungaKPR = totalBungaPeriodeFix + totalBungaPeriodeFloating;
    const totalBungaKPRYangHarusDibayar = totalBungaKPR + pokokPinjaman;
  
    const rasioPembayaran = (totalBungaKPR / lamaKPRBulan) / penghasilanBulanan;
    const kategoriRasioPembayaran = rasioPembayaran > 0.3 ? "Berbahaya" : "Aman";
  
    return {
      totalBungaKPR,
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
      kategoriRasioPembayaran
    };
  }
  
  // Contoh penggunaan:
  const input: InputSimulasiKPR = {
    hargaPropertiImpian: 1000000000,
    persentaseDP: 20,
    penghasilanBulanan: 20000000,
    lamaKPRBulan: 240,
    persenBungaFix: 5,
    periodeBungaFixBulan: 60,
    persenBungaFloating: 7
  };
  
  const hasil = hitungSimulasiKPR(input);
  console.log(hasil);
  