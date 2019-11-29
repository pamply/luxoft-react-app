import React from "react";

export class Select extends React.Component {
  render() {
    const { label, value, id, onChange, fillDropdown } = this.props;
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
}