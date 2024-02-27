import express from 'express'

import TodoRouter from './routes/todos'

import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use(TodoRouter)

console.log('test')
app.listen(3000, () => {
    console.log('Running')
})