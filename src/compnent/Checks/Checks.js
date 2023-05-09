import React from "react";

export default function BasicChecks({
  id = "",
  handleChange = (e) => {},
  checked,
  label = "",
}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label className="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
}