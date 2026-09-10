const express = require('express');
const router = express.Router();
const { getProfessional } = require('../controllers/professional');

router.get('/', getProfessional);

module.exports = router;
