import express from "express";
import conectDatabase from "./config/dbconect.js";
import livro from "./models/Livro.js";

const conexao = await conectDatabase();
conexao.on("error", (erro)=> {
    console.error("Erro de conexão", erro)
});

conexao.once("open", ()=>{
    console.log("Conexão do banco feita com sucesso")
})
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", async(req, res)=> {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
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

// mongodb+srv://admin:admin123@cluster0.z1anr6u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
