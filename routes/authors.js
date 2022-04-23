const express = require('express')
const router = express.Router()

// All author Route
router.get('/', (req, res) => {
    res.render('authors/index')
})  

// New Author Route
router.get('/new')