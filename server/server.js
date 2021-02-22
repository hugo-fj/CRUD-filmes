const express = require('express');
const porta  = 5000;
const server = express();
const cors = require('cors');
const bodyParser =require('body-parser')
const connection = require('./database/database');

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(cors());


/*server.get('/',function(req,res){
    const sqlInsert = "INSERT INTO filmes_reviews (nome,review) VALUES('Monster Hunter','Baseado no jogo da Capcom chamado Monster Hunter, a tenente Artemis e seus soldados são transportados para um novo mundo.')"
    connection.query(sqlInsert,(err,resul)=>{
        res.send('Inserção realizada com sucesso')
    })
    
});*/

server.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT * FROM filmes_reviews";
    connection.query(sqlSelect,(err,result)=>{
        res.send(result);
        });    
    });

server.post('/api/inserir', (req,res)=>{
    const nome = req.body.nome;
    const review = req.body.review;
    const sqlInsert = "INSERT INTO filmes_reviews (nome,review) VALUES(?,?)";
    connection.query(sqlInsert,[nome,review],(err,result)=>{
        console.log(result);
    })    
});


server.listen(porta,function(){
    console.log(`Aplicação sendo executado em http://localhost:${porta}`)
});

module.exports = server;