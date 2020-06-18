import React from 'react';
//import { Redirect } from 'react-router-dom';
import { ProjectTemplate } from '../../templates';
import { FormTaskEdit } from '../../components/molecules';


const TaskEdit = (props) => {
  return (

    <ProjectTemplate>
      <FormTaskEdit {...props} />
    </ProjectTemplate>
  );
};

export default TaskEdit;
