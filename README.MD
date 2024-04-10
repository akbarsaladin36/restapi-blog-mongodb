<h1 align="center">Express - Rest API Blog with MongoDB</h1>

This API is created by me to implement REST API feature for blog. With this API, you can free to use, change, and add any request that you need for your backend website. This API use Express as Nodejs framework and Mongodb as store database. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.16.x-green.svg?style=rounded-square)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v.5.x-green.svg?style=rounded-square)](https://mongodb.com/)


## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)
5. <a href="https://www.mongodb.com/try/download/community">MongoDB</a>

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Mongodb can using MongoDB Atlas from website and Third-party tool like MongoDB Compass, etc.
5. Open Postman desktop application or Chrome web app extension that has installed before
6. Choose HTTP Method and enter request url.(ex. localhost:3000/)
7. You can see all the end point [here](https://documenter.getpostman.com/view/14780095/UyrGAZQ6)
8. Type `npm run dev` to activated the server.

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_PORT= <YOUR SERVER PORT>
DB_MONGOURI= <YOUR MONGODB DATABASE URL>
JWT_SECRETKEY = <YOUR JWT SECRET KEY>
JWT_EXPIRESTIME = <YOUR JWT EXPIRES TIME>

```

## Feature

1. Login and Register API
2. CRUD Users API
3. CRUD Blogs API
4. CRUD Comments API (On Progress)

## License

© [Muhammad Akbar Saladin Siregar](https://github.com/akbarsaladin36/)
