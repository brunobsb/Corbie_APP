import React from 'react';
import { InputNumber as InputNumberMaster } from 'antd';


const InputNumber = ({name, label, placeholder, value, isLoading, onChange, handleBlur, setFieldValue}) => {
const onChangeNumber = (number) => {
    // onChange(date);
    setFieldValue(name, number);
}
  return (
    <div>
      <span>{label}</span>
      <InputNumberMaster
        name={name}
        placeholder={placeholder}
        value={value}
        // disabled={isLoading}
        onChange={onChangeNumber}
        // onBlur={handleBlur}
        defaultValue={0}
        min={0}
      />
    </div>
  );
};
export default InputNumber;
