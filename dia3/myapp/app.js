const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello wolrd!')
});

app.listen(PORT, () => {
    console.log(`Server is runing in ${PORT}`);
});