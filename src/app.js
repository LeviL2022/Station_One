import express from 'express'
import { dbConnection } from '../config/db.connect.js'
import routes from '../routes/index.js'


dbConnection.connect();

const port = process.env.PORT || 3000;

// db.("error", console.log.bind(console, "Erro de conexão"))
// db.once("open", () => {
//     console.log("Conexão com o banco feita com sucesso")
// })

const app = express();
app.use(express.json());
routes(app);

app.listen(port, () => {
    console.log(`Server run in port ${port}`)
});



export default app;