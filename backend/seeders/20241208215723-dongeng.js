'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Ambil data kategori dari tabel 'Categories'
    await queryInterface.bulkInsert('Dongengs', [
      {
        title: 'Sangkuriang',
        description: 'Dahulu kala, di tanah Parahyangan, hiduplah seorang pemuda bernama Sangkuriang. Ia adalah anak seorang perempuan cantik bernama Dayang Sumbi. Sejak kecil, Sangkuriang diasuh oleh ibunya dengan penuh kasih sayang, namun ia tumbuh menjadi anak yang nakal dan keras kepala. Suatu hari, ia membuat kesalahan besar dengan membunuh Tumang, anjing kesayangan Dayang Sumbi yang sebenarnya adalah penjaga sekaligus ayah Sangkuriang dalam wujud binatang. Ketika mengetahui perbuatan itu, Dayang Sumbi sangat marah dan mengusir Sangkuriang dari rumah.\n\nBertahun-tahun kemudian, Sangkuriang tumbuh menjadi pemuda gagah dan pemberani. Dalam pengembaraannya, ia tanpa sengaja bertemu dengan Dayang Sumbi yang masih awet muda berkat kekuatan dewa. Tanpa mengenali bahwa perempuan itu adalah ibunya, Sangkuriang jatuh cinta dan berniat menikahinya. Namun, Dayang Sumbi akhirnya menyadari bahwa pemuda itu adalah anaknya. Untuk menggagalkan pernikahan, ia memberikan syarat yang mustahil: Sangkuriang harus membuat sebuah perahu besar dan danau dalam satu malam.',
        createdBy: 1,
        video_link: "https://www.youtube.com/embed/LY9CniwEvNU",
        thumbnail_link: "https://youtu.be/LY9CniwEvNU",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: "Bawang Merah dan Bawang Putih",
        description: 'Di sebuah desa kecil, hiduplah dua gadis bersaudara yang bernama Bawang Merah dan Bawang Putih. Mereka tinggal bersama ibu tiri yang sangat memanjakan Bawang Merah, anak kandungnya, tetapi sering memperlakukan Bawang Putih dengan kasar. Bawang Putih harus melakukan semua pekerjaan rumah, sementara Bawang Merah hanya bermalas-malasan. Meski begitu, Bawang Putih tetap sabar dan ikhlas menjalani kehidupannya. Ia dikenal baik hati oleh semua orang di desa, berbeda dengan Bawang Merah yang angkuh dan suka merendahkan orang lain.\n\nSuatu hari, Bawang Putih menemukan sebutir labu aneh ketika mencuci pakaian di sungai. Saat membukanya di rumah, ia terkejut karena di dalamnya terdapat perhiasan dan emas. Namun, ibu tiri dan Bawang Merah merasa iri. Mereka mendesak Bawang Putih untuk menceritakan dari mana ia mendapatkan labu tersebut. Setelah tahu asalnya, Bawang Merah pun pergi ke sungai dengan harapan mendapatkan lebih banyak harta. Namun, ia sengaja bersikap sombong kepada orang tua yang membutuhkan pertolongan di sepanjang jalan. Karena sikap buruknya, labu yang ia bawa pulang justru berisi ular dan duri.',
        createdBy: 1,
        video_link: "https://www.youtube.com/embed/Gg18Mb-YA-A",
        thumbnail_link: "https://youtu.be/Gg18Mb-YA-A",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: "Timun Mas dan Raksasa\n",
        description: "Timun Mas adalah kisah rakyat Jawa yang menceritakan seorang perempuan tua bernama Mbok Srini yang sangat merindukan kehadiran seorang anak. Suatu hari, Mbok Srini bertemu dengan raksasa jahat yang memberinya biji timun ajaib, dengan janji bahwa jika tanaman itu berbuah, Mbok Srini akan memiliki seorang anak, namun anak itu harus diserahkan kepada raksasa ketika berusia 17 tahun. Mbok Srini menanam biji tersebut, dan suatu hari, tumbuhlah timun besar yang saat dibelah, di dalamnya terdapat seorang bayi perempuan cantik yang ia namakan Timun Mas.\n\nWaktu berlalu, dan Timun Mas tumbuh menjadi gadis yang baik dan cantik. Namun, Mbok Srini sangat khawatir karena janji kepada raksasa semakin dekat. Mengetahui ancaman ini, Mbok Srini meminta bantuan seorang pertapa sakti di gunung. Pertapa itu memberi Timun Mas empat bungkusan berisi benda-benda ajaib untuk melindungi dirinya dari raksasa ketika saatnya tiba. Ketika raksasa datang menagih janjinya, Timun Mas melarikan diri, menggunakan benda-benda ajaib seperti biji mentimun, jarum, garam, dan terasi untuk menghambat raksasa yang mengejarnya.",
        createdBy: 1,
        video_link: "https://www.youtube.com/embed/Gbpb69UI5UI",
        thumbnail_link: "https://youtu.be/Gbpb69UI5UI",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua data dari tabel Pebelajarans
    await queryInterface.bulkDelete('Dongengs', null, {});
  },
};
