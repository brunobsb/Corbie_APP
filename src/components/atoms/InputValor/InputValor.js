import React from 'react';
import { InputNumber as InputValorMaster } from 'antd';


const InputValor = ({name, label, placeholder, value, isLoading, onChange, handleBlur, setFieldValue}) => {
const onChangeValor = (valor) => {
    // onChange(date);
    setFieldValue(name, valor);
}
  return (
    <div>
      <span>{label}</span>
      <InputValorMaster
        name={name}
        placeholder={placeholder}
        value={value}
        // disabled={isLoading}
        onChange={onChangeValor}
        // onBlur={handleBlur}
        defaultValue={0}
        min={0}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        decimalSeparator={"."}
      />
    </div>
  );
};
export default InputValor;
