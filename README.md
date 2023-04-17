# ilumeo_backend

Passos para executação do projeto.

## Docker Compose 
O docker compose cria um banco postgres e um server node js
`docker-compose up --build -d`
## Dockerfile
Cria a imagem do docker do server node
`docker build .`

## Node normal
Instale tudo com `npm install`
rode localmente usando `npm run dev`
rode como produção usando `npm run build` e depos `node dist/server.js`

# Seed para testes
`npx sequelize db:seed --seed tests_datas.js`
## Usuários registrados na SEED (Códigos)
QUOkXwK,GM7K0QO,4SXXFMf

# Variaveís de ambiente
PSQL_HOST=localhost                //Host postgress <br />
POSTGRES_PASSWORD=123456           //Senha postgres<br />
POSTGRES_USER=postgres             //User postgres<br />
POSTGRES_DB=ilumeo                 //Nome banco postgres<br />
PORT=3333                          //Porta do server node <br />
NODE_ENV=development               //Ambiente<br />
SECRET=eqewjqopejwqpoejqwepoqwjepo //Secret para gerar JWT<br />

