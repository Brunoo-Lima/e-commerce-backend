import { Request, Response, Router } from 'express';
import { isAuthenticated } from './middlewares/isAuthenticated';

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

import { CreateSaleController } from './controller/sale/CreateSaleController';
import { ListSaleController } from './controller/sale/ListSaleController';
import { DeleteSaleController } from './controller/sale/DeleteSaleController';
import { UpdateSaleController } from './controller/sale/UpdateSaleController';
import { AuthUserController } from './controller/user/AuthUserController';

const router = Router();

//--ROTAS USER--
router.post('/user', new CreateUserController().handle);
router.post('/me', new AuthUserController().handle);
router.get('/user', isAuthenticated, new ListUserController().handle);
router.put('/user/:id', isAuthenticated, new UpdateUserController().handle);
router.delete('/user/:id', isAuthenticated, new DeleteUserController().handle);

//--ROTAS PRODUCT--
router.post('/product', isAuthenticated, new CreateProductController().handle);
router.get('/product', isAuthenticated, new ListProductController().handle);
router.put(
  '/product/:id',
  isAuthenticated,
  new UpdateProductController().handle
);
router.delete(
  '/product/:id',
  isAuthenticated,
  new DeleteProductController().handle
);

//--ROTAS CATEGORY--
router.post(
  '/category',
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get('/category', isAuthenticated, new ListCategoryController().handle);
router.put(
  '/category/:id',
  isAuthenticated,
  new UpdateCategoryController().handle
);
router.delete(
  '/category/:id',
  isAuthenticated,
  new DeleteCategoryController().handle
);

//--ROTAS SALES--
router.post('/sale', isAuthenticated, new CreateSaleController().handle);
router.get('/sale', isAuthenticated, new ListSaleController().handle);
router.put('/sale/:id', isAuthenticated, new UpdateSaleController().handle);
router.delete('/sale/:id', isAuthenticated, new DeleteSaleController().handle);

export { router };
