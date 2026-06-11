import Product from "../models/admin/product.model.js";

// const products = [
//   {
//     id: 1,
//     name: "Pink Saree",
//     image:
//       "https://dailybuyys.com/cdn/shop/products/TSI_7191.jpg",
//     price: 8499,
//   },
//   {
//     id: 2,
//     name: "Blue Shirts",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mKhgpttNl9RElHvlt732ePXYvbhCmdoGdw&s",
//     price: 5500,
//   },
//   {
//     id: 3,
//     name: "Rayon Sarongs",
//     image: "https://www.kandygshandlooms.com/cdn/shop/files/8_11.png?v=1717430182&width=1445",
//     price: 7000,
//   },
// ];

const getProducts = async (req, res) => {
  const loggedInUser = req.user;

  const products = await Product.find();

  res.json({
    products,
    user: loggedInUser,
    message: "single user Products retrieved successfully",
  });
};

export default getProducts;