const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./userModel");

const Category = sequelize.define(
    "categories",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            unique: true,  // Menambahkan aturan unik pada kolom name
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,  // Merujuk ke tabel Users di database
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

module.exports = Category;
