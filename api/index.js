import express from "express";
import productsRouter from "./routes/products.js";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productsRouter);
const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

