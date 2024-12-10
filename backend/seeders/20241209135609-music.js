'use strict';

/** @type {import('sequelize-cli').SeedFunction} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Musics', [
      {
        title: 'Cublak Cublak Suweng',
        description: 'Cublak-cublak suweng. Suwengé ting gelèntèr. Mambu ketundung gudhèl. Pak empo lirak-lirik. Sopo ngguyu ndelikaké. Sir sir pong delé kopong. Sir sir pong delé kopong.',
        pencipta: 'Syekh Maulana Ainul Yakin',
        createdBy: 1,
        music_path: 'Cublak Cublak Suweng.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Melodi Pagi',
        description: 'Melodi yang cocok untuk membangkitkan semangat di pagi hari.',
        pencipta: 'Siska Amelia',
        createdBy: 1,
        music_path: 'Cublak Cublak Suweng.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Ritme Alam',
        description: 'Kombinasi suara alam dengan instrumen musik untuk relaksasi.',
        pencipta: 'Rama Wibawa',
        createdBy: 1,
        music_path: 'Cublak Cublak Suweng.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Musics', null, {});
  },
};
