import React from 'react';
import { Select as SelectMaster } from 'antd';


const Select = ({value, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {

  const onChangeSelect = (data) => {
    // onChange(date);
    setFieldValue(value, data);
}
  return (
    <SelectMaster
    showSearch
    value={value}
    style={{ width: 200 }}
    placeholder={placeholder}
    options={data}
    onChange={onChange}
    
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
  </SelectMaster>
  );
};
export default Select;
