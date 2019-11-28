import React from "react";

export class Input extends React.Component {
  render() {
    const { label, type, id, placeholder, errorText, onBlur, toggleError, helpText } = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          type={type}
          className={`form-control ${!toggleError ? "" : (this.props.validation()) ? "is-valid" : "is-invalid"}`}
          id={id}
          placeholder={placeholder}
          value={this.props.email}
          onChange={this.props.onChangeInputText}
          onBlur={onBlur(id)}
        />
        <div className="invalid-feedback">
          {errorText}
        </div>
        {helpText ?
          <small id={`${id}help`} className="form-text text-muted">{helpText}</small>
          : ""}
      </div>
    );
  }
}