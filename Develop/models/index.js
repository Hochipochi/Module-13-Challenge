// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categories_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: {
    model: 'ProductTag',
    key: 'id',
  },
}),

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: {
    model: 'ProductTag',
    key: 'id',
  },
}),

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
