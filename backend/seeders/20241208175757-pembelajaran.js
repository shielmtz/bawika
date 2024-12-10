'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Ambil data kategori dari tabel 'Categories'
    await queryInterface.bulkInsert('Pembelajarans', [
      {
        title: 'Upacara Mantenan',
        description: 'Upacara mantenan merupakan rangkaian tradisi dalam pernikahan yang sarat dengan nilai budaya dan makna filosofis. Di berbagai daerah di Indonesia, upacara mantenan memiliki variasi yang berbeda sesuai adat setempat, seperti adat Jawa, Sunda, Minang, hingga Bugis. Namun, secara umum, upacara ini melambangkan penyatuan dua insan sekaligus dua keluarga yang diikat dalam perjanjian suci pernikahan. Prosesi ini biasanya dipenuhi simbol-simbol yang menunjukkan harapan, doa, dan rasa syukur atas perjalanan hidup baru pasangan pengantin.',
        createdBy: 1,
        image_path: 'mantenan.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Ruwetan',
        description: 'Ruwetan adalah salah satu tradisi Jawa yang memiliki tujuan utama untuk membersihkan diri, baik secara lahir maupun batin. Upacara ini biasanya dilakukan sebagai bentuk permohonan keselamatan, kelancaran, dan perlindungan dalam menghadapi suatu peristiwa besar atau fase baru dalam kehidupan. Ruwetan sering kali diadakan pada momen-momen tertentu, seperti pindah rumah, memulai usaha, hingga sebelum acara pernikahan. Tradisi ini mengandung doa dan harapan agar segala halangan atau kesulitan dapat dijauhkan, sehingga hidup menjadi lebih tertata dan terarah.',
        createdBy: 1,
        image_path: 'mantenan.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Selametan',
        description: 'Selametan adalah tradisi budaya Indonesia yang bertujuan untuk mengungkapkan rasa syukur sekaligus memohon keberkahan dan keselamatan kepada Tuhan. Tradisi ini dilakukan oleh berbagai kalangan, baik dalam konteks pribadi, keluarga, maupun masyarakat. Selametan biasanya diadakan untuk menandai peristiwa penting seperti kelahiran, pernikahan, pindah rumah, hingga peringatan kematian. Dengan suasana yang sederhana namun sarat makna, tradisi ini mencerminkan rasa kebersamaan dan solidaritas dalam masyarakat. Ritual selametan biasanya melibatkan acara doa bersama yang dipimpin oleh tokoh agama atau orang yang dituakan, diikuti dengan pembagian makanan kepada para tamu.Tumpeng, nasi kuning berbentuk kerucut yang dikelilingi berbagai lauk- pauk, sering menjadi simbol utama dalam selametan, melambangkan harapan akan kehidupan yang harmonis dan sejahtera.Dalam beberapa tradisi, makanan yang disajikan memiliki makna khusus, seperti jenang yang melambangkan harapan akan rezeki yang terus mengalir.Selain makanan, acara ini juga menjadi momen untuk mempererat hubungan antaranggota masyarakat melalui suasana penuh kekeluargaan. Selametan tidak hanya memiliki nilai spiritual, tetapi juga mengajarkan pentingnya rasa syukur dan kebersamaan.Dalam kehidupan modern, meskipun bentuk dan pelaksanaannya mungkin mengalami penyesuaian, inti dari tradisi ini tetap relevan sebagai sarana untuk menyatukan hati, mempererat hubungan sosial, dan menjaga harmoni.Dengan mempertahankan tradisi selametan, masyarakat Indonesia melestarikan warisan budaya yang menghubungkan nilai spiritual dengan kehidupan sehari - hari.',
        createdBy: 1,
        image_path: 'mantenan.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Bahasa Jawa Ngoko',
        description: 'Bahasa Jawa Ngoko adalah salah satu tingkatan bahasa Jawa yang digunakan dalam percakapan sehari- hari, terutama di antara teman sebaya, anggota keluarga yang lebih muda, atau orang yang memiliki hubungan akrab.Ragam ini dikenal karena kesederhanaannya dibandingkan dengan tingkatan bahasa Jawa lainnya seperti krama dan krama inggil.Ngoko sering menjadi pintu awal bagi seseorang yang belajar bahasa Jawa karena kosakatanya yang relatif mudah dan tidak terlalu formal.',
        createdBy: 1,
        image_path: 'ungahunguhbasa.png',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Bahasa Krama',
        description: 'Bahasa Jawa krama adalah tingkatan bahasa Jawa yang digunakan untuk menunjukkan rasa hormat dan kesopanan dalam komunikasi. Berbeda dengan ngoko yang lebih santai, krama memiliki struktur dan kosakata yang lebih formal, sehingga sering digunakan saat berbicara dengan orang yang lebih tua, tokoh masyarakat, atau orang yang baru dikenal. Dalam budaya Jawa, penggunaan krama mencerminkan tata krama dan budi pekerti yang menjadi bagian tak terpisahkan dari nilai-nilai kehidupan sehari-hari.',
        createdBy: 1,
        image_path: 'ungahunguhbasa.png',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua data dari tabel Pebelajarans
    await queryInterface.bulkDelete('Pembelajarans', null, {});
  },
};
