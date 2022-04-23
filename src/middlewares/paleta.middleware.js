const mongoose = require('mongoose');

// Validação de id
const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({
      message: 'Id não valido',
    });
  }
  next();
};

// Validação de objeto
const validObcjectBody = (req, res, next) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({
      mensagem: 'Preencha todos os campos!',
    });
  }

};

module.exports = {
    validId,
    validObcjectBody,
}
