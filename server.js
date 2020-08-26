const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/font/book.html'));
});
router.get('/film',(req,res)=>{
   res.sendFile(path.join(__dirname,'public/font/film.html'));
});
module.exports = router;