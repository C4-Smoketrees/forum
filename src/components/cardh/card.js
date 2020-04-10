import React from 'react'
import CommentContainer from './comment-container'

const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) { }
    }

    return '' // use external default escaping
  }
}).use(require('markdown-it-emoji'))

class Card extends React.Component {
  constructor (props) {
    super(props)

    // states
    this.card = {
      head: 'HEAD', // Topic name needs to passed in here
      tag: '#DEV', // Top tag ie #DEV
      likes: 5, // Number of likes calculated dynamically
      comments: 1, // Number of comments on the post
      name: 'Shizuka', // Who posted the query
      descriptionName: 'Enginner', // What Job description does he give, ex. FullStackDev
      photoLink: ''
    }

    this.markdownContent = markdown.render(props.content)
  }

  render () {
    const markdownContent = this.markdownContent
    return (
      <div className='card-tb'>
        <div className='card-top'>
          <div className='card-top-details'>
            <div className='card-top-details-head'>
              {this.card.head}
            </div>
            <div className='space' />
            <div className='card-top-details-dev'>
              {this.card.tag}
            </div>
          </div>
        </div>
        <div className='writeup'>
          <div className='content markdown' dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </div>
        <div className='read-more'>
          <div className='button'>...Read More</div>
        </div>
        <div className='functions'>
          <div className='like-box'>
            <div className='like'>
              <img src='http://localhost:3000/svg/thumbs-up.svg' />
              <div className='i'>
                {this.card.likes}
              </div>
            </div>
            <div className='like'>
              <img src='http://localhost:3000/svg/message-circle.svg' alt='fuck you' />
              <div className='i'>
                {this.card.comments}
              </div>
            </div>
          </div>
          <div className='head-card'>
            <div className='photo-details'>
              <div className='photo-name'>
                {this.card.name}
              </div>
              <div className='des'>
                {this.card.descriptionName}
              </div>
            </div>
            <img className='photo' src={this.photoLink} />
          </div>
          <div />
        </div>
        <CommentContainer />
      </div>
    )
  }
}

export default Card
