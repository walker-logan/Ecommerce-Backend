const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 3, 
  },
  {
    product_name: 'Running Sneakers',
    price: 90.00,
    stock: 25,
    category_id: 3, 
  },
  {
    product_name: 'Ballpoint Pens',
    price: 4.99,
    stock: 100,
    category_id: 5, 
  },
  {
    product_name: 'Microwave Oven',
    price: 100.00,
    stock: 20,
    category_id: 4, 
  },
  {
    product_name: '28-Inch Monitor',
    price: 350.00,
    stock: 15,
    category_id: 1, 
  },
  {
    product_name: 'Black Office Chair',
    price: 85.00,
    stock: 40,
    category_id: 5, 
  },
  {
    product_name: 'Stainless Steel Fridge',
    price: 800.00,
    stock: 10,
    category_id: 4, 
  },
  {
    product_name: 'Air Jordans',
    price: 125.00,
    stock: 20,
    category_id: 3, 
  },
  {
    product_name: 'Smart TV',
    price: 300.00,
    stock: 20,
    category_id: 1, 
  },
  {
    product_name: 'Acoustic Guitar',
    price: 200.00,
    stock: 15,
    category_id: 1, 
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
