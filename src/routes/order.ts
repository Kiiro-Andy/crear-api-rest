import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";

//En esta ruta solo accederan las personas que tengan sesion activa...
// y un JWT valido

const router = Router();

router.get('/', checkJwt, getItems )

export { router };
