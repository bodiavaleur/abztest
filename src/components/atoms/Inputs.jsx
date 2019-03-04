import React from 'react';
import MediaQuery from 'react-responsive';

export const Input = ({
  withStyle,
  label,
  type,
  name,
  placeholder,
  value,
  onChangeHandler,
  onBlurHandler,
  error
}) => {
  return (
    <div className="fieldset-wrapper">
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
      {error ? <span className="inp-error">{error}</span> : null}
    </div>
  );
};

// export const CustomSelect = () => {
//   return (
//     <select className="select">
//       <option className="select__opt">opt1</option>
//       <option className="select__opt">opt2</option>
//       <option className="select__opt">opt3</option>
//       <option className="select__opt">opt4</option>
//     </select>
//   );
// };

export const File = () => {
  return (
    <div className="inputfile-wrapper">
      <div className="inputfile">
        <span className="inputfile__filename">Upload your photo</span>
        <input className="inputfile__file" type="file" id="file" />
      </div>
      <MediaQuery minWidth={768}>
        <label htmlFor="file" className="btn btn--outline btn__file">
          Upload
        </label>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <label htmlFor="file" className="btn btn--outline btn__file">
          <img src="./icons/upload.svg" alt="upload" />
        </label>
      </MediaQuery>
    </div>
  );
};
