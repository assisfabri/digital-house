const calculaPreco = (produto, preco) => {
    let envio;
    if (preco > 1 && preco <= 2000) {
        envio = 300;
    } else if (preco <= 4000) {
        envio = 450;
    } else {
        envio = 700;
    }

    console.log(`O produto ${produto} custa ${preco}. Seu custo de envio é
    ${envio}. Portanto, o preço final é `)
};


console.log(calculaPreco('Macbook', 2500));