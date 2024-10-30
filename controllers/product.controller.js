import {
    createProductService,
    findProduct,
    updateProduct,
    deleteProduct,
    searchProductService,
} from "../service/index.js";

export const createProductController = async (req, res, next) => {
    try {
        const result = await createProductService(req.body);

        if (result.error) {
            return res.status(409).send(result.message);
        }

        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const searchProductController = async (req, res, next) => {
    try {
        const result = await searchProductService(req.body);

        if (result.error) {
            return res.status(409).send(result.message);
        }

        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const getProductsByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const result = await findProduct(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }

        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const updateProductByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const body = req.body;
        const result = await updateProduct(body, id);
        if (result.error) {
            return res.status(409).send(result.message);
        }

        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const deleteProductByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const result = await deleteProduct(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
