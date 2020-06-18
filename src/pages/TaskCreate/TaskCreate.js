import React from 'react';
//import { Redirect } from 'react-router-dom';
import { ProjectTemplate } from '../../templates';
import { FormTaskCreate } from '../../components/molecules';


const TaskCreate = (props) => {
  return (

    <ProjectTemplate>
      <FormTaskCreate {...props} />
    </ProjectTemplate>
  );
};

export default TaskCreate;