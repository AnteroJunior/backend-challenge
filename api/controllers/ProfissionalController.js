const database = require('../models');

class ProfissionalController {
    static async getAllProfissionais(req, res) {
        try {
            const allProfissionais = await database.Profissionais.findAll();
            return res.status(200).json(allProfissionais);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async compareProfissionalInformation(req, res) {
        try {
            const { email, senha } = req.params;
            const profissionalInformation = await database.Profissionais.findOne({ where: { email: email, senha: senha } });
            if (profissionalInformation != null) {
                return res.status(200).json(profissionalInformation);
            } else {
                throw new Error('Usuário não encontrado.');
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProfissionalController;