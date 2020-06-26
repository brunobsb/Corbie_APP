import React, { Component } from 'react';
import { Text, Table } from '../../atoms';
import {Tag as Status, Space } from 'antd';
// import { Link } from 'react-router-dom';





class ProjectView extends Component {



    componentDidMount = async () => {
      await this.props.loadProjects()  
      }
      render(){

      const columns = [
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Data de criação',
          dataIndex: 'creationDate',
          key: 'creationDate',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: status => (
            <>
              {status.map(status => {
                let color = status.length > 5 ? 'geekblue' : 'green';
                if (status === 'CANCELED') {
                  color = 'volcano';
                } else if(status === 'BACKLOG'){
                  color = 'default'
                }
                return (
                  <Status color={color} key={status}>
                    {status}
                  </Status>
                );
              })}
            </>
          ),
        },
        {
          title: 'Horas Estimadas',
          dataIndex: 'duration',
          key: 'duration',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Edit </a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];


 
        return(
<div>
<Text>Project View</Text>

      <>
        <Table columns={columns} projects={this.props.projects} onChange={this.handleChange} />
      </>
</div>
        )
    }
}

export default ProjectView;