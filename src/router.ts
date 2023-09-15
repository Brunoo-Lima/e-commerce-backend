import { Request, Response, Router } from 'express';

import { CreateUserController } from './controller/user/CreateUserController';
import { ListUserController } from './controller/user/ListUserController';
import { DeleteUserController } from './controller/user/DeleteUserController';
import { UpdateUserController } from './controller/user/UpdateUserController';

import { CreateProductController } from './controller/product/CreateProductController';
import { ListProductController } from './controller/product/ListProductController';
import { UpdateProductController } from './controller/product/UpdateProductController';
import { DeleteProductController } from './controller/product/DeleteProductController';

import { CreateCategoryController } from './controller/category/CreateCategoryController';
import { ListCategoryController } from './controller/category/ListCategoryController';
import { DeleteCategoryController } from './controller/category/DeleteCategoryController';
import { UpdateCategoryController } from './controller/category/UpdateCategoryController';

import { CreateSalesController } from './controller/sales/CreateSalesController';
import { ListSalesController } from './controller/sales/ListSalesController';
import { DeleteSalesController } from './controller/sales/DeleteSalesController';
import { UpdateSalesController } from './controller/sales/UpdateSalesController';
import { AuthUserController } from './controller/user/AuthUserController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);
router.post('/me', new AuthUserController().handle);
router.get('/user', new ListUserController().handle);
router.put('/user/:id', new UpdateUserController().handle);
router.delete('/user/:id', new DeleteUserController().handle);

//--ROTAS PRODUCT--
router.post('/product', new CreateProductController().handle);
router.get('/product', new ListProductController().handle);
router.put('/product/:id', new UpdateProductController().handle);
router.delete('/product/:id', new DeleteProductController().handle);

//--ROTAS CATEGORY--
router.post('/category', new CreateCategoryController().handle);
router.get('/category', new ListCategoryController().handle);
router.put('/category/:id', new UpdateCategoryController().handle);
router.delete('/category/:id', new DeleteCategoryController().handle);

//--ROTAS SALES--
router.post('/sales', new CreateSalesController().handle);
router.get('/sales', new ListSalesController().handle);
router.put('/sales/:id', new UpdateSalesController().handle);
router.delete('/sales/:id', new DeleteSalesController().handle);

export { router };
