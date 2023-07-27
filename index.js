const express = require('express');
const app = express();

const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World')
});

/*
LISTA DE ENDPOINTS DA APLICAÇÃO: CRUD de mensagens

-[GET] /mensagens (Retorna a lista de mensagens)
-[GET] /mensagens/{id} (Retorna apenas uma única mensagem pelo ID)
-[POST] /mensagens (Cria uma nova mensagem)
-[PUT] /mensagens/{id} (Atualiza uma mensagem pelo ID)
-[DELETE] /mensagens/{id} (Remove uma mensagem pelo ID)
*/

const mensagens = [
    "Primeira informação",
    "Segunda informação"
];

//-[GET] /mensagens (Retorna a lista de mensagens)
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});

//-[GET] /mensagens/{id} (Retorna apenas uma única mensagem pelo ID)
app.get('/mensagens/:id', (req, res) =>{
    const id = req.params.id - 1;

    const mensagem = mensagens[id];
    res.send(mensagem);
});

app.listen(port, () => {
console.log(`Aplicativo rodando em http://localhost:${port}`);
});