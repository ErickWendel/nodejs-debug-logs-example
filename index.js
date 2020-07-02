
const log = require('debug')('api:main')
const app = require('express')()
const { sum } = require('./math')

app.get('/', (req, res) => {
    log('request at', new Date().toISOString())
    const num1 = Math.floor(Math.random() * 100)
    const num2 = Math.floor(Math.random() * 100)
    const result = sum(num1, num2)
    return res.send(`${num1} + ${num2} is: ${result}`)
})

app.listen(3000, ( ) => console.log('app running at 3000'))

