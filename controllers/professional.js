const professionalData = require('../data/professional.json');

// GET /professional - return all data the frontend needs to render the page
const getProfessional = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(professionalData);
};

module.exports = { getProfessional };
