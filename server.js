import "dotenv/config";
import app from "./src/app.js";

const PORT = 1890;
app.listen( PORT, ()=>{
    console.log("Servidor iniciado com sucesso")
})