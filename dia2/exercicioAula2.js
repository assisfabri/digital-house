let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]
    
    // Usando a array acima, crie uma função para cada um dos seguintes requisitos:
    
    // 1. Adicione um ID exclusivo a cada produto começando em 1.
    const productsWithId = products.map((product, index) => {
        product['id'] = index + 1;
        return product;
    });

    console.log(productsWithId);

    // 2. Imprima o nome de cada um dos produtos no console.
    const logProduct = products.map((product) => console.log(product));

    // 3. Imprima no console o produto com o id 3.
    console.log(products[2]);

    // 4. Imprima no console os produtos com a cor “black”.
    const printColorBlackProducts = products.filter((product) => product.colors.includes('black'));
    console.log(printColorBlackProducts);

    // 5. Imprima no console os produtos que não possuem cor.
    const printProductsWithoutColor = products.filter((product) => product.colors.length === 0);
    console.log(printProductsWithoutColor);



