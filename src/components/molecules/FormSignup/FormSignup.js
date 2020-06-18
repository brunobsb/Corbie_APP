import React from 'react';
import formsignupSchema from './FormSignup.schema';
import { FormWrapper } from './FormSignup.style';
import { NewInput, Button } from '../../atoms';
import ApiService from '../../../api/Service';
// import { Redirect } from 'react-router-dom';

const FormSignup = (props) => {
  const initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
  };

  const onSubmitMethod = async (values, actions) => {
    // console.log(values);
    await ApiService.subscribeUser(values);
    actions.setSubmitting(false);


    props.history.push('/login');

  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formsignupSchema}
      onSubmit={onSubmitMethod}
      render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="name"
            label="Nome"
            placeholder="Insira seu nome completo"
            isLoading={isSubmitting}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="username"
            label="Usuário"
            placeholder="Insira seu nome de Usuário"
            isLoading={isSubmitting}
            value={values.username}
            error={errors.username}
            touched={touched.username}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="email"
            label="Email"
            placeholder="Insira seu Email"
            isLoading={isSubmitting}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="password"
            label="Senha"
            type="password"
            placeholder="Insira sua senha"
            isLoading={isSubmitting}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Button type="submit" isLoading={isSubmitting}>Entrar</Button>
        </form>
      )}
    />
  );
};

export default FormSignup;
