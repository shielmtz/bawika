export default class Event {
    constructor({
        id,
        title,
        description,
        image_path,
        start_date,
        end_date,
        status,
        createdBy,
        createdAt,
        updatedAt,
        pesertas = []
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imagePath = image_path;
        this.startDate = new Date(start_date);
        this.endDate = new Date(end_date);
        this.status = status;
        this.createdBy = createdBy;
        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
        this.pesertas = pesertas.map((peserta) => new Peserta(peserta));
    }

    // Get formatted start date
    getFormattedStartDate() {
        return this.startDate.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    // Get formatted end date
    getFormattedEndDate() {
        return this.endDate.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    // Get description preview with a default limit of 100 characters
    getDescriptionPreview(limit = 100) {
        return this.description.length > limit
            ? this.description.substring(0, limit) + "..."
            : this.description;
    }

    // Get event duration in days
    getEventDuration() {
        const diffTime = Math.abs(this.endDate - this.startDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Check if the event has participants
    hasParticipants() {
        return this.pesertas.length > 0;
    }
}

class Peserta {
    constructor({ id, name, ttl, image_path, alamat, no_handphone, email }) {
        this.id = id;
        this.name = name;
        this.ttl = (ttl);
        this.imagePath = image_path;
        this.alamat = alamat;
        this.noHandphone = no_handphone;
        this.email = email;
    }

    // Get formatted birth date
    getFormattedBirthDate() {
        return this.ttl.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}
