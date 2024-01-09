const exp = require('express')

const {getAllProducts , getAllProductsTesting} = require('../controllers/products');

const router = exp.Router();

router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTesting)

module.exports = router;    