const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Casual Wear', 
  },
  {
    tag_name: 'Sportswear', 
  },
  {
    tag_name: 'Office Supplies', 
  },
  {
    tag_name: 'Writing', 
  },
  {
    tag_name: 'Kitchen Appliances', 
  },
  {
    tag_name: 'Electronics', 
  },
  {
    tag_name: 'Entertainment', 
  },
  {
    tag_name: 'Music', 
  },
  {
    tag_name: 'Sports Shoes', 
  },
  {
    tag_name: 'Home Appliances', 
  },
  {
    tag_name: 'Comfort', 
  },
  {
    tag_name: 'Stylish', 
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
