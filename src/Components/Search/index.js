import React, { Component } from 'react'
import './styles.css'

class InputForm extends Component {
  constructor(props) {
    super(props)
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
    const { onSubmit } = this.props

    return (
      <form onSubmit={onSubmit}>
        <input
          placeholder="Search by City or Zip"
          type="text"
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default InputForm
