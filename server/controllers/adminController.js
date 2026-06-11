import Product from "../models/admin/product.model.js";

export function adminDashboard(req, res) {
  res.json({ message: "Welcome to the admin dashboard!" });
}

export async function createProduct(req, res) {
  try {
    const { productName, price, description, category } = req.body;
    const productImage = req.file;

    if (!productName || !price || !category) {
      return res.status(400).json({ error: "productName, price, and category are required" });
    }

    const newProduct = new Product({
      productName,
      price,
      description,
      category,
      productImage: productImage ? productImage.path.replace(/\\/g, "/") : null,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product", details: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products", details: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { productName, price, description, category } = req.body;
    const productImage = req.file;

    const updateData = { productName, price, description, category };
    if (productImage) {
      updateData.productImage = productImage.path.replace(/\\/g, "/");
    }

    const updated = await Product.findByIdAndUpdate(id, updateData, { new: true });

    if (!updated) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully", product: updated });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Failed to update product", details: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: `Product deleted successfully` });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Failed to delete product", details: error.message });
  }
}
