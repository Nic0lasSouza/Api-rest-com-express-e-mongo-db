import express from "express";
import conectDatabase from "./config/dbconect.js";
import routes from "./routes/index.js";

const conexao = await conectDatabase();
conexao.on("error", (erro)=> {
    console.error("Erro de conexão", erro)
});

conexao.once("open", ()=>{
    console.log("Conexão do banco feita com sucesso")
})
const app = express();
routes(app)

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/", (req, res) =>{
    livros.push(req.body);
    
})

app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    livros[index].autor = req.body.autor;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("Livro deletedo com sucesso");
})

export default app;
