import React, { Component } from 'react';
import formprojectcreateSchema from './FormProjectCreate.schema';
import { FormWrapper } from './FormProjectCreate.style';
import { NewInput, Button, DatePicker, InputNumber, InputValor, Select } from '../../atoms';
import  ApiService  from '../../../api/Service';
import './FormProjectCreate.css';

class FormProjectCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserInfoLoaded: false,
      initialState: {
      title: '',
      description: '',
      hourPrice: '',
      duration: '',
      cost: '',
      status: '',
      creationDate: '',
      dueDate: '',
    },
  };
  }

  async componentDidMount () {

    this.setState({

        isUserInfoLoaded: true,
      });
    }  

  onSubmitMethod = async (values, actions) => {
    
    await ApiService.createProject(values);
    console.log(values);
   actions.setSubmitting(false);

   this.props.history.push('/project');
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
              isLoading={isSubmitting}
              value={values.hourPrice}
              error={errors.hourPrice}
              touched={touched.hourPrice}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <InputNumber
              {...props}
              name="duration"
              label="Duração: "
              placeholder="Insira o tempo de duração do projeto"
              isLoading={isSubmitting}
              value={values.duration}
              error={errors.duration}
              touched={touched.duration}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <InputValor
              {...props}
              name="cost"
              label="Custo do projeto:"
              placeholder="Insira o valor"
              isLoading={isSubmitting}
              value={values.cost}
              error={errors.cost}
              touched={touched.cost}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

          </div>

          <div  className="projectStyleCol" >  

            <Select
              {...props}
              name="status"
              label="Status: "
              defaultValue="teste"
              placeholder="Insira o status"
              data={this.props.options}
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
              isLoading={isSubmitting}
              value={values.creationDate}
              error={errors.creationDate}
              touched={touched.creationDate}
              handleChange={handleChange}
            />


            <DatePicker
              {...props}
              name="dueDate"
              label="Fim do prazo:  "
              placeholder="Insira a data"
              isLoading={isSubmitting}
              value={values.dueDate}
              error={errors.dueDate}
              touched={touched.dueDate}
              handleChange={handleChange}
            />
          </div>
          <Button type="submit" isLoading={isSubmitting}>Entrar</Button>
        </form>
      )}
      </FormWrapper>
    )
  }
}



// const FormProjectCreate = ({options, ...props}) => {
//   const initialState = {
//     title: '',
//     description: '',
//     hourPrice: '',
//     duration: '',
//     cost: '',
//     status: '',
//     creationDate: '',
//     dueDate: '',


//   };



//   const onSubmitMethod = async (values, actions) => {
//     // console.log(values);
//     await ApiService.createProject(values);
//     actions.setSubmitting(false);

//      props.history.push('/login');

//   };

//   return (
//     <FormWrapper
//       initialValues={initialState}
//       validationSchema={formprojectcreateSchema}
//       onSubmit={onSubmitMethod}
//       render={({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, ...props }) => (
//         <form onSubmit={handleSubmit}>
//           <div className="projectStyle" >
//             <NewInput
//               {...props}
//               name="title"
//               label="Título"
//               placeholder="Insira o título do projeto"
//               isLoading={isSubmitting}
//               value={values.title}
//               error={errors.title}
//               touched={touched.title}
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//             />
//           </div>
//           <div>
//             <NewInput
//               {...props}
//               style={{width:'100%', backgroundColor:'red !important'}}
//               name="description"
//               label="Descrição"
//               placeholder="Insira descrição do projeto"
//               isLoading={isSubmitting}
//               value={values.description}
//               error={errors.description}
//               touched={touched.description}
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//             />
//           </div>
//           <div className="projectStyleCol" >
//             <InputValor
//               {...props}
//               name="hourPrice"
//               label="Preço por Hora trabalhada:"
//               placeholder="Insira o valor"
//               // isLoading={isSubmitting}
//               value={values.hourPrice}
//               // error={errors.hourPrice}
//               // touched={touched.hourPrice}
//               handleChange={handleChange}
//               // handleBlur={handleBlur}
//             />

//             <InputNumber
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

//             <InputValor
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

//           </div>

//           <div  className="projectStyleCol" >  

//             <Select
//               {...props}
//               name="status"
//               label="Status: "
//               defaultValue="teste"
//               placeholder="Insira o status"
//               data={options}
//               // isLoading={isSubmitting}
//               // value={values.status}
//               // error={errors.status}
//               // touched={touched.status}
//               handleChange={handleChange}
//               // handleBlur={handleBlur}
//             />

            

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
//           </div>
//           <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
//         </form>
//       )}
//     />
//   );
// };

export default FormProjectCreate;
