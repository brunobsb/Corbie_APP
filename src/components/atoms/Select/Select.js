import React from 'react';
import { Select as SelectMaster } from 'antd';


const Select = ({name, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {

// {console.log(data)}

  return (
    <SelectMaster
    showSearch
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
