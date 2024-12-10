'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dongengs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
      },
      video_link: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'URL for YouTube video',
      },
      thumbnail_link: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'URL of thumbnail (e.g., from YouTube)',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',  // Merujuk ke tabel Users di database
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,  // Menambahkan nilai default untuk createdAt
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,  // Menambahkan nilai default untuk updatedAt
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,  // Kolom deletedAt untuk soft delete
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dongengs');
  }
};
