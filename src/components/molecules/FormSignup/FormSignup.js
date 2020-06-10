import React from 'react';
import formsignupSchema from './FormSignup.schema';
import { FormWrapper } from './FormSignup.style';
import { NewInput, Button } from '../../atoms';

const FormSignup = (props) => {
  const initialState = {
    name: '',
    username: '',
    email: '',
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
            defaultValue={values.name}
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
            defaultValue={values.username}
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
            defaultValue={values.email}
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

export default FormSignup;
