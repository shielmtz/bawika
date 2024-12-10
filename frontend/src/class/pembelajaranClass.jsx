export default class Pembelajaran {
    constructor({ id, title, description, image_path, category_id, pdf_link, createdBy, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imagePath = image_path;
        this.pdf_link = pdf_link;
        this.categoryId = category_id;
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
    }

    // Optional: Add methods to handle or format data if needed
    getFormattedDate(date) {
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    getDescriptionPreview(limit = 100) {
        return this.description.length > limit
            ? this.description.substring(0, limit) + "..."
            : this.description;
    }

    getImageUrl(basePath = "/images/pembelajaran/") {
        return `${basePath}${this.imagePath}`;
    }
}
