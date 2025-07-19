import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const productRouter: Router = Router();

//Handle requests
productRouter.get("/all", getAllProducts); //Get all
productRouter.post("/save", authorizeRoles('admin'), saveProduct); //Save
productRouter.get("/:id", getProduct); //Get by id
productRouter.put("/update/:id", authorizeRoles('admin'), updateProduct); //Update
productRouter.delete("/delete/:id", authorizeRoles('admin'), deleteProduct); //Delete

export default productRouter;
