const { Router } = require('express');
const ProfissionalController = require('../controllers/ProfissionalController');

const router = Router();

router.get('/profissionais', ProfissionalController.getAllProfissionais);
router.get('/profissionais/:email-:senha', ProfissionalController.compareProfissionalInformation);

module.exports = router;