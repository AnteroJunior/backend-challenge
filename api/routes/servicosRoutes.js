const { Router } = require('express');
const ServicoController = require('../controllers/ServicoController');

const router = Router();

router.get('/servicos', ServicoController.getAllServicos);
router.get('/servicos/:id', ServicoController.getServicoById);

module.exports = router;