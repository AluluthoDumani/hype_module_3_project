import express from "express";
import {
    getAllProductImagesCon,
    getSingleProductImageCon,
    insertProductImageCon,
    removeProductImageCon,
    editProductImageCon
} from "../controller/imageCon.js";

const router = express.Router();

// Route to get all product images
router.get("/", getAllProductImagesCon);

// Route to get a single product image by ID
router.get("/:product_images_id", getSingleProductImageCon);

// Route to insert a new product image
router.post("/", insertProductImageCon);

// Route to edit an existing product image
router.put("/:product_images_id", editProductImageCon);

// Route to delete a product image by ID
router.delete("/:product_images_id", removeProductImageCon);

export default router;
