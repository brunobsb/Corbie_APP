import React, { Component } from 'react';
import formprojectcreateSchema from './FormProjectCreate.schema';
import { FormWrapper } from './FormProjectCreate.style';
import { NewInput, Button, DatePicker, InputNumber, InputValor, Select} from '../../atoms';
import  ApiService  from '../../../api/Service';
import './FormProjectCreate.css';


class FormProjectCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
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


getData = (values, data) => {
this.setState({status:data.value})
  }

  onSubmitMethod = async (values, actions) => {
    console.log(actions);
    const data = {...values, status:this.state.status}
    await ApiService.createProject(data);
 
    
   actions.setSubmitting(false);

    this.props.onCancel();
  };


  render() {
    return(
<FormWrapper
      initialValues={this.state.initialState}
      validationSchema={formprojectcreateSchema}
      onSubmit={this.onSubmitMethod}
      >
      {({handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched, value, children, ...props }) => (
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
              label="Status:"
              placeholder="Insira o valor"
              isLoading={isSubmitting}
              value={values.status}
              error={errors.status}
              touched={touched.status}
              defaultValue={values.status}
              data={this.props.options}
              handleChange={this.getData}
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
          <div className="cadastrar" >
          <Button type="submit" isLoading={isSubmitting}>Cadastrar</Button>
          </div>
        </form>
      )}
      </FormWrapper>
    )
  }
}
export default FormProjectCreate;



