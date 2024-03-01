import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/request.ext.interface';


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if (!isUser) {
            res.status(401);
            res.send("JWT_NO_VALIDO");
        }else{
            req.user = isUser;
            next();
        }
        
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }

};



export { checkJwt };