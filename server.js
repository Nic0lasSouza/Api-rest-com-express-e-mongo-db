import "dotenv/config";
import app from "./src/app.js";

const PORT = 1900;
app.listen( PORT, ()=>{
    console.log("Servidor iniciado com sucesso")
})