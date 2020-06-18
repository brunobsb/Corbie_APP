import React from 'react';
import { DatePicker as DateMaster } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';


const DatePicker = ({name, label, placeholder, value, isLoading, onChange, handleBlur, setFieldValue}) => {
const onChangeDate = (date) => {
    // onChange(date);
    setFieldValue(name, date);
}
  return (
    <div>
      <span>{label}</span>
      <DateMaster
        name={name}
        placeholder={placeholder}
        format={dateFormat}
        value={value}
      // disabled={isLoading}
        onChange={onChangeDate}
      // onBlur={handleBlur}
        defaultValue={moment(value, dateFormat)}
        showToday
      />
    </div>
  );
};
export default DatePicker;
