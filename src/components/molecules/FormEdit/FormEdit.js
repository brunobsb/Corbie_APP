import React, { Component } from 'react';
import formeditSchema from './FormEdit.schema';
import { FormWrapper } from './FormEdit.style';
import { NewInput, Button } from '../../atoms';
import  ApiService  from '../../../api/Service';
import { Skeleton } from 'antd';

class FormEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserInfoLoaded: false,
      initialState: {
        name: '',
        username: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmationNewPassword: '',
      },
    };
  }
  
    async componentDidMount () {

    this.setState({

        isUserInfoLoaded: true,
      });
    }  

    onSubmitMethod = async (values, actions) => {
      
      await ApiService.updateUserInfo(values);
      
      
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
                  name="currentPassword"
                  label="Senha Atual"
                  type="password"
                  placeholder="Insira sua senha"
                  defaultValue={values.currentPassword}
                  value={values.currentPassword}
                  error={errors.currentPassword}
                  touched={touched.currentPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                />

                <NewInput
                  {...props}
                  name="newPassword"
                  label="Nova Senha"
                  type="password"
                  placeholder="Insira sua senha"
                  defaultValue={values.newPassword}
                  value={values.newPassword}
                  error={errors.newPassword}
                  touched={touched.newPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isLoading={isSubmitting}
                />

                <NewInput
                  {...props}
                  name="confirmationNewPassword"
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Insira sua senha"
                  defaultValue={values.confirmationNewPassword}
                  value={values.confirmationNewPassword}
                  error={errors.confirmationNewPassword}
                  touched={touched.confirmationNewPassword}
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
    