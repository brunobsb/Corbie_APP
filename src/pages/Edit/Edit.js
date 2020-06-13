import React from 'react';
// import { Redirect } from 'react-router-dom';
import { LoggedTemplate } from '../../templates';
import { FormEdit } from '../../components/molecules';


const Edit = (props) => {
  return (

    <LoggedTemplate>
      <FormEdit {...props} />
    </LoggedTemplate>
  );
};

export default Edit;
