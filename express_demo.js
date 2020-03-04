const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => console.log(`server started on port: ${port}`))

app.get('/', (req, response) => {
    response.send('hello, from express!!!')
})