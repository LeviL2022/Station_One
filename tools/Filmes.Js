import mongoose from 'mongoose'
import { Long } from 'bson';

const filmesSchemma = new mongoose.Schema(
    {
        id: { type: Long, required: true },
        titulo: { type: String, required: true },
        descricao: { type: String },
        autor: { type: String }
    },{
        versionKey:false
    }
)

const filmes = mongoose.model("filmes", filmesSchemma)

export default filmes;