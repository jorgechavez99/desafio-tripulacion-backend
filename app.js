const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(cors())


app.listen(port, ()=>{
    console.log(`Puerto ${port} a la escucha`)
})
