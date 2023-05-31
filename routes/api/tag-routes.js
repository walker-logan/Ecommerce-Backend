const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await Tag.findAll({
      attributes: ["id", "tag_name"],
      include: {
        model: Product,
        through: ProductTag,
        as: 'products',
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        through: ProductTag,
        as: 'products',
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    });

    if (!data) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tag = await Tag.create({ tag_name: req.body.tag_name });
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json({ message: 'Tag updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.json({ message: 'Tag deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
