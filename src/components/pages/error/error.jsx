import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'

class Error extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      navbarOpen: true,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.user = {
      name: 'Shizuka',
      descriptionUser: 'FullStackDev',
      Hash: {
        number: 1,
        arrayHash: ['#Dev']
      },
      likes: 420,
      issues: 69,
      issuesSolved: 0,
      photo: 'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg',
      emailId: 'example@gmail.com',
      time: '4 hrs ago'
    }

    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }
    return (
      <div className='center' style={{ height: '100%', paddingBottom: '20px' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='error'>
          <img src='http://localhost:3000/svg/error.svg' />
          <h1>Oops!</h1>
          <div className='error-description'>
          An error occured! Thats embarassing!
          </div>
        </div>
      </div>
    )
  }
}

export default Error
