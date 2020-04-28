import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Error from '../components/pages/error/error'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Error />)
  res.status(200).render('pages/error', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
