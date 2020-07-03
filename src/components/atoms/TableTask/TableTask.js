import React, { Component } from 'react';
import { Table as TableTaskMaster } from 'antd';



class TableTask extends Component {

  render() {

    return (
      <>
        <TableTaskMaster columns={this.props.columns} dataSource={this.props.tasks} onChange={this.handleChange} />
      </>
    );
  }
}


export default TableTask;
