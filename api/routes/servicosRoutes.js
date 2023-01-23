const { Router } = require('express');
const ServicoController = require('../controllers/ServicoController');

const router = Router();

router.get('/servicos', ServicoController.getAllServicos);

module.exports = router;