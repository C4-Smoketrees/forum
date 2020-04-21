import React from 'react'
import Carousel from '../../cards-home/carousel'
import SecondBlog from '../../cards-home/second-blog'
import LatestPost from '../../cards-home/latestPost'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'

class IndexBlogs extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
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
      photo: '',
      emailId: 'example@gmail.com',
      time: '4 hrs ago'
    }

    // Component Lifecycle
    this.componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
      this.setState({ loading: true })
    }

    // Event Handlers
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
      <div className='center'>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='c4-blog'>
          <div className='c4-blog-heading'>
            <p>
              C4-Blogs
            </p>
          </div>
          <Carousel />
          <SecondBlog />
        </div>
        <div className='c4-footer'>
          <div className='footer-container'>
            <div className='paragraph'>
              <h3>PARAGRAPH</h3>
              <img src='https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium optio unde perferendis eum illum voluptatibus dolore tempora, consequatur minus asperiores temporibus reprehenderit.
              </p>
            </div>
            <div className='latest-footer'>
              <div className='latest-posts'>
                <h3>LATEST POSTS</h3>
                <LatestPost />
                <LatestPost />
                <LatestPost />
              </div>
              <div className='links-social'>
                <div className='links'>
                  <h3>QUICK LINKS</h3>
                  <ul className='list-unstyled'>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Travel</a></li>
                    <li><a href='#'>Adventure</a></li>
                    <li><a href='#'>Courses</a></li>
                    <li><a href='#'>Categories</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexBlogs
