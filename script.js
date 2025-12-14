document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form melakukan submit standar (reload halaman)

        // Ambil nilai input
        const weightKg = parseFloat(document.getElementById('weight').value);
        const heightCm = parseFloat(document.getElementById('height').value);

        // Validasi input
        if (isNaN(weightKg) || isNaN(heightCm) || weightKg <= 0 || heightCm <= 0) {
            resultDiv.innerHTML = '<p style="color: red;">⚠️ Mohon masukkan nilai berat dan tinggi yang valid.</p>';
            return;
        }

        // Konversi tinggi dari cm ke meter (Tinggi dalam Meter = Tinggi dalam cm / 100)
        const heightM = heightCm / 100;

        // Hitung IMT: Berat (kg) / Tinggi^2 (m^2)
        const bmi = weightKg / (heightM * heightM);

        // Tentukan kategori IMT
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Kurang Berat Badan';
            color = 'orange';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Berat Badan Normal';
            color = 'green';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = 'Kelebihan Berat Badan';
            color = 'darkorange';
        } else {
            category = 'Obesitas';
            color = 'red';
        }

        // Tampilkan hasil
        resultDiv.innerHTML = `
            <p>IMT Anda: <strong>${bmi.toFixed(2)}</strong></p>
            <p>Kategori: <strong style="color: ${color};">${category}</strong></p>
            <p style="font-size: 0.9em; color: #6c757d;">(Ini hanyalah perhitungan dasar. Konsultasikan dengan profesional kesehatan.)</p>
        `;
    });
});
