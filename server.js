
const express = require('express')
const app = express()
const sing = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')
const userListItemRoutes = require('./routes/api/users')

const path = require('path')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
sing.use(cors())
sing.use(morgan('tiny'))
sing.use(bodyParser.json())



const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];

mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/bucketListItems', bucketListItemRoutes)
app.use('/api/users', userListItemRoutes)
sing.use('/api/users', userListItemRoutes)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
         
    })
}


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))