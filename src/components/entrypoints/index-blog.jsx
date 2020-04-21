import React from 'react'

import { hydrate } from 'react-dom'

import IndexBlog from '../pages/index-blog/index-blog.jsx'

hydrate(<IndexBlog />, document.getElementById('root'))
