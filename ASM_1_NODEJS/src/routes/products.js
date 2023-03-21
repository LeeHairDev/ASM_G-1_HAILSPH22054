import express from "express";
import { AddProducts, DeleteProducts, UpdateProducts, getAll, getOne } from "../controller/products";

const router = express.Router();

router.get('/products', getAll)

router.get("/products/:id", getOne);
router.post("/products/add", AddProducts);
router.put("/products/:id/edit", UpdateProducts);
router.delete("/products/:id/", DeleteProducts);

export default router;