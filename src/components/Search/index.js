import React, { Component } from 'react'
import './styles.css'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value || '' }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { value } = this.state
    const { onSubmit } = this.props

    return (
      <form onSubmit={onSubmit}>
        <input onChange={this.onChange} value={value} type="text" />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default InputForm
