import { Request, Response, Router } from 'express';
import { CreateUserController } from './controller/user/CreateUserController';
import { ListUserController } from './controller/user/ListUserController';
import { DeleteUserController } from './controller/user/DeleteUserController';
import { UpdateUserController } from './controller/user/UpdateUserController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);
router.get('/users', new ListUserController().handle);
router.put('/update', new UpdateUserController().handle);
router.delete('/delete/:id', new DeleteUserController().handle);

export { router };
