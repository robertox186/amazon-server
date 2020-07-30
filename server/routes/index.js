const express = require('express');
const router=express.Router();
router.use('/registro',require('./registro'));
router.use('/login',require('./login'));
router.use('/new',require('./producto'));
router.use('/select',require('./select_producto'));
router.use('/pago',require('./pago'))
module.exports=router;