import {autor} from "../models/Autores.js";
class AutorController {

    static async listarAutores (req, res){
        try{
            const listaAutores= await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na resquisição`})
        }
    };

    static async listarAutorPorId (req, res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na resquisição do livro`})
        }
    };

    static async cadastrarAutor (req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoAutor})
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro` })
        }
    }

    static async atualizarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor Atualizado"});
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha na atualização do livro`})
        }
    };

    static async deletarAutor (req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor Deletado com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message}-falha em deletar o autor`})
        }
    };
};

export default AutorController;