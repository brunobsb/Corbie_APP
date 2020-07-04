import React from 'react';
import { Modal as ModalMasterTask, Button } from 'antd';


class ModalEditTask extends React.Component {

  render() {

    return (
      <div>

        <ModalMasterTask
          visible={this.props.onCancelVisible}
          title="Edite a sua Tarefa"
          onOk={this.props.handleOk}
          onCancel={this.props.onCancel}
          footer={[
            // <Button key="submit" type="primary" style={{ background: "#595959", borderColor: "#595959", borderRadius:"6px", boxShadow:"3px 3px 3px gray"}} loading={loading} onClick={this.handleOk}>
            //   Cadastrar
            // </Button>,
          ]}>
          
  {this.props.children}
        </ModalMasterTask>
      </div>
    );
  }
}

export default ModalEditTask;
