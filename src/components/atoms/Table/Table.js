import React, { Component } from 'react';
import { Table as TableMaster } from 'antd';


class Table extends Component {

  render() {

    return (
      <>
        <TableMaster columns={this.props.columns} dataSource={this.props.projects} onChange={this.handleChange} />
      </>
    );
  }
}


export default Table;
