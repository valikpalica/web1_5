const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use('/',require('./server'));
app.listen(8080,()=>{
   console.log('server has been started');
});
