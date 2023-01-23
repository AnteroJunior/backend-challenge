const database = require('../models');

class AtendimentoController {
    static async getAllAtendimento(req, res) {
        try {
            const atendimentos = await database.Atendimentos.findAll();
            return res.status(200).json(atendimentos);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async createAtendimento(req, res) {
        const { idCliente, idServico } = req.params;
        try {
            await database.Atendimentos.create({ cliente_id: idCliente, servico_id: idServico, inicio: new Date().toISOString() });
            const atendimentos = await database.Atendimentos.findAll();
            return res.status(200).json(atendimentos);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async updateAtendimento(req, res) {
        const { idProfissional, idAtendimento } = req.params;
        try {
            await database.Atendimentos.update({ status: 'Em atendimento', profissional_id: idProfissional, inicio: new Date().toISOString() }, {
                where: {
                    id: idAtendimento,
                }
            })
            const atendimentos = await database.Atendimentos.findAll();
            return res.status(200).json(atendimentos);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async finishAtendimento(req, res) {
        const { idProfissional, idAtendimento } = req.params;
        try {
            await database.Atendimentos.update({ status: 'Finalizado', profissional_id: idProfissional, fim: new Date().toISOString() }, {
                where: {
                    id: idAtendimento,
                    profissional_id: idProfissional
                }
            })
            const atendimentos = await database.Atendimentos.findAll();
            return res.status(200).json(atendimentos);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = AtendimentoController;