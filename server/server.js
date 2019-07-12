const express = require('express')
const upload = require('./upload')
const cors = require('cors')


const server = express()
const port = 3000

//allow any domain
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

//use cors options
server.use(cors(corsOptions))

//create get route
server.get('/', (requst, response) => response.send("hi there ^.^"))

//create post route
server.post('/upload', upload)

//start server
server.listen(port, () => console.log(`Server listening on port ${port}!`))