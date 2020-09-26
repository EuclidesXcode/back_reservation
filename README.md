# Back End Teste ZOOX

## Antes de prosseguir veja o video explicativo de fluxo do sistema rodando sem erros: https://youtu.be/scCo69cq2iY

## Instalar dependencias
```
npm i
```

### Compilação em dev
```
node app.js 

OBS: utlizei a lib "Nodemon" instalado globalmente em desenvolvimento.

```
### Configuração dotEnv: Configurar .env inserindo a porta que o sistema ira rodar e o link para o banco de dados mongoDB, exemplo:
```
PORT='NUMERO_DA_PORTA'
DB='http://url_do_banco_de_dados/nome_do_banco'
```

### Ferramentas utilizadas:
```
Node.js, Javascript, Express, cors, bodyParser, bcrypt, jsonwebtoken.
```
### Rotas que necessitam de authenticação por JWT
```
1 - Estados
2 - Cidades
```
### Endpoint de Authenticação e Usuários para acesso

##### Endpoint para criar usuário de acesso
```
METHOD: POST
url: http://{{base_url}}/user

REQUEST BODY 
{
nickName: string,
password: string
}

```
##### Endpoint para acessar o sistema "LOGIN"
```
METHOD: POST
url: http://{{base_url}}/auth
REQUEST BODY 
{
nickName: string,
password: string
}
```
##### Endpoint para atualizar senha de acesso
```
METHOD: PUT
url: http://{{base_url}}/user/:id

REQUEST BODY 
{
password: string
}
```
##### Endpoint para deletar usuário de acesso
```
METHOD: DELETE
url: http://{{base_url}}/user/:id
```

### Endpoint de Estados

##### Endpoint para listar todos estados
```
METHOD: POST
url: http://{{base_url}}/states/get

REQUEST BODY 
{
page: number
}

```
##### Endpoint para filtrar estados
```
METHOD: POST
url: http://{{base_url}}/states/filter
```
1 opção de filtro
```
REQUEST BODY 
{
name: string
}
```
2 opção de filtro
```
REQUEST BODY 
{
initials: string
}

```
##### Endpoint para inserir estados
```
METHOD: POST
url: http://{{base_url}}/states

REQUEST BODY 
{
name: string,
initials: string
}
```
##### Endpoint para atualizar estado
```
METHOD: PUT
url: http://{{base_url}}/states/:id

REQUEST BODY 
{
name: string,
initials: string
}
```
##### Endpoint para deletar estado
```
METHOD: DELETE
url: http://{{base_url}}/states/:id

```


### Endpoint de Cidades

##### Endpoint para listar todas cidades
```
METHOD: POST
url: http://{{base_url}}/cities/get

REQUEST BODY 
{
page: number
}

```
##### Endpoint para filtrar cidades
```
METHOD: POST
url: http://{{base_url}}/cities/filter
```
1 opção de filtro
```
REQUEST BODY 
{
name: string
}
```
2 opção de filtro
```
REQUEST BODY 
{
stateId: string
}

```
##### Endpoint para inserir cidades
```
METHOD: POST
url: http://{{base_url}}/cities

REQUEST BODY 
{
name: string,
initials: string
}
```
##### Endpoint para atualizar cidades
```
METHOD: PUT
url: http://{{base_url}}/cities/:id

REQUEST BODY 
{
name: string,
initials: string
}
```
##### Endpoint para deletar cidade
```
METHOD: DELETE
url: http://{{base_url}}/cities/:id

```





