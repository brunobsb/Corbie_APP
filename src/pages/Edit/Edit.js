import React from 'react';
// import { Redirect } from 'react-router-dom';
import { MasterTemplate } from '../../templates';
import { FormSignup } from '../../components/molecules';


const Edit = (props) => {
  return (

    <MasterTemplate>
      <FormSignup {...props} />
    </MasterTemplate>
  );
};

export default Edit;
