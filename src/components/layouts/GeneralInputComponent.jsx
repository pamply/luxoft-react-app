import React, { Component } from 'react'

class GeneralInputComponent extends Component {
  render () {
    const {
      label,
      placeHolder,
      type,
      id,
      hlpMsg,
      onChange,
      value,
      name
    } = this.props
    return (
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{label}</label>
        <input
          name={name}
          type={type}
          className="form-control"
          id={id}
          aria-describedby={id}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
        <small id="emailHelp" className="form-text text-muted">
          {hlpMsg}
        </small>
      </div>
    )
  }
}

export default GeneralInputComponent
