# CRUD com Express, CORS, Dotenv, MySQL2, Knex e Nodemon

## Objetivo

Criar uma aplicação CRUD utilizando:

* Node.js
* Express
* CORS
* Dotenv
* MySQL2
* Knex.js
* Nodemon

---

## Passo 1 - Criar a pasta do projeto

Crie uma pasta para o projeto:

```txt
meu-projeto
```

---

## Passo 2 - Inicializar o projeto Node.js

Abra o terminal dentro da pasta do projeto e execute:

```bash
npm init -y
```

Este comando cria o arquivo:

```txt
package.json
```

---

## Passo 3 - Instalar as dependências principais

```bash
npm install express cors dotenv mysql2 knex
```

Dependências instaladas:

| Pacote  | Função                        |
| ------- | ----------------------------- |
| express | Servidor HTTP                 |
| cors    | Permite requisições externas  |
| dotenv  | Carrega variáveis de ambiente |
| mysql2  | Driver de conexão com MySQL   |
| knex    | Query Builder para o banco    |

---

## Passo 4 - Instalar o Nodemon

```bash
npm install -D nodemon
```

O Nodemon reinicia automaticamente o servidor quando algum arquivo é alterado.

---

## Passo 5 - Configurar o package.json

Adicionar:

```json
"type": "module"
```

Adicionar também:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

Exemplo:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

---

## Passo 6 - Criar o arquivo server.js

Na raiz do projeto:

```txt
server.js
```

Responsável por iniciar o servidor.

---

## Passo 7 - Criar o arquivo .gitignore

Na raiz do projeto:

```txt
.gitignore
```

Conteúdo:

```txt
node_modules
.env
```

---

## Passo 8 - Criar o arquivo .env

Na raiz do projeto:

```txt
.env
```

Exemplo:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=crud_knex
DB_PORT=3306

PORT=3000
```

---

## Passo 9 - Criar a estrutura de pastas

Execute:

```powershell
mkdir src, src/controllers, src/routes, src/db, src/db/migrations, src/db/seeds
```

Estrutura criada:

```txt
src/
├── controllers/
├── routes/
└── db/
    ├── migrations/
    └── seeds/
```

---

## Passo 10 - Criar o Controller

Criar o arquivo:

```txt
src/controllers/usuarioController.js
```

Responsável pela lógica do CRUD.

---

## Passo 11 - Criar a conexão com o banco

Criar o arquivo:

```txt
src/db/connection.js
```

Responsável por criar a conexão do Knex com o MySQL.

---

## Passo 12 - Criar as rotas

Criar o arquivo:

```txt
src/routes/usuarioRoutes.js
```

Responsável por definir as rotas da API.

---

## Passo 13 - Criar o app.js

Criar o arquivo:

```txt
src/app.js
```

Responsável por configurar:

* Express
* CORS
* JSON
* Rotas
* Pasta public

---

## Passo 14 - Criar a pasta public

Criar:

```txt
public/
```

E dentro dela:

```txt
public/index.html
```

Este será o frontend da aplicação.

---

## Passo 15 - Criar o banco de dados

No MySQL Workbench execute:

```sql
CREATE DATABASE crud_knex;
USE crud_knex;
```

---

## Passo 16 - Criar o knexfile.js

Executar:

```bash
npx knex init
```

Será criado:

```txt
knexfile.js
```

na raiz do projeto.

Após gerar, editar o arquivo para configurar:

* MySQL2
* Dotenv
* Pasta de migrations
* Pasta de seeds

---

## Passo 17 - Criar a migration

Executar:

```bash
npx knex migrate:make create_usuarios_table
```

Será criado um arquivo semelhante a:

```txt
src/db/migrations/20260609143000_create_usuarios_table.js
```

O número inicial é um timestamp gerado automaticamente pelo Knex.

Depois disso, editar a migration para definir a estrutura da tabela.

---

## Passo 18 - Executar a migration

Executar:

```bash
npx knex migrate:latest
```

O Knex irá:

1. Conectar ao MySQL
2. Ler as migrations
3. Executar as migrations pendentes
4. Criar as tabelas definidas
5. Criar a tabela:

```txt
knex_migrations
```

Essa tabela controla quais migrations já foram executadas.

---

## Passo 19 - Criar uma seed

Executar:

```bash
npx knex seed:make exemplo_usuarios
```

Será criado:

```txt
src/db/seeds/exemplo_usuarios.js
```

Depois disso, editar o arquivo para inserir registros de exemplo.

---

## Passo 20 - Executar a seed

Executar:

```bash
npx knex seed:run
```

O Knex executará os arquivos da pasta seeds e inserirá os dados no banco.

---

## Passo 21 - Iniciar o servidor

Executar:

```bash
npm run dev
```

O servidor será iniciado em:

```txt
http://localhost:3000
```

---

# Estrutura Final do Projeto

```txt
meu-projeto/
│
├── node_modules/
│
├── public/
│   └── index.html
│
├── src/
│   │
│   ├── controllers/
│   │   └── usuarioController.js
│   │
│   ├── routes/
│   │   └── usuarioRoutes.js
│   │
│   ├── db/
│   │   ├── migrations/
│   │   │   └── 20260609123536_create_usuarios_table.js
│   │   │
│   │   ├── seeds/
│   │   │   └── exemplo_usuarios.js
│   │   │
│   │   └── connection.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── knexfile.js
├── package-lock.json
├── package.json
└── server.js
```

---

# Fluxo da Aplicação

```txt
Frontend (index.html)
        ↓
Rotas (routes)
        ↓
Controllers
        ↓
Knex
        ↓
MySQL
```

# Resumo Mental

```txt
public/
→ Frontend

routes/
→ URLs da API

controllers/
→ Regras de negócio

connection.js
→ Conexão com o banco

migrations/
→ Estrutura das tabelas

seeds/
→ Dados iniciais

knexfile.js
→ Configuração do Knex

.env
→ Variáveis de ambiente

MySQL
→ Banco de dados
```
