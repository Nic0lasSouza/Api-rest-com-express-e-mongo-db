import express from "express";
const app = express();

app.use(express.json());
const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien'
    },
    {
        id: 2,
        titulo: 'Fundação',
        autor: 'Isaac Asimov'
    },
    {
        id: 3,
        titulo: 'Duna',
        autor: 'Frank Herbert'
    }
]

function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res)=> {
    res.status(200).json(livros);
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

export default app;