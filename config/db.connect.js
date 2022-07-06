import mongoose from 'mongoose'

class Connection {

    constructor() {
        this.connection = null;
    }

    async connect() {
        if (!this.connection) {
            this.connection = await mongoose.connect("mongodb+srv://Station_filmes1:Station1@filmes1.qyx2v.mongodb.net/?retryWrites=true&w=majority")
        }
        return this.connection;
    }

    async disconnect() {
        if (this.connection) {
            await this.connection.disconnect();
        }
    }
}

export const dbConnection = new Connection();
