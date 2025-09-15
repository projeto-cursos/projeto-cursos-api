# 🚀 API - Projeto-cursos

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-2.x-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

Bem-vindo(a) à **API do projeto-cursos**!  
Esta API foi desenvolvida em **Node.js** com **Express**, utilizando **Nodemon** para facilitar o desenvolvimento. A equipe responsavel pelo projeto foi:
Yukas, Guto, Mauricio, Bruno, Rhuan e Isaque. 
Participantes importantes: Yukas, Guto, Mauricio e Rhuan
Destinatario: Prof: Gabriel.
O objetivo é fornecer endpoints RESTful para **gerenciamento de [escreva aqui, ex: cursos e usuários]**.

---

## 🛠 Tecnologias Utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

---

## 📂 Estrutura do Projeto

```bash
├── index.js           # codigo da aplicação
├── .env               # Variáveis de ambiente

⚙️ Configuração do Ambiente

Clone este repositório:

git clone https://github.com/yukasdev01/projeto-cursos-api.git
cd projeto-cursos-api


Instale as dependências:

npm install


Crie o arquivo .env na raiz do projeto e configure as variáveis necessárias:

PORT=5000
DATABASE_URL=sua_string_de_conexao


Inicie o servidor em modo desenvolvimento:

npm run dev

📡 Rotas Principais
🔹 Exemplo de rota GET
GET /api/cursos


Retorna todos os cursos cadastrados.

🔹 Exemplo de rota POST
POST /api/cursos


Cria um novo curso.

Body esperado:

{
  "titulo": "Curso de Node.js",
  "descricao": "Aprenda Node.js do zero",
  "carga_horaria": 40
}

🚀 Scripts Disponíveis

No package.json você encontrará os seguintes scripts:

"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
}


npm start → inicia a aplicação em produção.

npx nodemon index.js → inicia a aplicação em desenvolvimento com Nodemon.
├── package.json







└── README.md
