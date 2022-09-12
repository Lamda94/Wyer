//contacts routes
const express = require('express');
const router = express.Router();
const contactController = require("../Controllers/contact.controller");

router.get('/', contactController.getContacts);

router.post('/', contactController.saveContact);

router.post('/addComment/', contactController.addComment);

router.post('/addTask', contactController.addTask);

router.delete('/delete/:id', contactController.deleteContact);

module.exports = router;