import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { registrarUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/request.ext.interface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        console.log(user);
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const responsee = await registrarUpload(dataToRegister);
        res.send(responsee);
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};

export { getFile };
