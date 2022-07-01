import filmes from '../models/Filmes.js'

class FilmesController {

    static listarFilmes = (req, res) => {
        filmes.find((err, filmes) => {
            res.status(200).json(filmes)
        })

    }

    static listarFilmesPorId = (req, res) => {
        const id = req.params.id;

        filmes.findById(id, (err, filmes) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id do filme não encontrado` })
            } else {
                res.status(200).send(filmes)
            }
        })
    }

    static cadastraFilme = (req, res) => {
        let filme = new filmes(req.body);

        filme.save((err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Falha ao cadastrar filme.` })
            } else {
                res.status(201).send(filme.toJSON())
            }
        })
    }

    static atualizaFilme = (req, res) => {
        const id = req.params.id;

        filmes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - não foi possivel atualizar o filme.` })
            } else {
                res.status(200).send({ message: 'Filme atualizado com sucesso' })
            }
        })
    }


}

export default FilmesController;