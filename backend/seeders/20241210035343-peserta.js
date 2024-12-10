'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pesertas', [
      {
        name: 'John Doe',
        ttl: '1990-05-15',
        alamat: '123 Main Street, City A',
        no_handphone: '081234567890',
        email: 'johndoe@example.com',
        event_id: 1, // Pastikan ID ini sesuai dengan event di tabel Events
        image_path: 'images/john-doe.jpg',
        createdBy: 2, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Jane Smith',
        ttl: '1985-09-25',
        alamat: '456 Elm Street, City B',
        no_handphone: '081298765432',
        email: 'janesmith@example.com',
        event_id: 2, // Pastikan ID ini sesuai dengan event di tabel Events
        image_path: 'images/jane-smith.jpg',
        createdBy: 2, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        name: 'Alice Johnson',
        ttl: '1995-12-10',
        alamat: '789 Oak Avenue, City C',
        no_handphone: '081345678901',
        email: 'alicejohnson@example.com',
        event_id: 1, // Pastikan ID ini sesuai dengan event di tabel Events
        image_path: 'images/alice-johnson.jpg',
        createdBy: 2, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pesertas', null, {});
  }
};
