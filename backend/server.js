const app = require('./src/app');
const data = require('./src/data');

const port = process.env.NODE_PORT || 3000;
const dataName = process.env.DATA || 'LuizaCep';

app.listen(port, () => {
    console.log(`Servidor rodando na porta ===> ${port}`);
});

if (data.conect(dataName)) {
    console.log("Conexão ao MongoDB realizada com Sucesso!");
} else {
    console.log('Erro ao conectar MongoDB');
}