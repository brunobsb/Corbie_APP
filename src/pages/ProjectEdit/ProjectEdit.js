import React from 'react';
//import { Redirect } from 'react-router-dom';
import { ProjectTemplate } from '../../templates';
import { FormProjectEdit } from '../../components/molecules';


const ProjectEdit = (props) => {
  return (

    <ProjectTemplate>
      <FormProjectEdit {...props} />
    </ProjectTemplate>
  );
};

export default ProjectEdit;
