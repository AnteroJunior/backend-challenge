const bodyParser = require('body-parser');
const profissionais = require('../routes/profissionaisRoutes');
const clientes = require('../routes/clientesRoutes');
const servicos = require('../routes/servicosRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(profissionais);
    app.use(clientes);
    app.use(servicos);
};