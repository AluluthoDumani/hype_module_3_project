// Importing from SQL functions from the model
import { 
    getAllProductImages, 
    getSingleProductImage, 
    insertProductImage, 
    removeProductImage, 
    editProductImage 
} from "../model/images.js";

// Controller to fetch all product images
export const getAllProductImagesCon = async (req, res) => {
    try {
        res.json({ ProductImages: await getAllProductImages() });
    } catch (error) {
        console.error('Error fetching product images:', error);
        res.json({ error: 'An error occurred while fetching product images' });
    }
};

// Controller to fetch a single product image by ID
export const getSingleProductImageCon = async (req, res) => {
    try {
        res.json({ ProductImage: await getSingleProductImage(req.params.product_images_id) });
    } catch (error) {
        console.error('Error fetching a product image:', error);
        res.json({ error: 'An error occurred while fetching the product image' });
    }
};

// Controller to insert a new product image
export const insertProductImageCon = async (req, res) => {
    const { product_id, URLs } = req.body;
    try {
        res.json({ NewProductImage: await insertProductImage(product_id, URLs) });
    } catch (error) {
        console.error('Error inserting product image:', error);
        res.json({ error: 'An error occurred while inserting the product image' });
    }
};

// Controller to edit an existing product image
export const editProductImageCon = async (req, res) => {
    const { product_images_id, product_id, URLs } = req.body;
    try {
        res.json({ EditedProductImage: await editProductImage(product_images_id, product_id, URLs) });
    } catch (error) {
        console.error('Error editing product image:', error);
        res.json({ error: 'An error occurred while editing the product image' });
    }
};

// Controller to remove a product image
export const removeProductImageCon = async (req, res) => {
    try {
        res.json({ DeletedProductImage: await removeProductImage(req.params.product_images_id) });
    } catch (error) {
        console.error('Error deleting product image:', error);
        res.json({ error: 'An error occurred while deleting the product image' });
    }
};
