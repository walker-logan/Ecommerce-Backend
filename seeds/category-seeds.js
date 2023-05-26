const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Kitchen',
  },
  {
    category_name: 'Office Supplies',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
