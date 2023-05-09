import React from "react";

export default function BasicTextArea({
  id = "",
  label = "",
  handleChange = () => {},
  value = "",
}) {
  return (
    <div className="mb-3">
      <label for={id} className="form-label">
        {label}
      </label>
      <textarea
        className="form-control"
        id={id}
        rows="3"
        onChange={handleChange}
        value={value}
      ></textarea>
    </div>
  );
}