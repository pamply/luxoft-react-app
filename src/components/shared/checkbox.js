import React from "react";

export class Checkbox extends React.Component {
  render() {
    const { label, listOfElements, id, selectedElements, onChange } = this.props;
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

            /*checked={
              !!selectedElements.find(pref => preference === pref)}*/
            />
            <label className="form-check-label">{preference}</label>
          </div>
        ))}
      </div>
    );
  }
}