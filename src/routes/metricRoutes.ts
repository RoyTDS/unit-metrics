const express = require('express');
const { createMetric, getMetricsByType, getChartData, deleteMetric } = require('../controllers/metricController');

const router = express.Router();

router.post('/', createMetric);
router.get('/', getMetricsByType);
router.get('/chart', getChartData);
router.delete('/:id', deleteMetric);
export = router;