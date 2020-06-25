import React, { Component } from 'react';
import { Text, Table } from '../../atoms';
// import { Link } from 'react-router-dom';





class ProjectView extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    }

    render(){
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {}; // O que é ? pegar tudo de sorted info?
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name1',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
          { text: 'John', value: 'John' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        ellipsis: false,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: false,
      },
    ];
        return(
<div>
<Text>Project View</Text>
{/* <Button >            
<Link to="/edit-project" >
    Edit project
</Link>
</Button> */}
      <>
        <Table columns={columns} dataSource={this.props.projects} onChange={this.handleChange} />
      </>
</div>
        )
    }
}

export default ProjectView;