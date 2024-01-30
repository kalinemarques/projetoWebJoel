const express = require('express');
const methodOverride = require('method-override');
const filmeController = require('../controller/filmeController');

const router = express.Router();

router.use(methodOverride('_method'));

router.get('/novoFilme', filmeController.formCadastro);
router.post('/novoFilme', filmeController.novoFilme);
router.get('/listarFilmes', filmeController.listarFilmes);
router.delete('/deletarFilme/:id', filmeController.deletarFilme);
router.get('/deletarFilme/:id', filmeController.formDeletarFilme);
router.put('/editarFilme/:id', filmeController.editarFilme);
router.get('/editarFilme/:id', filmeController.formEditarFilme);
router.get('/cadastroFilme', filmeController.formCadastro);

module.exports = router;
