import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import ReactMarkdown from 'react-markdown'

class Create extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      input: '',
      display: 'none'
    }

    // Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }

    this.handleInputChange = (event) => {
      this.setState({ input: event.target.value })
    }

    this.handleRenderMarkdown = () => {
      return (<ReactMarkdown source={this.setState.input} />)
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop =
        <Backdrop
          handleOnClick={this.onBackdropClick}
        />
    }

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values'>
          <form className='create-input' onSubmit={this.handleRenderMarkdown}>
            <div className='create-form'>
              <h5>
                We recommend using Markdown for best performance
              </h5>
              <div>
                <textarea
                  className='create-text'
                  onChange={this.handleInputChange}
                  type='text'
                  value={this.state.input}
                />
              </div>
            </div>
            <button className='create-btn' onSubmit={this.handleRenderMarkdown}>Submit</button>
          </form>
        </div>
      </div>

    return (
      <div>
        {
          ret
        }
      </div>
    )
  }
}

export default Create
