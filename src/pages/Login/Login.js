import React from 'react';
import { MasterTemplate } from '../../templates';
import { FormLogin } from '../../components/molecules';


const Login = (props) => {
  return (

    <MasterTemplate>
      <FormLogin {...props} />
    </MasterTemplate>
  );
};

export default Login;
