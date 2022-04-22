const paletaService = require('../services/paleta.service');
const mongoose = require('mongoose');

// Controller for all paletas
const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();

  if (allPaletas.lenght === 0) {
    return res.status(404).send({ message: 'não há paletas cadastradas' });
  }
  res.send(allPaletas);
};

// Controller for one paleta
const findByIdPaletasController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await paletasService.findByIdPaletasService(idParam);
  res.send(chosenPaleta);
};

// Controller for create paleta
const createPaletaController = async (req, res) => {
  const paleta = req.body;
  const newPaleta = await paletasService.createPaletaService(paleta);
  res.send(201).send(newPaleta);
};

// Controller for update paleta
const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const editPaleta = req.body;
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    editPaleta,
  );
  res.send(updatedPaleta);
};

// Controller for delete paleta por id
const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletasController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
