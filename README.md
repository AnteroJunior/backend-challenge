# Resumo
Esse desafio traz a ideia de criar uma API para construir um 
fluxo de atendimento com serviços e pagamento de uma clínica.

# Menu
<p align='center'><a href="#resumo">Resumo</a> | <a href="#funcionalidades">Funcionalidades</a> | <a href="#regras">Regras</a> | <a href="#status">Status das features</a> | <a href="#rodando">Como executar</a></p>
 

<h2 id="funcionalidades">Funcionalidades</h2>

- [ ] Cliente e atendente fazem login;
- [ ] Cliente pode selecionar serviços em uma lista e solicitar
o atendimento;
- [ ] O profissional verá as solicitações de atendimento e poderá
aceitar a que achar pertinente;
- [ ] Ao final do atendimento, o profissional verá a duração
total e a comissão a ser recebida;

<h2 id="regras">Regras</h2>

- [x] Usar PostgreSQL/MySQL;
- [x] README com instruções;
- [ ] Testes unitários;

<h2 id="status">Status da aplicação</h2>

- [x] README.md;
- Models
	- [x] Tabelas do banco de dados;
	- [x] Migrations feitas;
	- [x] Tabelas povoadas (seed);
- Views
	- [ ] Login;
	- [ ] Tela de usuário;
	- [ ] Tela do profissional;
	OBS: As telas de histórico serão colocadas em abas;
- Controllers
	- [x] Função Profissionais
	- [x] Função Clientes
	- [x] Função Serviços
	- [ ] Função Atendimentos
- Rotas
	- [x] Rotas Profissionais;
	- [x] Rotas Clientes;
	- [x] Rotas Serviços;
	- [ ] Rotas Atendimentos;

<h2 id="rodando"> Como executar a aplicação</h2>

1. Para executar a aplicação, o usuário deverá instalar todas as dependências e pacotes com o <code>npm i</code>.
2. O usuário deverá criar uma variável de ambiente <code>.env</code> e criar as variavéis: 

```
PORT=port
DATABASE=your_database_name
USERNAME=your_username
PASSWORD=your_password
```
3. Após adicionar o arquivo, agora é hora de fazer as migrações com o comando:
``` npx sequelize-cli db:migrate ```

4. Agora é só rodar o comando ``` npm start ``` para iniciar o servidor.

5. Após isso, o servidor/API estará funcionando no endereço: <code>localhost:PORTA</code>, tendo as seguintes rotas disponíveis:
<code>/clientes</code> e <code>clientes/:id</code>
<code>/profissionais</code> e <code>profissionais/:id</code>
<code>/atendimentos</code>
<code>/servicos</code> e <code>/servicos/:id</code>

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