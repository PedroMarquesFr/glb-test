# GLB Manager

O **GLB Manager** é uma aplicação web que permite aos usuários gerenciar e visualizar arquivos GLB (GL Transmission Format Binary). Ela é composta por dois componentes principais: o front-end (desenvolvido com React, Vite e TypeScript) e o back-end (construído com Node.js, Sequelize, Express e MSC). Este repositório contém o código-fonte de ambos os componentes, além de um arquivo `docker-compose` para a criação de um container de banco de dados.

![Demonstração do Projeto](./glb-test-front/src/assets/Screenshot%202023-09-22%20174230.png)
![Demonstração do Projeto](./glb-test-front/src/assets/Screenshot%202023-09-22%20174720.png)
![Demonstração do Projeto](./glb-test-front/src/assets/Screenshot%202023-09-22%201748322.png)

## Tabela de Conteúdos

- [Recursos](#recursos)
- [Como Rodar o Projeto Localmente](#como-rodar-o-projeto-localmente)
  - [Pré-requisitos](#pré-requisitos)
  - [Instruções de Instalação](#instruções-de-instalação)
- [Uso](#uso)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Recursos

O **GLB Manager** oferece os seguintes recursos:

- Carregamento e gerenciamento de arquivos GLB.
- Visualização e interação com arquivos GLB.
- Autenticação de usuário para segurança.
- Armazenamento seguro de arquivos GLB.

## Como Rodar o Projeto Localmente

### Pré-requisitos

Antes de começar, certifique-se de que você tenha os seguintes pré-requisitos instalados:

- Node.js: Você pode instalá-lo em [nodejs.org](https://nodejs.org/).
- Docker: Certifique-se de que o Docker esteja instalado em [docker.com](https://www.docker.com/products/docker-desktop/) e que o **docker daemon** esteja rodando.

### Instruções de Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-nome-de-usuario/GLB-Manager.git
   ```

2. Abra o Visual Studio Code (VSCode) no diretório do projeto:

   ```bash
   code .
   ```

3. No VSCode, abra três instâncias de terminal para gerenciar os serviços separadamente:

   ![Instâncias de Terminal](./glb-test-front/src/assets/Screenshot%202023-09-23%20114933.png)

   Cada terminal será responsável por um serviço específico.

4. Configure o container do banco de dados:

   No terminal destinado ao banco de dados (db), execute o seguinte comando:

   ```bash
   docker-compose up
   ```

5. Configure a API:

   No terminal destinado à API (api), siga estas etapas:

   ```bash
   cd .\glb-test-back\
   npm i
   npm run migrate
   npm run debug
   ```

6. Configure o Front-End:

   No terminal destinado ao front-end (front), siga estas etapas:

   ```bash
   cd .\glb-test-front\
   npm i
   npm run dev
   ```

Isso deve configurar o ambiente local para executar o **GLB Manager**. Certifique-se de que todos os pré-requisitos estejam satisfeitos e siga as instruções cuidadosamente para garantir uma implantação bem-sucedida do projeto.
Caso tenho tido algum problema na instalação pode me mandar uma mensagem pelo [linkedin](https://www.linkedin.com/in/pedro-marques-4a8609182/), responderei rapidamente.
