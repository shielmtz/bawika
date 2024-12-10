import React from "react";

const PremiumInfo = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-900">
        Akses Premium untuk Materi Pembelajaran Bahasa & Budaya Jawa
      </h2>
      <ul className="text-2xl list-disc pl-6 text-gray-900 mb-4">
        <li>
          Konten pembelajaran mendalam yang hanya tersedia untuk anggota premium
        </li>
        <li>
          Metode belajar lebih terstruktur untuk pemahaman yang lebih baik
        </li>
        <li>
          Akses tanpa batas ke semua materi pelajaran kapan saja, di mana saja
        </li>
        <li>Lebih hemat dengan memilih paket bulanan atau tahunan</li>
      </ul>
      <p className="text-gray-900 text-2xl">
        Tingkatkan kemampuan bahasa dan pemahaman budaya Jawa secara maksimal.
        Upgrade ke premium sekarang dan mulailah belajar dengan cara yang lebih
        efektif!
      </p>
    </div>
  );
};

export default PremiumInfo;
