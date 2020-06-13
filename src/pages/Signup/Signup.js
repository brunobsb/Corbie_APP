import React from 'react';
import { MasterTemplate } from '../../templates';
import { FormSignup } from '../../components/molecules';


const Signup = (props) => {
  return (

    <MasterTemplate>
      <FormSignup {...props} />
    </MasterTemplate>
  );
};

export default Signup;
