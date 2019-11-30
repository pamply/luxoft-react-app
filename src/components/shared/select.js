import React from "react";

export const Select = (props) => {
  const { label, value, id, onChange, fillDropdown } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        onChange={onChange}
        value={value}
        className="custom-select"
        id={id}
      >
        {fillDropdown()}
      </select>
    </div>
  );
}