const { Router } = require('express');
const ProfissionalController = require('../controllers/ProfissionalController');

const router = Router();

router.get('/profissionais/login/:email-:senha', ProfissionalController.compareProfissionalInformation);
router.get('/profissionais/', ProfissionalController.getAllProfissionais);

module.exports = router;