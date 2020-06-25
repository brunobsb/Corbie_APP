import React from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;


<Form.Item label="Status">
<Select
  name="status"
  onChange={value => {
    this.setState({ status: value });
  }}
  placeholder="Please choose the status"
>
  <Option value="new">New</Option>
  <Option value="open">Open</Option>
  <Option value="rejected">Rejected</Option>
  <Option value="deferred">Deferred</Option>
  <Option value="reopened">Reopened</Option>
</Select>
</Form.Item>