export default class User {
    constructor({ id, role, name, alamat, no_handphone, email, image_path, createdAt, updatedAt, deletedAt }) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.image_path = image_path;
        this.alamat = alamat;
        this.no_handphone = no_handphone;
        this.email = email;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
        this.deletedAt = deletedAt ? new Date(deletedAt) : null; // Mengatur jika deletedAt ada
    }

    // Memformat tanggal seperti yang digunakan di `Category`
    getFormattedDate(date) {
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}
