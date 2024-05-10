import { autor } from "../models/Autores.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na resquisição`})
        }
    };

    static async listarLivroPorId (req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na resquisição do livro`})
        }
    };

    static async cadastrarLivro (req, res){
        const novoLivro = req.body;

        try{
            const autorEcontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor: { ...autorEcontrado._doc }}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro})
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro` })
        }
    }

    static async atualizarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro Atualizado"});
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na atualização do livro`})
        }
    };

    static async deletarLivro (req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Livro Deletado com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha em deletar o livro`})
        }
    };
};

export default LivroController;