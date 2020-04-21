import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import IndexBlog from '../components/pages/index-blog/index-blog'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactComp = renderToString(<IndexBlog />)
  res.status(200).render('pages/index-blog', { reactApp: reactComp, url: req.app.locals.url })
})

module.exports = router
