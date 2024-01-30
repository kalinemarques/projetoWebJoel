const { response } = require('express')
const db = require('../database/conection')

filmeController = {
    formCadastro:(req,res)=>{
        res.render('cadastroFilmes')
    },
    novoFilme:(req, res)=>{
        const{titulo, diretor, ano_lancamento, genero, duracao_minutos, sinopse, avaliacao} = req.body
        db.insert({titulo, diretor, ano_lancamento, genero, duracao_minutos, sinopse, avaliacao}).table("filmes").then(data=>{
            console.log(data)
            res.json({message: 'Filme cadastrado com sucesso!'})
        }).catch(error=>{
            console.log(error)
        })
    },
    listarFilmes: (req, res) => {
        db.select("*").table("filmes")
            .then(filmes => {
                console.log(filmes);
                res.render('listarFilmes', { filmes: filmes }); 
            })
            .catch(error => {
                console.log(error);
                res.json(error); 
            });
    },
    
    deletarFilme:(req, res)=>{
        const id = req.params
        db.where({id:id.id}).del().table("filmes").then(data=>{
            res.json({message: 'Filme removido com sucesso!'})
        }).catch(error=>{
            res.json(error)
        })
    },
    editarFilme:(req, res)=>{
        const id = req.params
        const{titulo, diretor, ano_lancamento, genero, duracao_minutos, sinopse, avaliacao} = req.body
        db.where({id:id.id}).update({titulo, diretor, ano_lancamento, genero, duracao_minutos, sinopse, avaliacao}).table("filmes").then(data=>{
            res.json({message: 'Dados atualizados com sucesso!'})
        }).catch(error=>{
            res.json(error)
        })
    },
    formEditarFilme:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("filmes").where({id:id.id}).then(filme=>{
            console.log(filme)
            res.render('editarFilme',{filme})
        }).catch(error=>{
            console.log(error)
        })
    },
    formDeletarFilme:(req, res)=>{
        const id = req.params
        console.log(id)
        db.select("*").table("filmes").where({id:id.id}).then(filme=>{
            console.log(filme)
            res.render('deletarFilme',{filme})
        }).catch(error=>{
            console.log(error)
        })
    }

}
module.exports = filmeController