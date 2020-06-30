import React from 'react';
import { Select as SelectMaster } from 'antd';


const Select = ({value, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {

//   const onChangeSelect = (data) => {
//     // onChange(date);
//     setFieldValue(value, data);
// }
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
  setFieldValue(value, data);
}

  return (
    <SelectMaster
    // value={handleChange}
    style={{ width: 200 }}
    
    // placeholder={placeholder}
    value={Option}
    options={data}
    onChange={handleChange}
    onSelect={handleChange}

    // defaultValue="padrao"
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
  
  
  </SelectMaster>
  );
};
export default Select;
