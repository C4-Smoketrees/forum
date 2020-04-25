import express from 'express'
import compression from 'compression'
import path from 'path'

// Server var
const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')

// set url
app.locals.url = 'http://localhost:3000'

// Middleware
app.use(compression())

app.use(express.static(path.join(__dirname, 'static', 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user-profile'))
app.use('/signup', require('./routes/sign-up'))
app.use('/createThread', require('./routes/create-thread'))
app.use('/indexForum', require('./routes/index-forum'))
app.use('/postForum', require('./routes/post-forum'))
app.use('/login', require('./routes/login'))
app.use('/searchPage', require('./routes/search-page'))

const port = process.env.PORT || 3000

app.listen(port, function listenHandler () {
  console.info(`Running on ${port}`)
})
