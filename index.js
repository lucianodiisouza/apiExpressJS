let expressjs = require("express");
let aplicacao = expressjs();
aplicacao.listen(8989);
console.log("Server is Running!");

// ServerSide Code
let dados = [];

dados = [{
        name: "Luciano",
        age: 28,
        position: "Software Developer",
        country: "Brasil"
    },
    {
        name: "Camila",
        age: 24,
        position: "Teacher",
        country: "Brasil"
    }
]

aplicacao.get("/", urlInvalido);
aplicacao.get("/api", loadApi);

function urlInvalido(req, res) {
    res.send("<script>alert('Url Inválida!')</script>");
}

function loadApi(req, res) {
    res.send(dados);
}