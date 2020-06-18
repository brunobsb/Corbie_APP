import React, { Component } from 'react';
import formeditSchema from './FormEdit.schema';
import { FormWrapper } from './FormEdit.style';
import { NewInput, Button } from '../../atoms';
import  ApiService  from '../../../api/Service';
import { Skeleton } from 'antd';

class FormEdit extends Component {
    state = {
      isUserInfoLoaded: false,
      initialState: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
    };
  
    async componentDidMount () {
      console.log(localStorage);
      const { name, username, email, password } = await ApiService.getUserInfo();
      const projects = await ApiService.listAllProjects();
      console.log(projects);
      const projectid = "5ee947532a8e293c1f4cd66d"
      const tasks = await ApiService.listAllTasksFromProject(projectid);
      console.log(tasks);
    this.setState({
        initialState: {
          name, username, email, password
        },
        isUserInfoLoaded: true,
      });
    };

    onSubmitMethod = async (values, actions) => {

    };

    render() {
        return this.state.isUserInfoLoaded ? (
          <FormWrapper
            initialValues={this.state.initialState}
            validationSchema={formeditSchema}
            onSubmit={this.onSubmitMethod}
            enableReinitialize
          >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, ...props }) => (
              <form onSubmit={handleSubmit}>
                <NewInput
                  {...props}
                  name="name"
                  label="Nome"
                  placeholder="Insira seu nome completo"
                  defaultValue={values.name}
                  value={values.name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                  error={errors.name}
                  touched={touched.name}
                  />

                <NewInput
                  {...props}
                  name="username"
                  label="Usuário"
                  placeholder="Insira seu nome de Usuário"
                  defaultValue={values.username}
                  value={values.username}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                  error={errors.username}
                  touched={touched.username}
                  />
      
                <NewInput
                  {...props}
                  name="email"
                  label="Email"
                  placeholder="Insira seu Email"
                  defaultValue={values.email}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                />

                <NewInput
                  {...props}
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="Insira sua senha"
                  defaultValue={values.password}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                />
      
                <Button type="submit" isLoading={isSubmitting}>Atualizar</Button>
              </form>
            )}
          </FormWrapper>
        ) : (
          <Skeleton active/>
        )
      }
    }
    
    export default FormEdit;
    