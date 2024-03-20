const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const multer = require('multer')
const xlxsPopulate = require('xlsx-populate')
const Workbook = require('xlsx-populate/lib/Workbook')


const port = process.env.PORT

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(cors())


//=================crear un excel====================
// xlxsPopulate.fromBlankAsync().then(workbook => {
//     workbook.sheet(0).cell('A1').value('Hola Mundo');
//     return workbook.toFileAsync("./files/pruebaExcel.xlsx")
// })
//=================crear un excel====================


//===============leer archivo excel ==================

const leerXlsx = async () => {

    const workbook = await xlxsPopulate.fromFileAsync('./files/pruebaExcel.xlsx')
    const value = workbook.sheet('Sheet1').usedRange().value()
    console.log(value)
}

leerXlsx()


//===============leer archivo excel ==================
//./files/datos_maquina_vending_prueba.xlsx






//=================MULTER===========================
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './files')
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage })


app.post('/upload', upload.single('file'), (req, res) => {

    console.log(req.body)
    console.log(req.file)
})
//=================MULTER===========================


app.listen(port, () => {
    console.log(`Puerto ${port} a la escucha`)
})
