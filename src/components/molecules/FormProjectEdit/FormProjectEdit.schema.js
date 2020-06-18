import * as yup from 'yup';

const formprojecteditSchema = yup.object().shape({

  title: yup.string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(20, 'Máximo de 20 caracteres'),
  description: yup.string()
    .min(4, 'Mínimo de 4 caracteres')
    .max(50, 'Máximo de 50 caracteres'),
  hourPrice: yup.number()
    .required('Campo obrigatório'),
  duration: yup.number()
    .required('Campo obrigatório'),
  cost: yup.number()
    .required('Campo obrigatório'),
  status: yup.string()
    .required('Campo obrigatório'),
  creationDate: yup.date()
    .required('Campo obrigatório'),
  dueDate: yup.date()
    .required('Campo obrigatório'),
//   user: yup.string()
//     .required('Campo obrigatório'),//ver relação com campos id no yup.
});

export default formprojecteditSchema;
