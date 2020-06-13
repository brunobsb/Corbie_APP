import React from 'react';
import { InputBase, InputText, InputMasked } from './NewInput.style';

const NewInput = ({
name, label, mask, value, type, isLoading, handleChange, handleBlur, placeholder, error, touched,
}) => {
  const hasMask = !!mask;
  const hasError = !!error;
  const hasTouched = touched;

  return (
    <InputBase
      name={name}
      label={label}
      validateStatus={hasError && hasTouched && 'error'}
      help={hasError && hasTouched && error}
    >
      {hasMask ? (

        <InputMasked
          className="ant-input"
          mask={mask}
          maskChar={null}
          defaultValue={value}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      ) : (
        <InputText
          initialValues={value}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          type={type || 'text'}
        />

      )}
    </InputBase>
  );
};

export default NewInput;
