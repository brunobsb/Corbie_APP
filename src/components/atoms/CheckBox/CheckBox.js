import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox as CheckBoxMaster } from 'antd';

class Checkbox extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  // toggleDisable = () => {
  //   this.setState({ disabled: !this.state.disabled });
  // };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`;
    return (
      <div>
        {/* <p style={{ marginBottom: '20px' }}> */}
          <CheckBoxMaster
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </CheckBoxMaster>
        {/* </p> */}
        {/* <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ margin: '0 10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p> */}
      </div>
    );
  }
}

export default Checkbox