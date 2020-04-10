import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Blog from '../components/pages/blog/blog'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<Blog />)
  res.status(200).render('pages/Blog', { reactApp: reactComp, url: req.app.locals.url })
})

export default router
