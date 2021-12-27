# Digaflix
## Site de upload de Filmes

Crie sua conta e faça upload de filmes

## Software

- Laravel 8
- vue 2
- JWT
- Bootstrap 5

## Installation

Faça o clone do repositorio

```sh
cd digaflix
docker-compose build
docker-compose up -d
docker-compose exec laravel-vue bash
chmod -R 777 [user] .
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan storage:link
npm install
npm run dev
```

## Plugins


| Plugin | README |
| ------ | ------ |
| vue-multselect | https://github.com/shentao/vue-multiselect |
| tymon/jwt-auth | https://jwt-auth.readthedocs.io/en/docs/laravel-installation/ |

## Utilização

Crie um database em localhost:8081 Para conectar: 

- Servidor : mysqldb
- Utilizador : root
- Palavra-passe : laravel

Configure o arquivo env. com as configurações de database e email, para validação da conta, use o maiotrap para configuração de email

![ezgif com-gif-maker](https://user-images.githubusercontent.com/96316977/147501717-73c5ba9b-0270-4370-b1a0-59f300f26fbb.png)

Depois no terminal

```sh
cd digaflix
docker-compose exec laravel-vue bash
php artisan migrate
php artisan config:cache
```

Acesse http://localhost:8000/

Faça o Cadastro em Registrar, confirme seu email, faça o login, cadastre filmes de até 5mb, ordene a lista de filmes

![ezgif com-gif-maker](https://user-images.githubusercontent.com/96316977/147504922-e61c22d7-32d7-4c4d-b258-29a683fac002.gif)

Validação de Formulario e Tamanho de Arquivo

![ezgif com-gif-maker](https://user-images.githubusercontent.com/96316977/147505021-64ed260d-5102-4865-a7dc-e198221a3b22.gif)

Responsividade



![ezgif com-gif-maker](https://user-images.githubusercontent.com/96316977/147505061-ac3dfefd-3958-499b-bc57-4f626c40b86f.png)