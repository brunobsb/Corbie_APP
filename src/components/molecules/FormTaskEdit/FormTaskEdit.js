import React, { Component } from 'react';
import formtaskeditSchema from './FormTaskEdit.schema';
import { FormWrapper } from './FormTaskEdit.style';
import { NewInput, Button, InputNumber, InputValor, Select, DatePicker } from '../../atoms';
import  ApiService  from '../../../api/Service'
import { Skeleton } from 'antd';

class FormTaskEdit extends Component {
    state = {
      status: '',
      isUserInfoLoaded: false,
      initialState: {
        title: '',
        description: '',
        duration: '',
        cost: '',
        status: '',
        type: '',
        profitable: 'true',
        creationDate: '',
        dueDate: '',
      },
    }
    



    async componentDidMount () {
      const {
        title,
        description,
        duration,
        cost,
        status,
        type,
        profitable,
        creationDate,
        dueDate,
      } = await ApiService.listAllTasks();

    this.setState({
        initialState: {
            title, description, duration, cost, status, type, profitable, creationDate, dueDate
        },
        isUserInfoLoaded: true,
      });
    };

    onSubmitMethod = async (values, actions) => {

    };

    render() {
        return this.state.isUserInfoLoaded ? (
          <FormWrapper
            initialValues={this.state.initialState}
            validationSchema={formtaskeditSchema}
            onSubmit={this.onSubmitMethod}
          >
            {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, ...props }) => (
              <form onSubmit={handleSubmit}>
              <div>
              <NewInput
            {...props}
            name="title"
            label="Título"
            placeholder="Insira o título do tarefa"
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
            placeholder="Insira descrição do tarefa"
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
              placeholder="Insira o tempo de duração do tarefa"
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
              label="Custo do tarefa:"
              placeholder="Insira o valor"
              isLoading={isSubmitting}
              value={values.cost}
              error={errors.cost}
              touched={touched.cost}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

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
              onSelect={values.status}
              handleChange={this.getData}
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
                <Button type="submit" isLoading={isSubmitting}>Atualizar</Button>
              </form>
            )}
          </FormWrapper>
        ) : (
          <Skeleton active/>
        )
      }
    }
    
    export default FormTaskEdit;
    