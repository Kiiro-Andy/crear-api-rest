import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";


const registrarUpload = async ( {fileName, idUser, path}:Storage ) => {
    const responseItem = await StorageModel.create({fileName, idUser, path});
    return responseItem;
};

export { registrarUpload };