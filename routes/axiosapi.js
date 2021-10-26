const express = require("express");
const router = express.Router();

const { showEmployee } = require('../axios/showEmployee')
const { showEmployeeID } = require('../axios/showEmployeeID')
const { deleteEmployee } = require('../axios/deleteEmployee')
const { addEmployee } = require('../axios/addEmployee')
const { updateEmployee } = require('../axios/updateEmployee')

router.get('/showEmployee', showEmployee);
router.get('/showEmployeeID', showEmployeeID);
router.post('/createEmployee', addEmployee);
router.delete('/deleteEmployee', deleteEmployee);
router.put('/updateEmployee', updateEmployee);

module.exports = router;