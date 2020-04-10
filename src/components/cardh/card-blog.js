import React from 'react'

const card = (props) => { // the props passed herer will contain the rendering text and the whether it is thread or logo
  return (
    <div className='blog-page'>
      <div className='dev-div'>
        <div className='details'>
          <div className='head'>
            <h1>
              -sudo dev info
            </h1>
          </div>
          <div className='head-details'>
            <p>Describe this kind sir!!</p>
          </div>
          <div className='explore'>
            <button className='explore-btn'>EXPLORE</button>
          </div>
        </div>
        <div className='div-svg'>
          <img src='http://localhost:3000/svg/dev.svg' />
        </div>
      </div>
      <div className='dev-div'>
        <div className='div-svg'>
          <img src='http://localhost:3000/svg/AI.svg' />
        </div>
        <div className='details'>
          <div className='head-alt'>
            <h1>
              -keRas not found
            </h1>
          </div>
          <div className='head-details-alt'>
            <p>Describe this kind sir!!</p>
          </div>
          <div className='explore-alt'>
            <button className='explore-btn-alt'>EXPLORE</button>
          </div>
        </div>
      </div>
      <div className='dev-div'>
        <div className='details'>
          <div className='head'>
            <h1>
              -sudo dev info
            </h1>
          </div>
          <div className='head-details'>
            <p>Describe this kind sir!!</p>
          </div>
          <div className='explore'>
            <button className='explore-btn'>EXPLORE</button>
          </div>
        </div>
        <div className='div-svg'>
          <img src='http://localhost:3000/svg/dev.svg' />
        </div>
      </div>
    </div>
  )
}
export default card
