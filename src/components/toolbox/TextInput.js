import React from "react";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && erroe.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}></label>
      <div>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="error"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && (
          <small id="error" className="form-text text-muted alert alert-danger">
            {error}
          </small>
        )}
      </div>
    </div>
  );
};
