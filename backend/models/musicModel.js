const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./userModel");

const Music = sequelize.define(
    "Musics",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        pencipta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        music_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
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

module.exports = Music;
