import express from "express";
import LivroController from "../controllers/livroControler.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros)