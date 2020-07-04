import React, { Component } from 'react';
import { TableTask, ModalTask, ModalEditTask } from '../../atoms';
import {Tag as Status, Space, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {FormTaskEdit, FormTaskCreate} from '../../molecules';
import ApiService from '../../../api/Service';
import { Link } from 'react-router-dom';
import './TaskView.css';




class TaskView extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
    loading: false,
    visible: false,
    task_id:'',
    showEditTask: false,
  };
// Table Functions
getColumnSearchProps = dataIndex => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={node => {
          this.searchInput = node;
        }}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </Space>
    </div>
  ),
  filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => this.searchInput.select());
    }
  },
  render: text =>
    this.state.searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ) : (
      text
    ),
});

handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  this.setState({
    searchText: selectedKeys[0],
    searchedColumn: dataIndex,
  });
};

handleReset = clearFilters => {
  clearFilters();
  this.setState({ searchText: '' });
};
// modal functions
showModal = () => {
  this.setState({
    visible: true,
  });
};

handleOk = () => {
  this.setState({ loading: true });
  setTimeout(() => {
    this.setState({ loading: false, visible: false });
  }, 3000);
};

handleCancel = () => {
  this.setState({ visible: false });
};
deleteTask = async e => {
  const id = e.target.attributes.data.value;
  await ApiService.deleteTask(id)
}
editTask = async e => {
  const id = e.target.attributes.data.value;
  this.setState({task_id:id, showEditTask: true})
}
closeEditTask = () => {
  this.setState({showEditTask: !this.state.showEditTask})
}

      render(){

      const columns = [
        {
          title: 'Tarefas',
          dataIndex: 'title',
          key: 'title',
          ...this.getColumnSearchProps('title'),
          render: text =>
          <Link to="/edit-task">
          {text}
          </Link>
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
          ...this.getColumnSearchProps('status'),
          // render: status => (
          //   <>
          //     {status.map(status => {
          //       let color = status.length > 5 ? 'geekblue' : 'green';
          //       if (status === 'CANCELED') {
          //         color = 'volcano';
          //       } else if(status === 'BACKLOG'){
          //         color = 'default'
          //       }
          //       return (
          //         <Status color={color} key={status}>
          //           {status}
          //         </Status>
          //       );
          //     })}
          //   </>
          // ),
        },
        {
          title: 'Horas Estimadas',
          dataIndex: 'duration',
          key: 'duration',
        },
        {
          title: 'Horas Trabalhadas',
          dataIndex: 'durationnow',
          key: 'durationnow',
        },
        {
          title: 'Prazo',
          dataIndex: 'dueDate',
          key: 'dueDate',
        },
        {
          title: 'Ação',
          key: 'action',
          render: (text, record) => (
            
            <Space size="middle" data={record._id}>
            <Link onClick={this.editTask} data={record._id} >
            {console.log({id:record._id})}
            <h2 data={record._id}  >Edit</h2>
            </Link>
            <Link onClick={this.deleteTask}  data={record._id}>
            <h2 data={record._id}  >Del</h2>
            </Link>
            </Space>
          ),
        },
      ];



        return(
<div>
<div className="head" >suas tasks</div>

      <>
      <div className="modalButton" >
      {this.state.showEditTask && <ModalEditTask onCancelVisible={this.state.showEditTask} onCancel={this.closeEditTask}> <FormTaskEdit task_id={this.state.task_id} onCancel={this.closeEditTask} options={this.props.options} /></ModalEditTask>}
        <ModalTask onCancel={this.handleCancel} showModal={this.showModal} handleOk={this.handleOk} onCancelVisible={this.state.visible}>
       
          <FormTaskCreate onCancel={this.handleCancel} project={this.props.project} options={this.props.options} loadTasks={this.props.loadTasks} />
        </ModalTask>
      </div>
      <TableTask columns={columns} tasks={this.props.tasks} onChange={this.handleChange} />
      </>

</div>
        )
    }
}

export default TaskView;