# Resumo
Esse desafio traz a ideia de criar uma API para construir um 
fluxo de atendimento com serviços e pagamento de uma clínica.

# Menu
<p align='center'><a href="#resumo">Resumo</a> | <a href="#funcionalidades">Funcionalidades</a> | <a href="#regras">Regras</a> | <a href="#status">Status das features</a> | <a href="#rodando">Como executar</a></p>
 

<h2 id="funcionalidades">Funcionalidades</h2>

- [x] Cliente e atendente fazem login;
- [x] Cliente pode selecionar serviços em uma lista e solicitar
o atendimento;
- [x] O profissional verá as solicitações de atendimento e poderá
aceitar a que achar pertinente;
- [x] Ao final do atendimento, o profissional verá a duração
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
	- [x] Login;
	- [x] Tela de usuário;
	- [x] Tela do profissional;
	OBS: As telas de histórico serão colocadas em abas;
- Controllers
	- [x] Função Profissionais
	- [x] Função Clientes
	- [x] Função Serviços
	- [x] Função Atendimentos
- Rotas
	- [x] Rotas Profissionais;
	- [x] Rotas Clientes;
	- [x] Rotas Serviços;
	- [x] Rotas Atendimentos;

<h2 id="rodando"> Como executar a aplicação</h2>

1. Para executar a aplicação, o usuário deverá instalar todas as dependências e pacotes com o <code>npm i</code>, tanto da pasta backend-challenge como também da pasta front-end.
2. O usuário deverá criar uma variável de ambiente <code>.env</code> e criar as variavéis: 

```
PORT=port
DATABASE=your_database_name
USERNAME=your_username
PASSWORD=your_password
```
3. Após adicionar o arquivo, agora é hora de fazer as migrações com o comando:
``` npx sequelize-cli db:migrate ```
4. Vamos povoar o banco de dados com a tabela de Servicos, Profissionais e Clientes:
``` npx sequelize-cli db:seed:all ```
5. Agora é só rodar o comando ``` npm start ``` para iniciar o servidor.
6. Após isso, o servidor/API estará funcionando no endereço: <code>localhost:PORTA</code>, tendo as seguintes rotas disponíveis:
- Atendimentos:

Todos os atendimentos: <code>/atendimentos</code>

Com o método POST, criamos um novo atendimento: <code>/atendimentos/:idCliente-:idServico</code>

Atualizamos o atendimento com os seguintes parâmetros (PUT): <code>/atendimentos/:idProfissional-:idAtendimento</code>

Finalizamos o atendimento (PUT): <code>/atendimentos/finalizar/:idProfissional-:idAtendimento</code>

Atualizamos valores e tempo total (PUT): <code>/atendimentos/checkout/:id-:tempo_total-:valor_atendimento-:comissao_atendente</code>

- Serviços:

Todos os métodos são GET

Recupera todos os serviços: <code>/servicos</code>

Recupera serviço por id: <code>/servicos/:id</code>


- Clientes:

Todos os métodos são GET
Recupera cliente por id: <code>/clientes/:cliente_id</code>

Verifica se as informações passadas batem com o registro no banco: <code>/clientes/login/:email-:senha</code>

- Profissionais:

Todos os métodos são GET

Verifica se as informações passadas batem com o registro no banco: <code>/profissionais/login/:email-:senha</code>

7. Agora só ir na pasta front-end e iniciar o Node ``` npm start ```

<h2>Tecnologias</h2>
Para desenvolver o back-end da aplicação foram utilizadas:

- Node.js e Express.js;
- Sequelize (ORM);
- MySQL;
Pacotes:
- nodemon;
- body-parser;
- cors;

Para o front-end foi utilizado:

- React.js (Context API, useEffect, useState);
- Moment.js