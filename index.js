const express = require('express');
const app=express();

const path=require('path')
const dirpath=path.join(__dirname,'html')

app.use(express.static(dirpath))


app.listen(5000)
