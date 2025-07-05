import express, {Express, Request, Response} from 'express';

// 1. Initialize the Express App
const app = express();

// 2. Define Middlewares
/*Instruct to parse the request
payload data to be converted to JSON format*/
// app.use(express.json());

// 3. Define a simple HTTP request
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});

export default app
