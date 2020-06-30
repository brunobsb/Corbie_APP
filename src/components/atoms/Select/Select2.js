import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}


function onSearch(val) {
  console.log('search:', val);
}

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>,
  document.getElementById('container'),
);



// import React from "react";
// import { Form, Input, Button, Select } from "antd";


// const { Option } = Select;


// <Form.Item label="Status">
// <Select
//   name="status"
//   onChange={value => {
//     this.setState({ status: value });
//   }}
//   placeholder="Please choose the status"
// >
//   <Option value="new">New</Option>
//   <Option value="open">Open</Option>
//   <Option value="rejected">Rejected</Option>
//   <Option value="deferred">Deferred</Option>
//   <Option value="reopened">Reopened</Option>
// </Select>
// </Form.Item>