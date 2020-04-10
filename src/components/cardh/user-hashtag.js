import React from 'react'

class Hashtag extends React.Component {
  constructor (props) {
    super(props)

    this.numberHash = props.numberHash
    this.arrayHash = props.arrayHash
  }

  render () {
    const hashes = this.arrayHash
    return (
      <div className='hashtag-box'>
        <div className='hash-head'>
          Followed Hashtags
        </div>
        <div className='hash-div'>
          <div className='hashes'>
            {hashes.map((value, index) => {
              return (
                <div key={index} className='text'>
                  {value}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Hashtag
