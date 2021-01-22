import React from 'react'
// import PropTypes from 'prop-types'

class ZoomToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  parseToggleStatus() {
    return this.state.visible ? 'ON' : 'OFF'
  }

  setZoomVisibility() {
    if (this.state.visible) {
      document.getElementById('zmmtg-root').style.display = 'none'
    } else {
      document.getElementById('zmmtg-root').style.display = 'block'
    }
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <>
        <button
          className={
            this.state.visible
              ? 'btn btn-sm btn-primary mx-4'
              : 'btn btn-sm btn-danger mx-4'
          }
          style={{ position: 'absolute', top: 10, left: 0, zIndex: 999 }}
          onClick={() => this.setZoomVisibility()}
        >
          {this.parseToggleStatus()}
        </button>
      </>
    )
  }
}

export default ZoomToggle
