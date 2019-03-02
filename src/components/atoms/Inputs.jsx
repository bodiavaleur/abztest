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
