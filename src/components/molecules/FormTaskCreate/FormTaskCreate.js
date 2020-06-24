import React, { Component } from 'react';
import formprojectcreateSchema from './FormTaskCreate.schema';
import { FormWrapper } from './FormTaskCreate.style';
import { NewInput, Button, DatePicker, InputNumber, InputValor } from '../../atoms';
import  ApiService  from '../../../api/Service';
// import './FormTaskCreate.css';

class FormTaskCreate extends Component {
  state = {
    initialState: {
      title: '',
      description: '',
      duration: '',
      cost: '',
      status: '',
      type: '',
      profitable: '',
      creationDate: '',
      dueDate: '',
    },
  }

  onSubmitMethod = async (values, actions) => {
    // console.log(values);
    await ApiService.createTask(values);
    this.actions.setSubmitting(false);

    this.props.history.push('/login');

  };

  render() {
    return(
      <FormWrapper
      initialValues={this.state.initialState}
      validationSchema={formprojectcreateSchema}
      onSubmit={this.onSubmitMethod}
      >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
        <form onSubmit={handleSubmit}>


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

          <NewInput
            {...props}
            name="status"
            label="Status do projeto"
            placeholder="Insira o status do projeto"
            isLoading={isSubmitting}
            value={values.status}
            error={errors.status}
            touched={touched.status}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="type"
            label="Tipo"
            placeholder="Insira o tipo"
            isLoading={isSubmitting}
            value={values.type}
            error={errors.type}
            touched={touched.type}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <NewInput
            {...props}
            name="profitable"
            label="Profitable"
            placeholder="????"
            isLoading={isSubmitting}
            value={values.profitable}
            error={errors.profitable}
            touched={touched.profitable}
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

          <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
        </form>
      )}
      </FormWrapper>
    );
  }
}

// const FormTaskCreate = (props) => {
//   const initialState = {
//     title: '',
//     description: '',
//     duration: '',
//     cost: '',
//     status: '',
//     type: '',
//     profitable: '',
//     creationDate: '',
//     dueDate: '',

//   };



//   const onSubmitMethod = async (values, actions) => {
//     // console.log(values);
//     await ApiService.createTask(values);
//     actions.setSubmitting(false);

//     // props.history.push('/login');

//   };

//   return (
//     <FormWrapper
//       initialValues={initialState}
//       validationSchema={formprojectcreateSchema}
//       onSubmit={onSubmitMethod}
//       render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
//         <form onSubmit={handleSubmit}>


//           <NewInput
//             {...props}
//             name="title"
//             label="Título"
//             placeholder="Insira o título do projeto"
//             isLoading={isSubmitting}
//             value={values.title}
//             error={errors.title}
//             touched={touched.title}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//         />


//           <NewInput
//             {...props}
//             style={{width:'100%', backgroundColor:'red !important'}}
//             name="description"
//             label="Descrição"
//             placeholder="Insira descrição do projeto"
//             isLoading={isSubmitting}
//             value={values.description}
//             error={errors.description}
//             touched={touched.description}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />


//           <InputNumber
//               {...props}
//               name="duration"
//               label="Duração: "
//               placeholder="Insira o tempo de duração do projeto"
//               // isLoading={isSubmitting}
//               defaultValue={values.duration}
//               value={values.duration}
//               // error={errors.duration}
//               // touched={touched.duration}
//               handleChange={handleChange}
//               // handleBlur={handleBlur}
//             />

//           <InputValor
//               {...props}
//               name="cost"
//               label="Custo do projeto:"
//               placeholder="Insira o valor"
//               // isLoading={isSubmitting}
//               value={values.cost}
//               // error={errors.hourPrice}
//               // touched={touched.hourPrice}
//               handleChange={handleChange}
//               // handleBlur={handleBlur}
//             />

//           <NewInput
//             {...props}
//             name="status"
//             label="Status do projeto"
//             placeholder="Insira o status do projeto"
//             isLoading={isSubmitting}
//             value={values.status}
//             error={errors.status}
//             touched={touched.status}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <NewInput
//             {...props}
//             name="type"
//             label="Tipo"
//             placeholder="Insira o tipo"
//             isLoading={isSubmitting}
//             value={values.type}
//             error={errors.type}
//             touched={touched.type}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <NewInput
//             {...props}
//             name="profitable"
//             label="Profitable"
//             placeholder="????"
//             isLoading={isSubmitting}
//             value={values.profitable}
//             error={errors.profitable}
//             touched={touched.profitable}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//             <DatePicker
//               {...props}
//               label="Início de prazo:  "
//               name="creationDate"
//               placeholder="Insira a data"
//               // isLoading={isSubmitting}
//               value={values.creationDate}
//               // error={errors.creationDate}
//               // touched={touched.creationDate}
//               handleChange={handleChange}
//             />

          
//             <DatePicker
//               {...props}
//               name="dueDate"
//               label="Fim do prazo:  "
//               placeholder="Insira a data"
//               // isLoading={isSubmitting}
//               value={values.dueDate}
//               // error={errors.creationDate}
//               // touched={touched.creationDate}
//               handleChange={handleChange}
//             />

//           <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
//         </form>
//       )}
//     />
//   );
// };

export default FormTaskCreate;
