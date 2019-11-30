import React from "react";

export const Input = (props) => {
  const { label, type, id, placeholder, errorText, onBlur, toggleError, helpText, validation, email, onChangeInputText } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className={`form-control ${!toggleError ? "" : (validation()) ? "is-valid" : "is-invalid"}`}
        id={id}
        placeholder={placeholder}
        value={email}
        onChange={onChangeInputText}
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