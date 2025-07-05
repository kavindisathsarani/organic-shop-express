import {Request, Response} from "express";
import * as productService from "../services/product.service"

//Controller function to handle gwt all products


export const getAllProducts = (req: Request, res: Response) => {
    try {
        const products = productService.getAllProducts();
        res.status(200).json(products); //200, 201, 404,400
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

export const saveProduct = (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct)

        if (validationError) {
            res.status(400).json({error: validationError});
            return;
        }

        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export const getProduct = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
        res.status(400).json({error: "Invalid product id"});
        return;
    }
    const product = productService.getProductById(productId);
    if (!product) {
        res.status(404).json({error: "Product not found"});
        return;
    }
    res.status(200).json(product);
}

export const updateProduct = (req: Request, res: Response) => {

}

export const deleteProduct = (req: Request, res: Response) => {

}