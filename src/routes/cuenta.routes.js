const {Router} = require('express');
const { getAllCuentas } = require ('../controllers/cuenta.controller')
const router = Router();


router.get('/Cuenta', getAllCuentas )

module.exports = router;