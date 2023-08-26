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

const router = Router();

//--ROTAS USER--
router.post('/users', new CreateUserController().handle);
router.get('/users', new ListUserController().handle);
router.put('/users/update', new UpdateUserController().handle);
router.delete('/users/delete', new DeleteUserController().handle);

//--ROTAS PRODUCT--
router.post('/products', new CreateProductController().handle);
router.get('/products', new ListProductController().handle);
router.put('/products/update', new UpdateProductController().handle);
router.delete('/products/delete', new DeleteProductController().handle);

//--ROTAS CATEGORY--
router.post('/categories', new CreateCategoryController().handle);
router.get('/categories', new ListCategoryController().handle);
router.put('/categories/update', new UpdateCategoryController().handle);
router.delete('/categories/delete', new DeleteCategoryController().handle);

//--ROTAS SALES--
router.post('/sales', new CreateSalesController().handle);
router.get('/sales', new ListSalesController().handle);
router.put('/sales/update', new UpdateSalesController().handle);
router.delete('/sales/delete', new DeleteSalesController().handle);

export { router };
