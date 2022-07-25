const express = require('express');
const router = express.Router();
let users = require('../users');

// Vamos criar um CRUD com os seguintes endpoints que, usando o Postman, nos
// permitam:
// Criar uma rota ‘/api/users’ que permita criar, ler, deletar e atualizar informações dos usuários.
// Os usuário devem ter a propriedade username, email e password.

// Crie um endpoint que use o método:

// Bônus
// Pesquise sobre o método PATCH e faça um endpoint que permita atualizar APENAS a senha
// do usuário.

// - GET para verificar a lista de usuários.
router.get('/', (_req, res) => {
  return res.status(200).json(users);
});

// - POST para adicionar um usuário seguindo as propriedades citadas.
router.post('/', (req, res) => {
  const content = req.body;
  
  const newUser = [...users, content];
  
  return res.status(200).json(newUser);
});

// - PUT para modificar informações de um usuário.
router.put('/:id', (req, res) => {
  const id = +req.params.id;
  const content = req.body;
  
  const user = users.find((user) => user.id === id);
  
  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });
  
  users = users.map((user) => user.id === id ? content : user);
  
  return res.status(200).json(users);
});

// - DELETE para deletar um usuário.
router.delete('/:id', (req, res) => {
  const id = +req.params.id;
  
  const user = users.find((user) => user.id === id);

  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

  users = users.filter((user) => user.id !== id);

  return res.status(200).json(users);
});

// 2. Obter um usuário específico pelo ID “/api/users /: id”
router.patch('/:id', (req, res) => {
  const id = +req.params.id;
  const { password } = req.body;
  
  const user = users.find((user) => user.id === id);
  
  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

  const newUser = { ...user, password };
  
  return res.status(200).json(newUser);
});


module.exports = router;
