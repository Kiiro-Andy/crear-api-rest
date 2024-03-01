import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/request.ext.interface";


const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "MENSAJE SOLO PARA USUARIOS CON SESION ACTIVA / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getItems };