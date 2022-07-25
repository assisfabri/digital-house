const express = require('express');
const router = express.Router();
let products = require('../products');

// 1. Retornar todos os produtos da array. “/api/products”,
router.get('/', (_req, res) => {
  return res.status(200).json(products);
});

// 2. Obter um produto específico pelo ID “/api/products /: id”
router.get('/:id', (req, res) => {
  const id = +req.params.id;

  const product = products.find((product) => product.id === id);

  if (!product) return res.status(400).json({ message: "Produto não encontrado" });

  return res.status(200).json(product);
});

// 3. Adicionar um novo produto “/api/products”,
router.post('/', (req, res) => {
  const content = req.body;

  const newProducts = [...products, content];

  return res.status(200).json(newProducts);
});

// 4. Mudar uma propriedade do produto(qualquer uma) “/api/products /: id”,
router.put('/:id', (req, res) => {
  const id = +req.params.id;
  const content = req.body;

  const product = products.find((product) => product.id === id);

  if (!product) return res.status(400).json({ message: "Produto não encontrado" });

  products = products.map((product) => product.id === id ? content : product);

  return res.status(200).json(products);
});

// 5. Deletar um produto utilizando o ID “/api/products /: id”.
router.delete('/:id', (req, res) => {
  const id = +req.params.id;

  const product = products.find((product) => product.id === id);

  if (!product) return res.status(400).json({ message: "Produto não encontrado" });

  products = products.filter((product) => product.id !== id);

  return res.status(200).json(products);
});

module.exports = router;
