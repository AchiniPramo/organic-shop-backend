import express, {Express, Request, Response} from 'express';
import productRoutes from "./routes/product.routes";
import cors from "cors";
import contactRoutes from "./routes/contact.routes";



// 1. Initialize the Express App
const app = express();

// 2. Define Middlewares
/*Instruct to parse the request
payload data to be converted to JSON format*/
app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173'
];
// app.use(cors());// Enable/Allow CORS here

const corsOptions = {
    origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use("/api/products", productRoutes);
app.use("/api/contacts", contactRoutes);

// 3. Define a simple HTTP request
/*app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
});*/

export default app
