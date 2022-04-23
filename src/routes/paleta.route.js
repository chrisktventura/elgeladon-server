const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');
const {validId, validObcjectBody} = require('../middlewares/paleta.middleware');

// GET all paletas
route.get('/all-paletas', controllerPaletas.findAllPaletasController);
// GET chosen paleta
route.get('/paleta/:id', validId, controllerPaletas.findByIdPaletasController);
// POST create paleta
route.post('/create-paleta', validObcjectBody, controllerPaletas.createPaletaController);
// PUT update paleta por id
route.put('/update-paleta/:id',validId, validObcjectBody, controllerPaletas.updatePaletaController);
// DELETE paleta por id
route.delete('/delete-paleta/:id', validId, controllerPaletas.deletePaletaController);

module.exports = route;
