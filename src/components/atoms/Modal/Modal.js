import React from 'react';
import { Modal as ModalMaster, Button } from 'antd';
// import { FormProjectCreate } from '../../molecules';

class Modal extends React.Component {

  render() {

    return (
      <div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}} >
        <Button type="primary" style={{ background: "#595959", borderColor: "#595959", borderRadius:"6px", boxShadow:"3px 3px 3px gray" }} onClick={this.props.showModal}>
          Novo Projeto
        </Button>
        </div>

        <ModalMaster
          visible={this.props.onCancelVisible}
          title="Cadastre seu Projeto"
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer={[
            // <Button key="submit" type="primary" style={{ background: "#595959", borderColor: "#595959", borderRadius:"6px", boxShadow:"3px 3px 3px gray"}} loading={loading} onClick={this.handleOk}>
            //   Cadastrar
            // </Button>,
          ]}
        >
          {this.props.children}
        </ModalMaster>
      </div>
    );
  }
}

export default Modal;
