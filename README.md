# Project description:
Developed a simple chat app where multiple people can chat with each other on a chat screen.

# Getting started

## Clone the repository
```
https://github.com/Brothin/Chat.git
```
```
cd Chat
```

## You need
- Database (MongoDB).

## Create your MongoDB account and database/cluster
• Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

• Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change <password> with your own password.

• Add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes).

## Create .env file
Create a .env file in the backend folder to store your credentials. This file will store environment variables for the project to run.
```
MONGO_URL = 'mongodb+srv://<username>:<password>@mongodburlhere'
```

## Installation
To install and run this project - 
Install dependencies using npm in frontend folder and run client side of application.
```
cd frontend
npm install
npm start
```
Install dependencies using npm in backend folder and run server side of application.
```
cd backend
npm install
npm start
```
