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

const sql = `INSERT INTO people(name) values('Vinicius')`
connection.query(sql)
connection.end()

//connection.query("SELECT * FROM people", function (res) {
//  res.send(result)
//});

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
