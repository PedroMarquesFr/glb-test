# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte para o contêiner
COPY . .

# Exponha a porta em que a aplicação Express está escutando
EXPOSE 3001

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
