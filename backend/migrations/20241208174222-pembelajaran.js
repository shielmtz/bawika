"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tambahkan logika untuk membuat tabel
    await queryInterface.createTable("Pembelajarans", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      image_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pdf_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category_id: {
        type: Sequelize.INTEGER, // Ubah menjadi INTEGER
        allowNull: false,
        references: {
          model: 'Categories', // Pastikan tabel Categories sudah ada
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Pastikan tabel Users sudah ada
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true, // Gunakan NULLABLE untuk mendukung soft delete
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Pembelajarans");
  },
};
