# Crud NestJS

## Description
simple crud with nestjs

## Installation
- prepare your `Postgres Database`
- `cp .env.example .env` then connect your db
- `yarn`
- `yarn start:dev`
- Api doc : `localhost:3000/documentation`


## My Notes
### Commands
```bash
nest g module modules/user
nest g controller modules/user
nest g service modules/user

nest g s user/services/user --flat --no-spec
nest g co user/controllers/user --flat --no-spec
```

### Ref
https://github.com/nestjsx/crud/wiki/Controllers#description