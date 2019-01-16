import React, { Component } from 'react'
import './styles.css'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }


  render() {
    const { value } = this.state
    const { onSubmit } = this.props

    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default InputForm