import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`O aplicativo estar rodando na porta ${PORT}`);
});
