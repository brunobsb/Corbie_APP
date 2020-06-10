import * as yup from 'yup';

const formeditSchema = yup.object().shape({

  name: yup.string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(50, 'Máximo de 50 caracteres'),
  username: yup.string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(20, 'Máximo de 20 caracteres'),
  email: yup.string()
    .required('Campo obrigatório')
    .email('Formato inválido'),
  password: yup.string()
    .required('Campo obrigatório')
    .min(6, 'Mínimo de 6 caracteres')
    .max(60, 'Máximo de 60 caracteres'),

});

export default formeditSchema;
