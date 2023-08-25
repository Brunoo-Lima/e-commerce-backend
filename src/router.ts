import { Request, Response, Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { ListUserController } from './controller/user/ListUserController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);
router.get('/users', new ListUserController().handle);

export { router };
