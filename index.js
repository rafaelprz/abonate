const express = require('express')
const { readFile } = require('fs')

app = express()

app.get('/', (request, response) => {
    readFile('index.html', 'utf-8', (err, html) => {
        if (err) {
            response.status(500)
        }
        response.send(html)
    })
})


app.get('/productos', (request, response) => {
    readFile('productos.html', 'utf-8', (err, html) => {
        if (err) {
            response.status(500)
        }
        response.send(html)
    })
})


app.listen(process.env.PORT || 3000, () => { console.log('eeeee') })