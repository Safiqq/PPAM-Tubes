import { pilihanInvestasi, Investasi } from './modelPilihanInvestasi'; // Asumsi pilihanInvestasi berada di file terpisah

interface InputKalkulatorProperti {
    tahunMimpi: number;
    hargaProperti: number;
    persenDP: number;
    inflasiProperti: number;
    danaSaatIni: number;
    targetInvestasiPerBulan: number;
    returnInvestasi: number; // return tahunan dalam persen
}

interface BreakdownInvestasi {
    totalPokokInvestasi: number;
    persentasePokokInvestasi: number;
    totalBungaInvestasi: number;
    persentaseBungaInvestasi: number;
}

interface OutputKalkulatorProperti {
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
}

function hitungDP(hargaProperti: number, persenDP: number): number {
    return hargaProperti * (persenDP / 100);
}

function hitungKPR(hargaProperti: number, dpProperti: number): number {
    return hargaProperti - dpProperti;
}

function kalkulatorDPProperti(input: InputKalkulatorProperti): OutputKalkulatorProperti {
    const { tahunMimpi, hargaProperti, persenDP, inflasiProperti, danaSaatIni, targetInvestasiPerBulan, returnInvestasi } = input;
    const n = tahunMimpi * 12; // jumlah bulan
    const rInflasi = inflasiProperti / 100;
    const rInvestasi = returnInvestasi / 100 / 12;
    
    // Menghitung harga properti dengan inflasi
    const hargaPropertiInflasi = hargaProperti * Math.pow((1 + rInflasi), tahunMimpi);

    // Menghitung DP dan KPR
    const dpProperti = hitungDP(hargaPropertiInflasi, persenDP);
    const kprProperti = hitungKPR(hargaPropertiInflasi, dpProperti);
    const persenKPR = (kprProperti / hargaPropertiInflasi) * 100;

    // Menghitung total uang yang dibutuhkan (DP yang diinginkan)
    const totalUangDibutuhkan = dpProperti;

    // Menghitung nilai akhir investasi
    let FV = danaSaatIni * Math.pow((1 + rInvestasi), n);
    for (let i = 1; i <= n; i++) {
        FV += targetInvestasiPerBulan * Math.pow((1 + rInvestasi), (n - i));
    }

    const strategiCocok = FV >= totalUangDibutuhkan;
    const hasilInvestasi = FV;
    const totalPokokInvestasi = danaSaatIni + (targetInvestasiPerBulan * n);
    const totalBungaInvestasi = hasilInvestasi - totalPokokInvestasi;
    const persentasePokokInvestasi = (totalPokokInvestasi / hasilInvestasi) * 100;
    const persentaseBungaInvestasi = (totalBungaInvestasi / hasilInvestasi) * 100;

    const breakdownInvestasi: BreakdownInvestasi = {
        totalPokokInvestasi,
        persentasePokokInvestasi,
        totalBungaInvestasi,
        persentaseBungaInvestasi
    };

    let investasiKurang;
    let rekomendasiInvestasiPerBulan;
    let rekomendasiDurasiInvestasi;
    let rekomendasiBreakdownNominal: BreakdownInvestasi | undefined;
    let rekomendasiBreakdownDurasi: BreakdownInvestasi | undefined;
    let rekomendasiReturnBaru: number | undefined;
    let rekomendasiBreakdownReturnBaru: BreakdownInvestasi | undefined;
    let rekomendasiPilihanInvestasi: Investasi[];

    if (!strategiCocok) {
        investasiKurang = totalUangDibutuhkan - hasilInvestasi;

        // Cari investasi per bulan agar mencapai target
        rekomendasiInvestasiPerBulan = (totalUangDibutuhkan - FV) / n;

        // Breakdown nominal rekomendasi
        const totalPokokRekomendasiNominal = danaSaatIni + (rekomendasiInvestasiPerBulan * n);
        const totalBungaRekomendasiNominal = totalUangDibutuhkan - totalPokokRekomendasiNominal;
        rekomendasiBreakdownNominal = {
            totalPokokInvestasi: totalPokokRekomendasiNominal,
            persentasePokokInvestasi: (totalPokokRekomendasiNominal / totalUangDibutuhkan) * 100,
            totalBungaInvestasi: totalBungaRekomendasiNominal,
            persentaseBungaInvestasi: (totalBungaRekomendasiNominal / totalUangDibutuhkan) * 100
        };

        // Cari durasi investasi dengan nominal yang sama agar mencapai target
        let tempFV = danaSaatIni;
        let tempN = 0;
        while (tempFV < totalUangDibutuhkan) {
            tempN++;
            tempFV = danaSaatIni * Math.pow((1 + rInvestasi), tempN);
            for (let i = 1; i <= tempN; i++) {
                tempFV += targetInvestasiPerBulan * Math.pow((1 + rInvestasi), (tempN - i));
            }
        }
        rekomendasiDurasiInvestasi = tempN;

        // Breakdown durasi rekomendasi
        const totalPokokRekomendasiDurasi = danaSaatIni + (targetInvestasiPerBulan * rekomendasiDurasiInvestasi);
        const totalBungaRekomendasiDurasi = totalUangDibutuhkan - totalPokokRekomendasiDurasi;
        rekomendasiBreakdownDurasi = {
            totalPokokInvestasi: totalPokokRekomendasiDurasi,
            persentasePokokInvestasi: (totalPokokRekomendasiDurasi / totalUangDibutuhkan) * 100,
            totalBungaInvestasi: totalBungaRekomendasiDurasi,
            persentaseBungaInvestasi: (totalBungaRekomendasiDurasi / totalUangDibutuhkan) * 100
        };

        // Cari return investasi baru agar mencapai target
        let tempReturnInvestasi = returnInvestasi;
        let tempFVReturn = danaSaatIni * Math.pow((1 + tempReturnInvestasi / 100 / 12), n);
        while (tempFVReturn < totalUangDibutuhkan) {
            tempReturnInvestasi += 0.1; // Increment return investasi
            tempFVReturn = danaSaatIni * Math.pow((1 + tempReturnInvestasi / 100 / 12), n);
            for (let i = 1; i <= n; i++) {
                tempFVReturn += targetInvestasiPerBulan * Math.pow((1 + tempReturnInvestasi / 100 / 12), (n - i));
            }
        }
        rekomendasiReturnBaru = tempReturnInvestasi;

        // Breakdown return baru
        const totalPokokRekomendasiReturnBaru = danaSaatIni + (targetInvestasiPerBulan * n);
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
            inv.returnTahunan >= returnInvestasi - 2 && inv.returnTahunan <= returnInvestasi + 2);
    }

    return {
        strategiCocok,
        totalUangDibutuhkan,
        hasilInvestasi,
        breakdownInvestasi,
        dpProperti,
        kprProperti,
        persenKPR,
        investasiKurang,
        rekomendasiInvestasiPerBulan,
        rekomendasiDurasiInvestasi,
        rekomendasiBreakdownNominal,
        rekomendasiBreakdownDurasi,
        rekomendasiReturnBaru,
        rekomendasiBreakdownReturnBaru,
        rekomendasiPilihanInvestasi
    };
}

const inputContoh: InputKalkulatorProperti = {
    tahunMimpi: 5, // Ingin mencapai mimpi dalam 5 tahun
    hargaProperti: 500_000_000, // Harga properti impian 500 juta
    persenDP: 20, // DP yang diinginkan 20%
    inflasiProperti: 5, // Asumsi inflasi properti 5%
    danaSaatIni: 50_000_000, // Jumlah dana yang dimiliki saat ini 50 juta
    targetInvestasiPerBulan: 5_000_000, // Target investasi setiap bulan 5 juta
    returnInvestasi: 10 // Return investasi per tahun 10%
};

const hasil = kalkulatorDPProperti(inputContoh);

console.log("=========== NEW TEST CASE ==============");
console.log("Apakah strateginya cocok? ", hasil.strategiCocok ? "Ya" : "Tidak");
console.log("Total uang yang dibutuhkan: ", hasil.totalUangDibutuhkan);
console.log("Hasil investasi: ", hasil.hasilInvestasi);
console.log("Breakdown total pokok investasi: ", hasil.breakdownInvestasi.totalPokokInvestasi);
console.log("Persentase pokok investasi: ", hasil.breakdownInvestasi.persentasePokokInvestasi.toFixed(2), "%");
console.log("Total bunga investasi: ", hasil.breakdownInvestasi.totalBungaInvestasi);
console.log("Persentase bunga investasi: ", hasil.breakdownInvestasi.persentaseBungaInvestasi.toFixed(2), "%");
console.log("DP Properti: ", hasil.dpProperti);
console.log("KPR Properti: ", hasil.kprProperti);
console.log("Persentase KPR: ", hasil.persenKPR.toFixed(2), "%");

if (!hasil.strategiCocok) {
    console.log("Investasi kurang: ", hasil.investasiKurang);
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
