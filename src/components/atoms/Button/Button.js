import React from 'react';
import { Button as  ButtonMaster} from 'antd';

const Button = ({isLoading, children, method, type}) => (
  <ButtonMaster
    type="primary"
    loading={isLoading}
    htmlType={type || 'Button'}
    onClick={() => method && method()}
  >
    {children}
  </ButtonMaster>
);
export default Button;