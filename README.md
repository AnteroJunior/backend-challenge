# Resumo
Esse desafio traz a ideia de criar uma API para construir um 
fluxo de atendimento com serviços e pagamento de uma clínica.

# Menu
<p>Resumo | Funcionalidades | Regras | Status das features</p>
 

# Funcionalidades:
- [ ] Cliente e atendente fazem login;
- [ ] Cliente pode selecionar serviços em uma lista e solicitar
o atendimento;
- [ ] O profissional verá as solicitações de atendimento e poderá
aceitar a que achar pertinente;
- [ ] Ao final do atendimento, o profissional verá a duração
total e a comissão a ser recebida;

# Regras:
- [x] Usar PostgreSQL/MySQL;
- [x] README com instruções;
- Testes unitários;

# Status da aplicação
- [x] README.md;
- Models
	- [x] Tabelas do banco de dados;
	- [ ] Migrations feitas;
	- [ ] Tabelas povoadas (seed);
- Views
	- [ ] Login;
	- [ ] Tela de usuário;
	- [ ] Tela do profissional;
	OBS: As telas de histórico serão colocadas em abas;
- Controllers
	- [ ] Função Profissionais
	- [ ] Função Clientes
	- [ ] Função Serviços
	- [ ] Função Atendimentos
- Rotas
	- [ ] Rotas Profissionais;
	- [ ] Rotas Clientes;
	- [ ] Rotas Serviços;
	- [ ] Rotas Atendimentos;

# Como executar a aplicação
Para executar a aplicação, o usuário deverá instalar todas
as dependências e pacotes com o <code>npm i</code> e executar
por meio do <code>npm start</code>

Após isso, o servidor/API estará funcionando no endereço:
<code>localhost:3000</code>, tendo as seguintes rotas 
disponíveis:
/clientes e clientes/:id
/profissionais e profissionais/:id
/atendimentos
/servicos e /servicos/:id

# Tecnologias
Para desenvolver o back-end da aplicação foram utilizadas:
- Node.js e Express.js;
- Sequelize (ORM);
- MySQL;
Pacotes:
- jwt;
- nodemon;
- body-parser;

Para o front-end foi utilizado:
- React.js (Context API, useEffect, useState);
- Figma (criação das telas);