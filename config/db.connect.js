import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://Station_filmes1:Station1@filmes1.qyx2v.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;