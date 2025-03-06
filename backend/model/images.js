// Import connection
import { pool } from '../config/config.js';

// Getting all product images
export const getAllProductImages = async () => {
  try {
    const [data] = await pool.query(`
      SELECT 
        pi.product_id,
        MIN(pi.URLs) AS image_url  -- Ensure 'url' matches your DB column
      FROM 
        product_images pi
      GROUP BY 
        pi.product_id
    `); // Removed incorrect semicolon inside backticks

    return data;
  } catch (error) {
    console.error('Error fetching product images:', error);
    throw error;
  }
};



// Getting a single product image by ID
export const getSingleProductImage = async (product_images_id) => {
  try {
    const [data] = await pool.query(
      'SELECT * FROM product_images WHERE product_images_id = ?', 
      [product_images_id]
    );
    return data;
  } catch (error) {
    console.error('Error fetching a product image:', error);
    throw error;
  }
};

// Adding a new product image
export const insertProductImage = async (product_id, URLs) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO product_images (product_id, URLs) VALUES (?, ?)',
      [product_id, URLs]
    );
    console.log('Product image added successfully');
    return result.insertId; // Return the ID of the newly inserted product image
  } catch (error) {
    console.error('Error adding product image:', error);
    throw error;
  }
};

// Removing a product image by ID
export const removeProductImage = async (product_images_id) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM product_images WHERE product_images_id = ?', 
      [product_images_id]
    );
    console.log('Product image deleted successfully');
    return result.affectedRows; // Return the number of rows affected
  } catch (error) {
    console.error('Error removing product image:', error);
    throw error;
  }
};

// Editing a product image by ID
export const editProductImage = async (product_images_id, product_id, URLs) => {
  try {
    const [result] = await pool.query(
      'UPDATE product_images SET product_id = ?, URLs = ? WHERE product_images_id = ?',
      [product_id, URLs, product_images_id]
    );
    console.log('Product image edited successfully');
    return result.affectedRows; // Return the number of rows affected
  } catch (error) {
    console.error('Error editing product image:', error);
    throw error;
  }
};

// Searching for product images by URLs (case-insensitive)
export const searchProductImages = async (query) => {
  try {
    const [data] = await pool.query(
      'SELECT * FROM product_images WHERE URLs LIKE ?',
      [`%${query}%`]
    );
    return data;
  } catch (error) {
    console.error('Error searching product images:', error);
    throw error;
  }
};
