import React from "react";

export const Checkbox = (props) => {
  const { label, listOfElements, id, selectedElements, onChange } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <br />
      {listOfElements.map(preference => (
        <div className="form-check form-check-inline" key={preference} >
          <input
            className="form-check-input"
            type="checkbox"
            value={preference}
            checked={
              !!selectedElements.find(pref => preference === pref)
            }
            onChange={e => onChange(e, preference)}
          />
          <label className="form-check-label">{preference}</label>
        </div>
      ))}
    </div>
  );
}