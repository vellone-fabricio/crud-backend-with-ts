## Test API-CRUD
- autor: Fabricio Vellone
- Tecnlogias: TypeScript -> TypeORM (como ORM) e utilizando Postgres
### Requerimentos
- Conter uma versao do [docker](https://www.docker.com/get-started) e do [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable);
- Instalar todas dependencias:
```
yarn install
```
ou
```
make install
```
- Em seguida, é possivel inicializar/parar projeto através do arquivo Makefile:
  - ```make start``` e ```make stop```
  - Também é possivel lançar os containers com o seguinte comando na raiz do projeto:
    - subir container:
    ```
    docker-compose up -d && yarn typeorm migration:run
    ```
    - parar container:
    ```
    docker-compose down
    ```


## Rotas disponiveis
- Todos endpoints foram mapeados através da library Swagger, podendo ser encontrados através da rota:
```
localhost:3333/api-docs
```
