// import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import { Input } from 'antd';

// const { TextArea } = Input;

// class TextAreas extends Component {

//   render(name,label,value, isLoading, handleChange, handleBlur, placeholder) {

//     return (
//       <>
//         <TextArea  name={name}
//       label={label}
//       defaultValue={value}
//           value={value}
//           disabled={isLoading}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           placeholder={placeholder} />
//       </>
//     );
//   }
// }


// export default TextAreas;

import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreas = ({name, type, label, placeholder, value, isLoading, onChange, handleBlur, setFieldValue}) => {
const handleChange = (text) => {
    //  onChange(text);
    setFieldValue(text);
}
  return (
    <div>
      <span>{label}</span>
      <TextArea
        name={name}
        rows={4}
        placeholder={placeholder}
        value={value}
        // disabled={isLoading}
        onChange={handleChange}
        // onBlur={handleBlur}
        type={String}
      />
    </div>
  );
};
export default TextAreas;
