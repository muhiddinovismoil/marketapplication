import {
    createCategoryService,
    findCategoryService,
    updateCategoryService,
    deleteCategoryService,
} from "../service/index.js";

export const createCategoryController = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const getCategoryByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const result = await findCategoryService(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const updateCategoryByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const result = await updateCategoryService(req.body, id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const deleteCategoryByIdController = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const result = await deleteCategoryService(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
