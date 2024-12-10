const { Category } = require('../../associations'); // Pastikan relasi sudah diatur

// **Create Category**
const createCategory = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const { name } = req.body;

        // Validasi input
        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Buat kategori baru
        const newCategory = await Category.create({
            name,
            createdBy: userId,
        });

        res.status(201).json({ message: 'Category created successfully', category: newCategory });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Failed to create category', error: error.message });
    }
};

// **Get All Categories**
const getCategories = async (req, res) => {
    try {
        // Ambil semua kategori
        const categories = await Category.findAll({
            attributes: ['id', 'name', 'createdBy', 'createdAt', 'updatedAt'],
            order: [['createdAt', 'DESC']],
        });

        res.status(200).json({ categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve categories', error: error.message });
    }
};

// **Get Category by ID**
const getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id; // ID kategori dari URL params

        // Cari kategori berdasarkan ID
        const category = await Category.findOne({
            where: { id: categoryId },
            attributes: ['id', 'name', 'createdBy', 'createdAt', 'updatedAt'],
        });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ category });
    } catch (error) {
        console.error('Error retrieving category:', error);
        res.status(500).json({ message: 'Failed to retrieve category', error: error.message });
    }
};

// **Update Category**
const updateCategory = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const categoryId = req.params.id; // ID kategori dari URL params
        const { name } = req.body;

        // Cari kategori berdasarkan ID dan validasi createdBy
        const category = await Category.findOne({ where: { id: categoryId, createdBy: userId } });

        if (!category) {
            return res.status(404).json({ message: 'Category not found or you are not authorized to update this category' });
        }

        // Update nama kategori jika ada
        if (name) category.name = name;

        // Simpan perubahan
        await category.save();

        res.status(200).json({ message: 'Category updated successfully', category });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Failed to update category', error: error.message });
    }
};

// **Delete Category**
const deleteCategory = async (req, res) => {
    try {
        const userId = req.userId; // ID pengguna yang sedang login
        const categoryId = req.params.id; // ID kategori dari URL params

        // Cari kategori berdasarkan ID dan validasi createdBy
        const category = await Category.findOne({ where: { id: categoryId, createdBy: userId } });

        if (!category) {
            return res.status(404).json({ message: 'Category not found or you are not authorized to delete this category' });
        }

        // Soft delete dengan mengisi kolom deletedAt
        category.deletedAt = new Date();
        await category.save();

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Failed to delete category', error: error.message });
    }
};

module.exports = { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };