import mongoose from 'mongoose'

const filmesSchemma = new mongoose.Schema(
    {
        id: { type: String},
        titulo: { type: String, required: true },
        descricao: { type: String },
        autor: { type: String }
    }, {
        versionKey: false
    }
)

const filmes = mongoose.model("filmes", filmesSchemma)

export default filmes;