import React from 'react'

class CommentBox extends React.Component {
  constructor (props) {
    super(props)

    // states
    this.commentCard = {
      name: 'Shizuka',
      descriptionUser: 'Engineer',
      photo: '',
      comment: ' HEllo'
    }
  }

  render () {
    return (
      <div className='comment-box'>
        <div className='comment-box-header' style={{ display: 'flex' }}>
          <img className='comment-photo' />
          <div className='user-comment'>
            <div className='user-comment-name'>
              {this.commentCard.name}
            </div>
            <div className='user-des'>
              {this.commentCard.descriptionUser}
            </div>
          </div>
        </div>
        <div className='comments'>
          {this.commentCard.comment}
        </div>
        <div className='comment-like'>
          <img className='func' src='http://localhost:3000/svg/thumbs-up.svg' />
          <img className='func' src='http://localhost:3000/svg/message-circle.svg' />
        </div>
      </div>
    )
  }
}

export default CommentBox
