import React from 'react';
// import { Redirect } from 'react-router-dom';
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
