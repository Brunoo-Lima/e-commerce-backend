import { Request, Response, Router } from 'express';

import { CreateUserController } from './controller/user/CreateUserController';
import { ListUserController } from './controller/user/ListUserController';
import { DeleteUserController } from './controller/user/DeleteUserController';
import { UpdateUserController } from './controller/user/UpdateUserController';

import { CreateProductController } from './controller/product/CreateProductController';
import { ListProductController } from './controller/product/ListProductController';
import { UpdateProductController } from './controller/product/UpdateProductController';
import { DeleteProductController } from './controller/product/DeleteProductController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);
router.get('/users', new ListUserController().handle);
router.put('/user/update', new UpdateUserController().handle);
router.delete('/user/delete', new DeleteUserController().handle);

//--ROTAS PRODUCT--
router.post('/product', new CreateProductController().handle);
router.get('/products', new ListProductController().handle);
router.put('/product/update', new UpdateProductController().handle);
router.delete('/product/delete', new DeleteProductController().handle);

export { router };
