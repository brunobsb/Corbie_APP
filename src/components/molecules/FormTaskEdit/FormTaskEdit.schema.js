import * as yup from 'yup';

const formtaskeditSchema = yup.object().shape({

  title: yup.string()
    .min(4, 'Mínimo de 4 caracteres')
    .max(20, 'Máximo de 20 caracteres'),
  description: yup.string()
    .min(4, 'Mínimo de 4 caracteres')
    .max(50, 'Máximo de 50 caracteres'),
  duration: yup.number(),
  cost: yup.number(),
  status: yup.string(),
  type: yup.string(),
  profitable: yup.boolean(),
  creationDate: yup.date(),
  dueDate: yup.date(),

});
export default formtaskeditSchema;
