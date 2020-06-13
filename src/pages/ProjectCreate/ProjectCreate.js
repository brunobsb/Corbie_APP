import React from 'react';
//import { Redirect } from 'react-router-dom';
import { ProjectTemplate } from '../../templates';
import { FormProjectCreate } from '../../components/molecules';


const ProjectCreate = (props) => {
  return (

    <ProjectTemplate>
      <FormProjectCreate {...props} />
    </ProjectTemplate>
  );
};

export default ProjectCreate;
