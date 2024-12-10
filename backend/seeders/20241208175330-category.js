'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed data awal untuk tabel Categories
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Adat Istiadat',
        createdBy: 1, // Mengacu pada pengguna dengan ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Bahasa Jawa',
        createdBy: 1, // Mengacu pada pengguna dengan ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Pakaian Adat',
        createdBy: 1, // Mengacu pada pengguna dengan ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Tari & Kesenian',
        createdBy: 1, // Mengacu pada pengguna dengan ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Aksara Jawa',
        createdBy: 1, // Mengacu pada pengguna dengan ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus data yang sudah disiapkan saat seeding
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
