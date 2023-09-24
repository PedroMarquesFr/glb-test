# GLB Manager

O **GLB Manager** é uma aplicação web que permite aos usuários gerenciar e visualizar arquivos GLB (GL Transmission Format Binary). Ele é composto por dois componentes principais: o front-end (desenvolvido com React, Vite e TypeScript) e o back-end (construído com Node.js, Sequelize, Express, Model Viewer e MSC). Este repositório contém o código-fonte de ambos os componentes.

## Demonstração do Projeto
![Demonstração do Projeto](./glb-test-front/src/assets/Screenshot%202023-09-23%20160806.png)
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
- [Contato](#contato)

## Recursos

O **GLB Manager** oferece os seguintes recursos:

- Carregamento e gerenciamento de arquivos GLB.
- Visualização e upload de arquivos GLB.
- Autenticação de usuário para segurança.
- Armazenamento seguro de arquivos GLB.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js: Você pode instalá-lo em [nodejs.org](https://nodejs.org/).

### Instruções de Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/PedroMarquesFr/glb-test.git
   ```

2. Configure a API:

   Abra um novo terminal destinado à API (api), siga estas etapas:

   ```bash
   cd .\glb-test-back\
   npm i
   npm run migration
   npm run dev
   ```

3. Configure o Front-End:

   Abra um novo terminal destinado ao front-end (front), siga estas etapas:

   ```bash
   cd .\glb-test-front\
   npm i
   npm run dev
   ```

Isso deve configurar o ambiente local para executar o **GLB Manager**. Certifique-se de que todos os pré-requisitos estejam satisfeitos e siga as instruções cuidadosamente para garantir uma implantação bem-sucedida do projeto.

### Uso

O projeto é inicializado sem usuários, portanto, você deve criar uma conta clicando no botão "Register" (Registrar).

### Front-end
O componente de front-end do **GLB Manager** é responsável pela interface de usuário da aplicação. Desenvolvi usando tecnologias como React, Vite, TypeScript, Tailwind e outras. Usei padrões de **Clean Code** e **SOLID** para escalabilidade no desenvolvimento e conceitos de UX design e UX writing para tornar o sistema mais acessível e agradável para o usuário final.

### Back-end
O componente de back-end do **GLB Manager** é uma **RESTFull API** responsável pelo gerenciamento de dados e pela lógica de negócios da aplicação. Desenvolvi usando tecnologias como Node.js, Sequelize, Express e outras. Se trata de uma arquitetura simples (MSC) de fácil compreenção e auto explicativa, usei padrões de **Clean Code** no desenvolvimento.
Estruturei o banco e dadso pensando em futuras integrações com serviçoe de nuvem como aws s3 ou azure blob

## Contato

Se você encontrar algum problema durante a instalação ou tiver perguntas adicionais, sinta-se à vontade para entrar em contato pelo [LinkedIn](https://www.linkedin.com/in/pedro-marques-4a8609182/). Estou disponível para ajudar e responder rapidamente.
