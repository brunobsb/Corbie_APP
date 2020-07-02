import React from 'react';
import { Select as SelectMasterTask } from 'antd';
// import { FilterFilled } from '@ant-design/icons';
// import { findAllByDisplayValue } from '@testing-library/react';

// class Select extends Component {
// status
// }
const SelectTask = ({value, displayValue, handleChange,   filter, name, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {

//   const onChangeSelect = (data) => {
//     // onChange(date);
//     setFieldValue(value, data);
// }

// const option = {data}.map(option => 
// <option value={option.id} displayValue={value.name}>
//   {option.displayValue}
// </option>
//  )

// const handleChange = (value, Data) => {
 
//   console.log(value, Data);
// }
  // console.log(data);
  return (
    <div>
    <label htmlFor={value}>{displayValue}</label>
    <SelectMasterTask
    style={{ width: 200 }}
    defaultActiveFirstOption
    placeholder={placeholder}

    // displayValue={displayValue}

    onChange={handleChange}
    // // key={value.name}
    // // name={value.name}
    // // onSelect={handleChange}

    // defaultValue={value}
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
  {data.map(option => (
    <option value={option.value} displayValue={option.displayValue}>
    {option.value}
    </option>
     
 
  ))}
  
  </SelectMasterTask>
</div>
  );
};
export default SelectTask;

{/* <div>
                  <label htmlFor={filter.name}>{filter.name}</label>
                  <Select
                    defaultActiveFirstOption
                    onChange={handleChange}
                    key={filter.name}
                    name={filter.name}
                  >
                    {filter.options.map(option => (
                      <Option key={option.id} name={filter.name}>
                        {option.name}
                      </Option>
                    ))}
                  </Select>
                </div>   */}