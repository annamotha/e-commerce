# E-commerce

Este é um projeto de front-end de e-commerce básico.

## Tecnologias Utilizadas

- **Front-end**: HTML, CSS, JavaScript
- **API**: Simulação com `json-server` para fornecer dados de produtos.

## Instalação e Configuração

### Pré-requisitos

Para rodar o projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado e também o [json-server](https://github.com/typicode/json-server) para simular a API de produtos.

Configure e inicie o `json-server` para servir os dados dos produtos:
   ```bash
   json-server --watch produtos.json --port 3001
   ```
   Isso irá criar uma API fake que servirá os dados dos produtos na URL: `http://localhost:3001/produtos`.

## Como Usar

Para utilizar:

- Acesse a página principal para ver o site todo.
- Clique em "espiar" ou "comprar agora" para visualizar seus detalhes na página `/produto`.
  
