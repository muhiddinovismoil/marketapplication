import {
    createMarketService,
    findMarketService,
    updateMarketService,
    deleteMarketService,
} from "../service/index.js";

export const createMarketController = async (req, res, next) => {
    try {
        const result = await createMarketService(req.body);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const getMarketByIdController = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await findMarketService(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const updateMarketByIdController = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await updateMarketService(req.body, id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
export const deleteMarketByIdController = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await deleteMarketService(id);
        if (result.error) {
            return res.status(409).send(result.message);
        }
        res.send(result);
    } catch (error) {
        next(error);
    }
};
