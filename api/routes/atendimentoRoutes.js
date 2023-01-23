const { Router } = require('express');
const AtendimentoController = require('../controllers/AtendimentoController');
const router = Router();

router.get('/atendimentos', AtendimentoController.getAllAtendimento);
router.post('/atendimentos/:idCliente-:idServico', AtendimentoController.createAtendimento);
router.put('/atendimentos/:idProfissional-:idAtendimento', AtendimentoController.updateAtendimento);
router.put('/atendimentos/finalizar/:idProfissional-:idAtendimento', AtendimentoController.finishAtendimento);

module.exports = router;