const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');

const router = Router();

// router.get('/', ProfissionalController.getAllProfissionais);
router.get('/clientes/:email-:senha', ClienteController.compareClienteInformation);

module.exports = router;