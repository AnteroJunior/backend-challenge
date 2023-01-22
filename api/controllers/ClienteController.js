const database = require('../models');

class ClienteController {

    static async compareClienteInformation(req, res) {
        try {
            const { email, senha } = req.params;
            const clienteInformation = await database.Clientes.findOne({ where: { email: email, senha: senha } });
            if (clienteInformation != null) {
                return res.status(200).json(clienteInformation);
            } else {
                throw new Error('Usuário não encontrado.');
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ClienteController;