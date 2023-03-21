import express from 'express';
import mongoose from 'mongoose';
import ProductRouter from './routes/products';

const app = express();

app.use(express.json());

app.use("/api", ProductRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17302");

export const viteNodeApp = app;