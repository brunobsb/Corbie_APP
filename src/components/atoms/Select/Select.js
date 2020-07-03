import React from 'react';
import { Select as SelectMaster } from 'antd';

const Select = ({value, displayValue, handleChange, filter, name, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {


  return (
    <div>
      <label htmlFor={value}>{displayValue}</label>
      <SelectMaster
        style={{ width: 200 }}
        defaultActiveFirstOption
        placeholder={placeholder}
        onChange={handleChange}
      >
        {data.map(option => (
          <option value={option.value} displayValue={option.displayValue}>
            {option.value}
          </option>
        ))}

      </SelectMaster>
    </div>
  );
};
export default Select;
