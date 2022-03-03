import React, { Component } from "react";

class Select extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select {...rest} name={name} id={name} className="form-control">
          <option value="" />
          {options.map((o) => (
            <option key={o._id} value={o._id}>
              {o.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}{" "}
      </div>
    );
  }
}

export default Select;
