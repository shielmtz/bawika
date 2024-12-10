'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        title: 'Tech Conference 2024',
        description: 'A conference about the latest in technology.',
        image_path: 'images/tech-conference-2024.jpg',
        start_date: new Date('2024-06-01T09:00:00Z'),
        end_date: new Date('2024-06-03T17:00:00Z'),
        status: 'Berakhir',
        createdBy: 1, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Art Expo 2024',
        description: 'An exhibition showcasing modern art.',
        image_path: 'images/art-expo-2024.jpg',
        start_date: new Date('2024-08-15T10:00:00Z'),
        end_date: new Date('2024-08-20T18:00:00Z'),
        status: 'Akan Datang',
        createdBy: 1, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        title: 'Music Festival 2024',
        description: 'A festival featuring various music genres.',
        image_path: 'images/music-festival-2024.jpg',
        start_date: new Date('2024-09-10T12:00:00Z'),
        end_date: new Date('2024-09-12T22:00:00Z'),
        status: 'Terbuka',
        createdBy: 1, // Pastikan ID ini sesuai dengan user di tabel Users
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};