import React from 'react';
import formprojectcreateSchema from './FormProjectCreate.schema';
import { FormWrapper } from './FormProjectCreate.style';
import { NewInput, Button, DatePicker, InputNumber, InputValor } from '../../atoms';
import  ApiService  from '../../../api/Service';
import './FormProjectCreate.css';


const FormProjectCreate = (props) => {
  const initialState = {
    title: '',
    description: '',
    hourPrice: '',
    duration: '',
    cost: '',
    status: '',
    creationDate: '',
    dueDate: '',

  };



  const onSubmitMethod = async (values, actions) => {
    // console.log(values);
    await ApiService.createProject(values);
    actions.setSubmitting(false);

    // props.history.push('/login');

  };

  return (
    <FormWrapper
      initialValues={initialState}
      validationSchema={formprojectcreateSchema}
      onSubmit={onSubmitMethod}
      render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
        <form onSubmit={handleSubmit}>
          <div className="projectStyle" >
            <NewInput
              {...props}
              name="title"
              label="Título"
              placeholder="Insira o título do projeto"
              isLoading={isSubmitting}
              value={values.title}
              error={errors.title}
              touched={touched.title}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          <div>
            <NewInput
              {...props}
              style={{width:'100%', backgroundColor:'red !important'}}
              name="description"
              label="Descrição"
              placeholder="Insira descrição do projeto"
              isLoading={isSubmitting}
              value={values.description}
              error={errors.description}
              touched={touched.description}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          <div className="projectStyleCol" >
            <InputValor
              {...props}
              name="hourPrice"
              label="Preço por Hora trabalhada:"
              placeholder="Insira o valor"
              // isLoading={isSubmitting}
              value={values.hourPrice}
              // error={errors.hourPrice}
              // touched={touched.hourPrice}
              handleChange={handleChange}
              // handleBlur={handleBlur}
            />

            <InputNumber
              {...props}
              name="duration"
              label="Duração: "
              placeholder="Insira o tempo de duração do projeto"
              // isLoading={isSubmitting}
              defaultValue={values.duration}
              value={values.duration}
              // error={errors.duration}
              // touched={touched.duration}
              handleChange={handleChange}
              // handleBlur={handleBlur}
            />

            <InputValor
              {...props}
              name="cost"
              label="Custo do projeto:"
              placeholder="Insira o valor"
              // isLoading={isSubmitting}
              value={values.cost}
              // error={errors.hourPrice}
              // touched={touched.hourPrice}
              handleChange={handleChange}
              // handleBlur={handleBlur}
            />

          </div>

          <div  className="projectStyleCol" >  

            <NewInput
              {...props}
              name="status"
              label="Status"
              placeholder="Insira o status"
              isLoading={isSubmitting}
              value={values.status}
              error={errors.status}
              touched={touched.status}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <DatePicker
              {...props}
              label="Início de prazo:  "
              name="creationDate"
              placeholder="Insira a data"
              // isLoading={isSubmitting}
              value={values.creationDate}
              // error={errors.creationDate}
              // touched={touched.creationDate}
              handleChange={handleChange}
            />


            <DatePicker
              {...props}
              name="dueDate"
              label="Fim do prazo:  "
              placeholder="Insira a data"
              // isLoading={isSubmitting}
              value={values.dueDate}
              // error={errors.creationDate}
              // touched={touched.creationDate}
              handleChange={handleChange}
            />
          </div>
          <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
        </form>
      )}
    />
  );
};

export default FormProjectCreate;
