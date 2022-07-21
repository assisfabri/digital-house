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
    
    // 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos
    // existentes.
    const productsModified = products.push({name: 'PS5', price: 4600, quantity: 30, colors: ['white']});

    console.log(products);

    // 2. Remova os produtos fora de estoque da matriz.
    const productsOutOfStock = products.filter((product) => product.quantity === 0);

    console.log(productsOutOfStock);

    // 3. Imprima no console a soma do estoque de todos os produtos.
    const sumAllProductsQty = products.reduce((acc, product) => acc + product.quantity, 0);

    console.log(sumAllProductsQty);

    // 4. Imprima produtos com preço superior a um determinado valor.
    function printProductsWithPriceHigherThen(value) {
        const productsWithPriceHigherThen = products.filter((product)=> product.price > value);

        return productsWithPriceHigherThen;
    }

    console.log(printProductsWithPriceHigherThen(500));

    // 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.
    const printAllProductsWithO = products.filter((product) => product.name.includes('o'));

