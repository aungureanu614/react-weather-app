import React, { Component } from 'react'
import './styles.scss'

class InputForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleClick = () => {
    this.setState({
      value: '',
    })
  }

  render() {
    const { value } = this.state
    const { submitForm } = this.props

    return (
      <form className="submit-form" onSubmit={submitForm}>
        <input
          placeholder="Search by City or Zip"
          type="text"
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>
    )
  }
}

export default InputForm
