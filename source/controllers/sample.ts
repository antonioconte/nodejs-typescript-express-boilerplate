import { NextFunction, Request, Response } from 'express';
import config, { DefaultParameter } from '../config/config';
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

const sayHello = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query;
    const defParam: DefaultParameter = config.default;
    return res.status(200).json({
        message: 'hello ' + (name ? name : defParam.name)
    });
};

export default { serverHealthCheck, sayHello };
