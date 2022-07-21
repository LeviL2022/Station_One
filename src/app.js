import express from 'express'
import db from '../config/db.connect.js'
import routes from '../routes/index.js'

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server run in port ${port}`)
});

export default app;

