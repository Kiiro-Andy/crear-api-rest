import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertToy, getToys, getToy, updateToy, deleteToy } from "../services/item.service";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getToy(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
     handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getToys();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateToy(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = insertToy(body);
      res.send(responseItem);  
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteToy(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export {
getItem,
getItems,
updateItem,
postItem,
deleteItem};