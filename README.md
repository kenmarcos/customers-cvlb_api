<!-- CABEÇALHO -->
<div id="readme-top" align="center">
    <h1>
       Grupo CVLB - API de Clientes
    </h1>
    <p>
        <a href="#%EF%B8%8F-sobre-o-projeto">Sobre o Projeto</a> •
        <a href="#-endpoints">Endpoints</a> •
        <a href="#-utilização">Utilização</a> •
        <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> •
        <a href="#-autor">Autor</a>
    </p>
</div>

<!-- SOBRE O PROJETO -->

## 🖥️ Sobre o Projeto

> Projeto desenvolvido como etapa do processo seletivo do Grupo CVLB.

Esse projeto consiste em uma aplicação back-end de um sistema de gerenciamento de clientes de uma loja fictícia.

Esse serviço possui uma API REST integrada a um banco de dados PostegreSQL.

A aplicação completa (Back-end e Front-end) pode ser vizualizada **[aqui](https://cvlb-clientes.vercel.app)**.

Algumas funcionalidades dessa aplicação são:

- [x] Cadastrar e gerenciar clientes
- [x] Ativar participação de cliente em Clube de Vantagens
- [x] Listar todos os clientes
- [x] Retornar os detalhes de um cliente específico
- [x] Atualizar os dados pessoais de um cliente
- [x] Remover um cliente
- [x] Cadastrar endereço vinculado a um cliente
- [x] Remover um endereço

<!-- ENDPOINTS -->

## 💡 Endpoints

| Método | Endpoint                 | Responsabilidade                        | Regras de Negócio |
| ------ | ------------------------ | --------------------------------------- | ----------------- |
| GET    | /customers               | Lista todos os clientes                 |                   |
| GET    | /customers/\<customerId> | Retorna um determinado cliente pelo id  |                   |
| POST   | /customers               | Cria um cliente                         |                   |
| PATCH  | /customers/\<customerId> | Atualiza informações do cliente         |                   |
| DELETE | /customers/\<customerId> | Remove um cliente do sistema            |                   |
| POST   | /address/                | Cria um endereço vinculado a um cliente |                   |
| DELETE | /address/\<addressId>    | Remove um endereço                      |                   |

<!-- UTILIZAÇÃO -->

## 🚀 Utilização

> Para utilizar a aplicação, é necessário o uso de uma API Client, como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download).

Faça as requisições na aplicação utilizando uma API Client.

url da api: https://customers-cvlb-api.onrender.com

<!-- TECNOLOGIAS -->

## 🛠️ Tecnologias

Para o desenvolvimento desse projeto, as seguintes ferramentas foram utilizadas:

- **[Node.js](https://nodejs.org/)**
- **[Express.js](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[TypeORM](https://typeorm.io/)**
- **[Yup](https://www.npmjs.com/package/yup)**

## 👨‍💻 Autor

<img style="border-radius: 15%;" src="https://gitlab.com/uploads/-/system/user/avatar/8603970/avatar.png?width=400" width=70 alt="author-profile-picture"/>

Marcos Kenji Kuribayashi

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/marcos-kuribayashi/) [![Gmail Badge](https://img.shields.io/badge/-marcosken13@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:marcosken13@gmail.com)

---

Desenvolvido por Marcos Kenji Kuribayashi 😉
