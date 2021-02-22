const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123456',
    database:'crud_simples_filmes'
})

connection.connect(function(err) {
    if(err){
        console.error('Erro ao tentar se conectar ao Banco de dados: '+ err.stack);
        return;
    }
    
  console.log('Conexão realizada com sucesso ao Banco de Dados');
});
module.exports = connection;