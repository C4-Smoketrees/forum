import React from 'react'
// import { search } from 'node-emoji'
import Backdrop from '../backdrop/backdrop'
import ReportBox from './report-box'

class Report extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      click: false
    }

    this.handleReport = (event) => {
      this.setState({ click: true })
    }

    this.backdropReportClickHandle = () => {
      this.setState({ click: false })
    }
  }

  render () {
    let backdrop
    let report

    if (this.state.click) {
      backdrop = <Backdrop handleOnClick={this.backdropReportClickHandle} />
      report = <ReportBox handleOnClick={this.backdropReportClickHandle} />
    }

    return (
      <div className='report'>
        <a className='flag' onClick={this.handleReport}><img src='/svg/flag.svg' style={{ width: '20px', position: 'relative', top: '50%', transform: 'translate(0,-50%)' }} /></a>
        {backdrop}
        {report}
      </div>
    )
  }
}

export default Report
