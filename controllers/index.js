const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api/home-routes')

router.use('/api', apiRoutes);
router.use('./api/home-routes.js', homeRoutes)

module.exports = router;
