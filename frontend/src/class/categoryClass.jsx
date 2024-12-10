export default class Category {
    constructor({ id, name, createdBy, createdAt, updatedAt }) {
        this.id = id;
        this.name = name;
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
    }

    getFormattedDate(date) {
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}
