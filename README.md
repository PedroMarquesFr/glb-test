# GLB Manager

GLB Manager é uma aplicação web que permite aos usuários gerenciar e visualizar arquivos GLB (GL Transmission Format Binary). Ela é composta por dois componentes principais: o front-end (React, Vite, Typescript) e o back-end (Node, Sequelize, Express, MSC). Este repositório contém o código para ambos os componentes alem de um docker-compose para a criacao do container do banco de dados.
![project demonstration](./glb-test-front/src/assets/Screenshot%202023-09-22%20174230.png)
![project demonstration](./glb-test-front/src/assets/Screenshot%202023-09-22%20174720.png)
![project demonstration](./glb-test-front/src/assets/Screenshot%202023-09-22%201748322.png)

## Tabela de Conteúdos

- [Recursos](#recursos)
- [Como Rodar o projeto local](#Como-rodar-o-projeto-local)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Uso](#uso)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

- Carregar e gerenciar arquivos GLB.
- Visualizar e interagir com arquivos GLB.
- Autenticação de usuário.
- Armazenamento seguro de arquivos GLB.

## Como Rodar o projeto local

### Pré-requisitos

Antes de começar, certifique-se de que atende aos seguintes requisitos:

- Node.js: Instale o Node.js em [nodejs.org](https://nodejs.org/).
- Docker: Instale o Docker em [docker.com](https://www.docker.com/products/docker-desktop/).

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-nome-de-usuario/GLB-Manager.git
   ```

2. Abra o VSCode:
   - voce pode fazer isso enmtrando noa pasta do projeto abrindo um terminal de digitando:
   ```bash
   code .
   ```
3. No VScode crie três instancias de terminal, desta forma:
   ![project demonstration](./glb-test-front/src/assets/Screenshot%202023-09-23%20114933.png)

- Cada terminal sera responsavel por um servico

4. Configure o container do banco de dados:

- no terminal destinado ao banco de dados (db), rode o seguinte comando
  ```bash
  docker-compose up
  ```

4. Configure a API:

- no terminal destinado ao api (api), rode os seguintes comandos

  ```bash
  cd .\glb-test-back\
  ```

  ```bash
  npm i
  ```

  ```bash
  npm run migrate
  ```

  ```bash
  npm run debug
  ```

  5. Configure a Front-End:

- no terminal destinado ao frontend (front), rode os seguintes comandos
  ```bash
  cd .\glb-test-front\
  ```
  ```bash
  npm i
  ```
  ```bash
  npm run dev
  ```
