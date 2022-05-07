const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');
const {
  validId,
  validObcjectBody,
} = require('../middlewares/paleta.middleware');

const controllerCarrinho = require('../controllers/carrinho.controller');
route.get('/all-carrinho', controllerCarrinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',
  controllerCarrinho.createManyItemsCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarrinho.deleteAllItemsCarrinhoController,
);




// Rotas para Swagger
route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

// GET all paletas
route.get('/all-paletas', controllerPaletas.findAllPaletasController);
// GET chosen paleta
route.get('/one-paleta/:id', validId, controllerPaletas.findByIdPaletasController);
// POST create paleta
route.post(
  '/create-paleta',
  validObcjectBody,
  controllerPaletas.createPaletaController,
);
// PUT update paleta por id
route.put(
  '/update-paleta/:id',
  validId,
  validObcjectBody,
  controllerPaletas.updatePaletaController,
);
// DELETE paleta por id
route.delete(
  '/delete-paleta/:id',
  validId,
  controllerPaletas.deletePaletaController,
);



module.exports = route;
