import * as yup from 'yup';

const formtaskcreateSchema = yup.object().shape({

  title: yup.string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(20, 'Máximo de 20 caracteres'),
  description: yup.string()
    .min(4, 'Mínimo de 4 caracteres')
    .max(50, 'Máximo de 50 caracteres'),
  duration: yup.number()
    .required('Campo obrigatório'),
  cost: yup.number()
    .required('Campo obrigatório'),
  status: yup.string()
    .required('Campo obrigatório'),
  type: yup.string()
    .required('Campo obrigatório'),
  profitable: yup.boolean()
    .required('Campo obrigatório'),
  creationDate: yup.date()
    .required('Campo obrigatório'),
  dueDate: yup.date()
    .required('Campo obrigatório'),

});
export default formtaskcreateSchema;
