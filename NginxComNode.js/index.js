const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

//const sql = `INSERT INTO people(name) values('Vinicius')`
//connection.query(sql)
//connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

const sql2 = `SELECT * FROM people`
connection.query(sql2, function (err, result, fields) {
  Object.keys(result).forEach(function(key) {
      var row = result[key];
      res.send(row.name)
    });
})
connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
