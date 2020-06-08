const express = require("express")
const server = express()

//pegar o banco de dados*
//const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req body na nossa aplicação*
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da minha aplicação
// pagina inicial
// req: requisiçao
//res: resposta
server.get("/", (req, res) => {
   return res.render("indexEdna.html", { title: "Estudantes do Naza,\n geral conectado!"})
})
////ligar o servidor
server.listen(3000)