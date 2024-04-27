# Memoriae

## [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## Table of Contents:

- [Memoriae](#memoriae)
  - [          ](#----------)
  - [Table of Contents:](#table-of-contents)
  - [Description](#description)
  - [Demo](#demo)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Process](#process)
  - [Usage](#usage)
  - [Links](#links)
  - [License](#license)

## Description

Blog application that allows a user to upload a memory and share with others.

## Demo

![My demo](<./Memoriae%20(2).gif>)

## Technologies

- Mongo
- Express
- NodeJs
- JWT
- React
- Material-UI
- Redux
- Axios
- Google OAuth

## Features

The Memoriae application allows users to upload a picture and write about a
memory they want to share. A user can create an account or log in using Google
authentication. If a user already has an account they can log in under the same
email and password. Only users that have created accounts can upload a memory
and share. If logged in users can interact with other posts by liking and
commenting on others memories shared.

## Process

1. Install necessary dependencies for both client and server side.
2. Set up server using express and connect to a nosql database using mongoDB.
   Once a connection is made to te server, set up models for users and posts to
   indicate what information will be stored on the database. In the sever side
   create a middleware that will handle JWT authentication so the application
   can securely store and handle a user’s data and information. Set up
   controllers for users and posts that will handle data and CRUD operations
   (Create, Reade, Update, Delete). Set up routes for handling various HTTP
   requests related to posts and users in the application, utilizing Express.js
   for routing and middleware for authentication. Use Heroku to host the API
   (.Procfile and .env file are important to run on heroku).
3. The client side is a React application using Axios to connect to the backend
   server data that was hosted on Heroku. Redux is used to manage the state of
   the application. Posts and user authentication action creators and reducers
   are defined to manage state changes. Home will show all posts from newest to
   oldest with a pagination feature. Users can open posts. In order to create a
   post users must create an account in the sign menu. User can manually create
   an account or login through Google authentication. Once logged in users can
   upload posts and interact with other posts by liking and commenting. Users
   can also edit their own posts or delete. A search feature is also implemented
   to help the user find posts.
4. This application is hosted on Hostinger.

## Usage

cd into the backend sever directory

```
cd sever
```

Install dependencies

```
npm install
```

Create a .env file with the following infromation

```
PORT = 5001
CONNECTION_URL =mongodb+srv://jimmyvela93:tigres123@cluster0.wvtpldg.mongodb.net/?retryWrites=true&w=majority
```

Create a .Procfile with the following information

```
web: npm run start
```

Run the server

```
npm run start
```

cd into the frontend client directory

```
cd client
```

Install dependencies

```
npm install
```

Run react app

```
npm run start
```

## Links

Link to GitHub Repository: https://github.com/Jimmy-Vela06/memories-project-MERN

Link to Website: https://memoriae-mern.net/

## License

MIT License

Copyright (c) 2024 Jimmy Vela Jr

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
