const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./userModel");

const Dongeng = sequelize.define(
    "Dongengs",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
        },
        video_link: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'URL for YouTube video',
        },
        thumbnail_link: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'URL of thumbnail (e.g., from YouTube)',
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

module.exports = Dongeng;
