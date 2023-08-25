import { Request, Response, Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);

export { router };
