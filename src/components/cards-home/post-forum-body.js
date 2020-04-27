import React from 'react'
import Report from '../report/report'

const PostBody = ({ post }) => (
  <div>
    <div className='forum-post-title'> {post.title} </div>
    <p className='forum-post-body'> {post.body}</p>
    <div className='actions' style={{ width: '100%', display: 'flex', top: '16px', position: 'relative' }}>
      <button className='post-forum-reply-button'>Reply</button>
      <div className='space' />
      <a className='star'><img src='/svg/star.svg' style={{ width: '20px', position: 'relative', top: '50%', transform: 'translate(0,-50%)' }} /></a>
      <Report />
    </div>
  </div>
)

export default PostBody
