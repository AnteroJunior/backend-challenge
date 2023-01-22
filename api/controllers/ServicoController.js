const database = require('../models');

class ServicoController {
    static async getAllServicos(req, res) {
        try {
            const servicos = await database.Servicos.findAll();
            return res.status(200).json(servicos);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = ServicoController;