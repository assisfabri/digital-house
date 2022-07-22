const express = require('express');
const PORT = 3000;
let products = require('./products')

const app = express();

app.use(express.json());

// - GET para verificar os que foram mantidos.
app.get('/products', (_req, res) => {
    return res.status(200).json(products);
});

// - POST para adicionar 4 produtos, de uma vez.
app.post('/products', (req, res) => {
    const content = req.body;
    
    const newProducts = [...products, ...content];
    
    return res.status(200).json(newProducts);
});

// - PUT para modificar um desses produtos.
app.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const content = req.body;
    
    const product = products.find((product) => product.id === id);
    
    if(!product) return res.status(400).json({message: "Produto não encontrado"});
    
    products = products.map((product) => product.id === id ? content : product);
    
    return res.status(200).json(products);
});

// - DELETE para deletar um desses produtos.
app.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    
    const product = products.find((product) => product.id === id);
    
    if(!product) return res.status(400).json({message: "Produto não encontrado"});
    
    products = products.filter((product) => product.id !== id);
    
    return res.status(200).json(products);
});

app.listen(PORT, () => {
    console.log(`Server is runing in ${PORT}`);
});