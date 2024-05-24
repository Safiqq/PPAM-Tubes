import { pilihanInvestasi, Investasi } from "./modelPilihanInvestasi";

interface InputKalkulatorPensiun {
    pengeluaranPerBulan: number;
    usiaSekarang: number;
    usiaPensiun: number;
    asumsiInflasiTahunan: number;
    danaPensiunSaatIni: number;
    targetInvestasiPerBulan: number;
    targetReturnInvestasi: number; // return tahunan dalam persen
}

interface BreakdownInvestasi {
    totalPokokInvestasi: number;
    persentasePokokInvestasi: number;
    totalBungaInvestasi: number;
    persentaseBungaInvestasi: number;
}

interface OutputKalkulatorPensiun {
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
}

function kalkulatorDanaPensiun(input: InputKalkulatorPensiun): OutputKalkulatorPensiun {
    const { pengeluaranPerBulan, usiaSekarang, usiaPensiun, asumsiInflasiTahunan, danaPensiunSaatIni, targetInvestasiPerBulan, targetReturnInvestasi } = input;
    const n = (usiaPensiun - usiaSekarang) * 12; // jumlah bulan hingga pensiun
    const rInflasi = asumsiInflasiTahunan / 100;
    const rInvestasi = targetReturnInvestasi / 100 / 12;
    
    // Menghitung total uang yang dibutuhkan dengan inflasi
    const totalPengeluaranTahunan = pengeluaranPerBulan * 12;
    const totalUangDibutuhkan = totalPengeluaranTahunan * Math.pow((1 + rInflasi), usiaPensiun - usiaSekarang) * (usiaPensiun - usiaSekarang);

    // Menghitung nilai akhir investasi
    let FV = danaPensiunSaatIni * Math.pow((1 + rInvestasi), n);
    for (let i = 1; i <= n; i++) {
        FV += targetInvestasiPerBulan * Math.pow((1 + rInvestasi), (n - i));
    }

    const strategiCocok = FV >= totalUangDibutuhkan;
    const hasilInvestasi = FV;
    const totalPokokInvestasi = danaPensiunSaatIni + (targetInvestasiPerBulan * n);
    const totalBungaInvestasi = hasilInvestasi - totalPokokInvestasi;
    const persentasePokokInvestasi = (totalPokokInvestasi / hasilInvestasi) * 100;
    const persentaseBungaInvestasi = (totalBungaInvestasi / hasilInvestasi) * 100;

    const breakdownInvestasi: BreakdownInvestasi = {
        totalPokokInvestasi,
        persentasePokokInvestasi,
        totalBungaInvestasi,
        persentaseBungaInvestasi
    };

    let rekomendasiInvestasiPerBulan;
    let rekomendasiDurasiInvestasi;
    let rekomendasiBreakdownNominal: BreakdownInvestasi | undefined;
    let rekomendasiBreakdownDurasi: BreakdownInvestasi | undefined;
    let rekomendasiReturnBaru: any;
    let rekomendasiBreakdownReturnBaru: BreakdownInvestasi | undefined;
    let rekomendasiPilihanInvestasi: Investasi[];

    if (!strategiCocok) {
        // Cari investasi per bulan agar mencapai target
        rekomendasiInvestasiPerBulan = (totalUangDibutuhkan - FV) / n;

        // Breakdown nominal rekomendasi
        const totalPokokRekomendasiNominal = danaPensiunSaatIni + (rekomendasiInvestasiPerBulan * n);
        const totalBungaRekomendasiNominal = totalUangDibutuhkan - totalPokokRekomendasiNominal;
        rekomendasiBreakdownNominal = {
            totalPokokInvestasi: totalPokokRekomendasiNominal,
            persentasePokokInvestasi: (totalPokokRekomendasiNominal / totalUangDibutuhkan) * 100,
            totalBungaInvestasi: totalBungaRekomendasiNominal,
            persentaseBungaInvestasi: (totalBungaRekomendasiNominal / totalUangDibutuhkan) * 100
        };

        // Cari durasi investasi dengan nominal yang sama agar mencapai target
        let tempFV = danaPensiunSaatIni;
        let tempN = 0;
        while (tempFV < totalUangDibutuhkan) {
            tempN++;
            tempFV = danaPensiunSaatIni * Math.pow((1 + rInvestasi), tempN);
            for (let i = 1; i <= tempN; i++) {
                tempFV += targetInvestasiPerBulan * Math.pow((1 + rInvestasi), (tempN - i));
            }
        }
        rekomendasiDurasiInvestasi = tempN;

        // Breakdown durasi rekomendasi
        const totalPokokRekomendasiDurasi = danaPensiunSaatIni + (targetInvestasiPerBulan * rekomendasiDurasiInvestasi);
        const totalBungaRekomendasiDurasi = totalUangDibutuhkan - totalPokokRekomendasiDurasi;
        rekomendasiBreakdownDurasi = {
            totalPokokInvestasi: totalPokokRekomendasiDurasi,
            persentasePokokInvestasi: (totalPokokRekomendasiDurasi / totalUangDibutuhkan) * 100,
            totalBungaInvestasi: totalBungaRekomendasiDurasi,
            persentaseBungaInvestasi: (totalBungaRekomendasiDurasi / totalUangDibutuhkan) * 100
        };

        // Cari return investasi baru agar mencapai target
        let tempReturnInvestasi = targetReturnInvestasi;
        let tempFVReturn = danaPensiunSaatIni * Math.pow((1 + tempReturnInvestasi / 100 / 12), n);
        while (tempFVReturn < totalUangDibutuhkan) {
            tempReturnInvestasi += 0.1; // Increment return investasi
            tempFVReturn = danaPensiunSaatIni * Math.pow((1 + tempReturnInvestasi / 100 / 12), n);
            for (let i = 1; i <= n; i++) {
                tempFVReturn += targetInvestasiPerBulan * Math.pow((1 + tempReturnInvestasi / 100 / 12), (n - i));
            }
        }
        rekomendasiReturnBaru = tempReturnInvestasi;

        // Breakdown return baru
        const totalPokokRekomendasiReturnBaru = danaPensiunSaatIni + (targetInvestasiPerBulan * n);
        const totalBungaRekomendasiReturnBaru = totalUangDibutuhkan - totalPokokRekomendasiReturnBaru;
        rekomendasiBreakdownReturnBaru = {
            totalPokokInvestasi: totalPokokRekomendasiReturnBaru,
            persentasePokokInvestasi: (totalPokokRekomendasiReturnBaru / totalUangDibutuhkan) * 100,
            totalBungaInvestasi: totalBungaRekomendasiReturnBaru,
            persentaseBungaInvestasi: (totalBungaRekomendasiReturnBaru / totalUangDibutuhkan) * 100
        };

        rekomendasiPilihanInvestasi = pilihanInvestasi.filter(inv =>
            inv.returnTahunan >= rekomendasiReturnBaru - 2 && inv.returnTahunan <= rekomendasiReturnBaru + 2);
    } else {
        rekomendasiPilihanInvestasi = pilihanInvestasi.filter(inv =>
            inv.returnTahunan >= targetReturnInvestasi - 2 && inv.returnTahunan <= targetReturnInvestasi + 2);
    }

    return {
        strategiCocok,
        totalUangDibutuhkan,
        hasilInvestasi,
        breakdownInvestasi,
        rekomendasiInvestasiPerBulan,
        rekomendasiDurasiInvestasi,
        rekomendasiBreakdownNominal,
        rekomendasiBreakdownDurasi,
        rekomendasiReturnBaru,
        rekomendasiBreakdownReturnBaru,
        rekomendasiPilihanInvestasi
    };
}

const inputContoh: InputKalkulatorPensiun = {
    pengeluaranPerBulan: 10_000_000, // Pengeluaran per bulan 10 juta
    usiaSekarang: 30, // Usia sekarang 30 tahun
    usiaPensiun: 60, // Pensiun di usia 60 tahun
    asumsiInflasiTahunan: 5, // Asumsi inflasi tahunan 5%
    danaPensiunSaatIni: 100_000_000, // Dana pensiun yang tersedia saat ini 100 juta
    targetInvestasiPerBulan: 3_000_000, // Target nominal investasi setiap bulan 3 juta
    targetReturnInvestasi: 10 // Target return investasi per tahun 10%
};

const hasil = kalkulatorDanaPensiun(inputContoh);

console.log("=========== NEW TEST CASE ==============");
console.log("Apakah strateginya cocok? ", hasil.strategiCocok ? "Ya" : "Tidak");
console.log("Total uang yang dibutuhkan: ", hasil.totalUangDibutuhkan);
console.log("Hasil investasi: ", hasil.hasilInvestasi);
console.log("Breakdown total pokok investasi: ", hasil.breakdownInvestasi.totalPokokInvestasi);
console.log("Persentase pokok investasi: ", hasil.breakdownInvestasi.persentasePokokInvestasi.toFixed(2), "%");
console.log("Total bunga investasi: ", hasil.breakdownInvestasi.totalBungaInvestasi);
console.log("Persentase bunga investasi: ", hasil.breakdownInvestasi.persentaseBungaInvestasi.toFixed(2), "%");

if (!hasil.strategiCocok) {
    console.log("Rekomendasi nominal investasi per bulan: ", hasil.rekomendasiInvestasiPerBulan);
    console.log("Rekomendasi breakdown pokok investasi (nominal): ", hasil.rekomendasiBreakdownNominal?.totalPokokInvestasi);
    console.log("Rekomendasi persentase pokok investasi (nominal): ", hasil.rekomendasiBreakdownNominal?.persentasePokokInvestasi.toFixed(2), "%");
    console.log("Rekomendasi total bunga investasi (nominal): ", hasil.rekomendasiBreakdownNominal?.totalBungaInvestasi);
    console.log("Rekomendasi persentase bunga investasi (nominal): ", hasil.rekomendasiBreakdownNominal?.persentaseBungaInvestasi.toFixed(2), "%");
    console.log("Rekomendasi durasi lama investasi (bulan): ", hasil.rekomendasiDurasiInvestasi);
    console.log("Rekomendasi breakdown pokok investasi (durasi): ", hasil.rekomendasiBreakdownDurasi?.totalPokokInvestasi);
    console.log("Rekomendasi persentase pokok investasi (durasi): ", hasil.rekomendasiBreakdownDurasi?.persentasePokokInvestasi.toFixed(2), "%");
    console.log("Rekomendasi total bunga investasi (durasi): ", hasil.rekomendasiBreakdownDurasi?.totalBungaInvestasi);
    console.log("Rekomendasi persentase bunga investasi (durasi): ", hasil.rekomendasiBreakdownDurasi?.persentaseBungaInvestasi.toFixed(2), "%");
    console.log("Rekomendasi return baru: ", hasil.rekomendasiReturnBaru);
    console.log("Rekomendasi breakdown pokok investasi (return baru): ", hasil.rekomendasiBreakdownReturnBaru?.totalPokokInvestasi);
    console.log("Rekomendasi persentase pokok investasi (return baru): ", hasil.rekomendasiBreakdownReturnBaru?.persentasePokokInvestasi.toFixed(2), "%");
    console.log("Rekomendasi total bunga investasi (return baru): ", hasil.rekomendasiBreakdownReturnBaru?.totalBungaInvestasi);
    console.log("Rekomendasi persentase bunga investasi (return baru): ", hasil.rekomendasiBreakdownReturnBaru?.persentaseBungaInvestasi.toFixed(2), "%");
}

console.log("Rekomendasi pilihan investasi sesuai return:");
hasil.rekomendasiPilihanInvestasi.forEach(investasi => {
    console.log(`- ${investasi.nama} (${investasi.returnTahunan}%)`);
});