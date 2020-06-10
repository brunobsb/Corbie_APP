import React, { useState } from 'react';
import formloginSchema from './FormLogin.schema';
import { FormWrapper } from './FormLogin.style';
import { NewInput, Button } from '../../atoms';

const FormLogin = () => {
  const initialState = {
    username: '',
    password: '',
  };

  const onSubmitMethod = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formloginSchema}
      onSubmit={onSubmitMethod}
      render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (

        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="username"
            label="Usuário"
            placeholder="Insira seu nome de Usuário"
            isLoading={isSubmitting}
            defaultValue={values.username}
            value={values.username}
            error={errors.username}
            touched={touched.username}
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
            defaultValue={values.password}
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

export default FormLogin;
