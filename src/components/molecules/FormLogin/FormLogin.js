import React, { Component } from 'react';
import formloginSchema from './FormLogin.schema';
import { FormWrapper } from './FormLogin.style';
import { NewInput, Button } from '../../atoms';
import ApiService from '../../../api/Service';
// import { Redirect } from 'react-router-dom';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginApiErrorMessage: '',
      initialState: {
        username: '',
        password: '',
      },
    };
  }

  onSubmitMethod = async (values, actions) => {
    try {
      const logged = await ApiService.loginUser(values);  

      this.props.logUser();

      localStorage.setItem('logged-user-info', JSON.stringify(logged));
     actions.setSubmitting(false);

      this.props.history.push('/edit');
    } catch (err) {
      this.setState({
        loginApiErrorMessage: err.response.data.message
      })
    }
  };

  render() {
    return (
<FormWrapper
      initialValues={this.state.initialState}
      validationSchema={formloginSchema}
      onSubmit={this.onSubmitMethod}
      >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (

        <form onSubmit={handleSubmit}>
          <NewInput
            {...props}
            name="username"
            label="Usuário"
            placeholder="Insira seu nome de Usuário"
            isLoading={isSubmitting}
            defaultValue={values.username}
            value={values.username}
            error={errors.username || (this.state.loginApiErrorMessage && true)}
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
            initialValues={values.password}
            value={values.password}
            error={errors.password || this.state.loginApiErrorMessage}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Button type="submit" isLoading={isSubmitting}>Entrar</Button>
        </form>
      )}
      </FormWrapper>
    )
  }
}


// const FormLogin = ({logUser, ...props}) => {
//   const [loginApiErrorMessage, setLoginApiErrorMessage] = useState('');
//   const initialState = {
//     username: '',
//     password: '',
//   };


//   const onSubmitMethod = async (values, action) => {
//     try {
//       const logged = await ApiService.loginUser(values);

//       logUser();

//       localStorage.setItem('logged-user-info', JSON.stringify(logged));
//       action.setSubmitting(false);

//       props.history.push('/edit');
//     } catch (err) {
//       setLoginApiErrorMessage(err.response.data.message);
//     }
//   };

//   return (
//     <FormWrapper
//       initialValues={initialState}
//       validationSchema={formloginSchema}
//       onSubmit={onSubmitMethod}
//       render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (

//         <form onSubmit={handleSubmit}>
//           <NewInput
//             {...props}
//             name="username"
//             label="Usuário"
//             placeholder="Insira seu nome de Usuário"
//             isLoading={isSubmitting}
//             initialValues={values.username}
//             value={values.username}
//             error={errors.username || (loginApiErrorMessage && true)}
//             touched={touched.username}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <NewInput
//             {...props}
//             name="password"
//             label="Senha"
//             type="password"
//             placeholder="Insira sua senha"
//             isLoading={isSubmitting}
//             initialValues={values.password}
//             value={values.password}
//             error={errors.password || loginApiErrorMessage}
//             touched={touched.password}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//           <Button type="submit" isLoading={isSubmitting}>Entrar</Button>
//         </form>
//       )}
//     />
//   );
// };

export default FormLogin;
