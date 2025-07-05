import express, {Express, Request, Response} from 'express';
import productRoutes from "./routes/product.routes";

// 1. Initialize the Express App
const app = express();

// 2. Define Middlewares
/*Instruct to parse the request
payload data to be converted to JSON format*/
app.use(express.json());
app.use("/api/products, productRoutes");

// 3. Define a simple HTTP request
/*app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});*/

export default app
