const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=> {
    res.send('Olá, Mundo! Que dia mais lindo!');
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});