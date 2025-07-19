import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";
import {authorizeRole} from "../middleware/auth.middleware";

const productRouter: Router = Router();

//Handle Requests
productRouter.get("/all",getAllProducts); //Get All
productRouter.post("/save",authorizeRole('admin'),saveProduct); //Save
productRouter.get("/:id",getProduct);
productRouter.put("/update/:id",authorizeRole('admin'),updateProduct);
productRouter.delete("/delete/:id",authorizeRole('admin'),deleteProduct);
export default productRouter