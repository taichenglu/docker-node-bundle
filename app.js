const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))

// routes
const index = require('./routes/index')

// use routes
app.use('/', index)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  if (req.url === '/favicon.ico') {
    console.log(req.url)
    res.end()
    return
  }
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// dev error handler
// will print stacktrace
if (app.get('env') === 'dev') {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({
      message: 'error'
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.json({
    message: 'error'
  })
})

module.exports = app
