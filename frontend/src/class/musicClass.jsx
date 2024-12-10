export default class Music {
    constructor({ id, title, description, pencipta, music_path, image_path, createdBy, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.pencipta = pencipta;
        this.musicPath = music_path;
        this.imagePath = image_path;
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
    }

    // Optional: Metode untuk memformat tanggal
    getFormattedDate(date) {
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    // Metode untuk mengembalikan URL musik
    getMusicUrl(basePath = "/musics/") {
        return `${basePath}${this.musicPath}`;
    }

    // Metode untuk mengembalikan URL gambar
    getImageUrl(basePath = "/images/musics/") {
        return `${basePath}${this.imagePath}`;
    }

    // Mengembalikan ringkasan deskripsi dengan panjang tertentu
    getDescriptionPreview(limit = 100) {
        return this.description.length > limit
            ? this.description.substring(0, limit) + "..."
            : this.description;
    }
}
