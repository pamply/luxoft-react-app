import React from 'react'

export const Input = props => {
  const { title,
    type,
    id,
    ariaDescribedby,
    placeholder } = props;

  return (<div className="form-group">
    <label htmlFor="exampleInputEmail1">{title}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      aria-describedby={ariaDescribedby}
      placeholder={placeholder}
      onChange={this.onChangeEmail}
      value={this.state.email}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  )
};

export default Input;