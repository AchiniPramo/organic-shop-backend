import express ,{Express , Request, Response} from 'express';


// 1. Initialize the Express App
const app = express();

// 2. Define the application port
const port = 3000;

// 3. Define a simple HTTP request
app.get('/', (req, res) => {
        res.send('Hello Express!');
});

// 4. Instruct the express app to listen on port 3000
app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
});