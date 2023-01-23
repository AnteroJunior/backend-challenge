const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');

const router = Router();

router.get('/clientes/:cliente_id', ClienteController.getClienteById);
router.get('/clientes/login/:email-:senha', ClienteController.compareClienteInformation);

module.exports = router;