# Roberto - Avaliação

## Descrição 
Sistema desenvolvido para avaliação.

### Frameworks e ferramentas

#### Adonis
Framework nodejs. Utilizei ele, pois acredito que se adapta melhor para o tipo de aplicação que foi proposta. 
https://adonisjs.com/.

Como o Adonis não tem suporte nativo para o mongodb, foi necessário adicionar o pacote `lucid-mongo` para ele.

#### React
Framework js para o frontend do sistema.

#### React Semantic UI
Pacote de integração com o Semantic UI.  
https://react.semantic-ui.com/  
https://semantic-ui.com/




## Banco de dados

Rodar o mongo:  
`service mongod start`

Importar usuário para o mongodb:  
`mongoimport --db adonis --collection usersteste --file ~/Downloads/users.json --jsonArray
`

## Instalar dependências

Instalar o Adonis:  
`npm i -g @adonisjs/cli`

Instalar dependências do backend:  
`cd backend`  
`npm install`

Instalar dependências do frontend:  
`cd frontend`  
`npm install`

## Criação do arquivo de variaveis de ambiente.

Crie dentro da pasta backend um arquivo ".env" com o conteúdo abaixo.

<pre>
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=Iconic
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
HASH_DRIVER=bcrypt
</pre>

Gere a chave do sistema:  
`adonis key:generate`

## Executar a aplicação

Para executar o backend com adonis:  
`cd backend`  
`adonis serve --dev`  
 
Observação
Utilizar a porta padrão do adonis. Para que o react encontre sem a necessidade de fazer alteração nos paths.


Para executar o frontend com react:  
`cd frontend`  
`adonis serve --dev`





