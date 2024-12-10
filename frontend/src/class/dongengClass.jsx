export default class Dongeng {
    constructor({ id, title, description, video_link, thumbnail_link, createdBy, updatedAt, createdAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.videoLink = video_link;
        this.thumbnailLink = thumbnail_link;
        this.createdBy = createdBy;
        this.updatedAt = new Date(updatedAt);
        this.createdAt = new Date(createdAt);
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
}