import filmes from './Filmes.js'

class FilmesController {

    cadastraFilme = (req, res) => {
        let filme = new filmes(req.body);

        filme.save((err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Falha ao cadastrar filme.` })
            } else {
                res.status(201).send(filme.toJSON())
            }
        })
    }

    listarFilmes = (req, res) => {
        filmes.find((err, filmes) => {
            res.status(200).json(filmes)
        })

    }

    listarFilmesPorId = (req, res) => {
        const id = req.params.id;

        filmes.findById(id, (err, filmes) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id do filme não encontrado` })
            } else {
                res.status(200).send(filmes)
            }
        })
    }
}