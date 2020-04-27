import React from 'react'

class ReportBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      reasonText: '',
      descriptioinText: ''
    }

    this.handleReasonText = (event) => {
      this.setState({ reasonText: event.target.value })
    }

    this.handleDescriptionText = (event) => {
      this.setState({ descriptionText: event.target.value })
    }
  }

  render () {
    return (
      <div className='report-box'>
        <input value={this.state.reasonText} onChange={this.handleText} style={{ height: '56px' }} />
        <input value={this.state.descriptionText} onChange={this.handleText} style={{ height: '250px' }} />
        <button className='post-forum-reply-button' style={{marginTop: '0.5rem auto'}}>Report</button>
      </div>
    )
  }
}

export default ReportBox
