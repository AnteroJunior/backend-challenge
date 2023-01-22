const { Router } = require('express');
const ServicoController = require('../controllers/ServicoController');

const router = Router();

router.get('/servicos', ServicoController.getAllServicos);
// router.get('/profissionais/:email-:senha', ProfissionalController.compareProfissionalInformation);

module.exports = router;