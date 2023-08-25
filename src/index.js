import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/RenatoNC2/11-API-Introdu-o.git",
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});
