const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./categoryModel");
const User = require("./userModel");

const Pembelajaran = sequelize.define(
    "Pembelajarans",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pdf_link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        category_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: Category, // Pastikan tabel Users sudah ada
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Pastikan tabel Users sudah ada
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
        paranoid: true, // Enables soft deletes
        deletedAt: "deletedAt",
    }
);

module.exports = Pembelajaran;
