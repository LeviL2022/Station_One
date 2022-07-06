import express from 'express'
import { dbConnection } from '../config/db.connect.js'
import routes from '../routes/index.js'

dbConnection.connect();

// db.("error", console.log.bind(console, "Erro de conexão"))
// db.once("open", () => {
//     console.log("Conexão com o banco feita com sucesso")
// })

const app = express();
app.use(express.json());
routes(app);

app.once()

export default app;