# Description of the Shapes Area API and how to set it up

This is a RESTful API for calculating the area of different shapes. Cheers :clinking_glasses:

## Getting Started

    There are two methods for getting started with this repo.

    1. Download the .zip file. Extract the contents of the zip file then change directory to the file

    2. Checkout this repo, install dependencies, then start the gulp process with the following:

    ```bash

    > git clone https://github.com/Dev-Manny/shapes-api.git
    > cd shapes-api
    > npm install
    > npm start

    ```

## Generate Environment Variable

simple run:

    ```bash
        cp .env.example .env
    ```

in your terminalof the the root directory

## Features

- Controller
- Model
- Server Responses

## Migration:

## RUN

To run a migration use:

```bash
Sequelize db:migrate
```

## Undo Migration:

```bash
sequelize db:migrate:undo:all
```

## PostgresSql:

This project expects that you have postgres installed
need help with installing postgres on mac check :
https://flaviocopes.com/postgres-how-to-install/

except you don't intend to use PostgresSql then edit the configuration dialect in Server -> api -> server -> src -> config -> config.js

## \*bonus postgres:

to create a database with postgres use command

```bash
    createdb shape
```

## To create a model:

```bash
    sequelize model:create --name User --attributes name:string,email:string,password:string
```

- where
  User: the model name,
  Attributes: the table fields and data type structure

## Undo migration

```bash
    sequelize db:migrate:undo:all
```

## One to many association

in your users model in models -> user add

```bash
   User.hasMany(models.Result, {
           foreignKey: 'user_id',
       });
       };
       return User;
```

- where Result is another model you must have created.

- In a case where ResultModel is another model
  So we must have done this : sequelize model:create --name Result --attributes shape:string,dimension:json,result:double

Then that means we must edit out Result model to be :

```bash
       Result.associate = (models) => {
       // associations can be defined here
       Result.belongsTo(models.User, {
           foreignKey: 'user_id'
       });
       };
       return Result;
```
