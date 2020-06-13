import React from 'react';
//import { Redirect } from 'react-router-dom';
import { ProjectTemplate } from '../../templates';
import { FormProjectManagement } from '../../components/molecules';


const ProjectManagement = (props) => {
  return (

    <ProjectTemplate>
      <FormProjectManagement {...props} />
    </ProjectTemplate>
  );
};

export default ProjectManagement;
