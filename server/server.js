const express = require('express')
const app = express()

const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

app.get('/', (req, res) => {
    console.log('receiving request');
    res.json({'message':'Hello from server!'})
})

app.listen(PORT, () => {
    console.log('Server running');
})