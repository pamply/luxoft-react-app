import React from "react";

export const BinaryCheckRadio = (props) => {
  const { label, option1, option2, onChange, type, status } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <div
        className="custom-control custom-radio"
        onClick={e => onChange(e, true)}
      >
        <input
          type={type}
          className="custom-control-input"
          checked={status}
        />
        <label className="custom-control-label">{option1}</label>
      </div>
      <div
        className="custom-control custom-radio"
        onClick={e => onChange(e, false)}
      >
        <input
          type={type}
          className="custom-control-input"
          checked={!status}
        />
        <label className="custom-control-label">{option2}</label>
      </div>
    </div>
  );
}