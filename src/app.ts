import express, { Express } from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';
import contactRoutes from './routes/contact.routes';

const app: Express = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
    origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

// ✅ Enable CORS
app.use(cors(corsOptions));

// ✅ Register routes
app.use('/api/products', productRoutes);
app.use('/api/contacts', contactRoutes);

export default app;
