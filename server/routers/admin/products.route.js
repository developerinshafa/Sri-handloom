import express from "express";
import { createProduct, deleteProduct, getProducts, getProductById, updateProduct } from "#controllers/adminController";
import authMiddleware from "#middleware/auth.js";
import { requireAdmin } from "#middleware/admin.js";
import multer from "multer";
import path from "path";

const multerstorage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
      
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: multerstorage,
  
  limits: { fileSize: 5 * 1024 * 1024 },
});

const router = express.Router();

router.use(authMiddleware, requireAdmin);

// products // http://localhost:3000/api/admin/manage-products
router.post("/products", upload.single("productImage"), createProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", upload.single("productImage"), updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;