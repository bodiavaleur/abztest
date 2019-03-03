import React from 'react';

export const Input = ({
  withStyle,
  label,
  type,
  name,
  placeholder,
  value,
  onChangeHandler,
  onBlurHandler
}) => {
  return (
    <fieldset className={`fieldset fieldset-${withStyle}`}>
      <legend className="fieldset__label">{label}</legend>
      <input
        className="fieldset__input"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
    </fieldset>
  );
};

export const Select = () => {
  return (
    <select className="select">
      <option className="select__opt">opt1</option>
      <option className="select__opt">opt2</option>
      <option className="select__opt">opt3</option>
      <option className="select__opt">opt4</option>
    </select>
  );
};

export const File = () => {
  return (
    <div className="inputfile">
      <span className="inputfile__label">Upload your file</span>
      <input
        className="inputfile__file"
        type="file"
        name="file"
        placeholder="Upload your photo"
      />
      <button className="btn btn--outline btn--file">Upload</button>
    </div>
  );
};
