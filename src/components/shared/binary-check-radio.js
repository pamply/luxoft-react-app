import React from "react";

export const BinaryCheckRadio = (props) => {
  const { label, option1, option2, onChange, type, option1Checked } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="custom-control custom-radio">
        <input
          type={type}
          className="custom-control-input"
          checked={option1Checked}
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
          checked={!option1Checked}
        />
        <label className="custom-control-label">{option2}</label>
      </div>
    </div>
  )
}