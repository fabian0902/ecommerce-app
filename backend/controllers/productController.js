const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Otros controladores según necesidad (crear producto, actualizar, eliminar, etc.)

module.exports = {
  getAllProducts
};
