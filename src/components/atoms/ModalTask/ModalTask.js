import React from 'react';
import { Modal as ModalMasterTask, Button } from 'antd';
import { FormTaskCreate } from '../../molecules';

class ModalTask extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

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

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}} >
        <Button type="primary" style={{ background: "#595959", borderColor: "#595959", borderRadius:"6px", boxShadow:"3px 3px 3px gray" }} onClick={this.showModal}>
          Nova Tarefa
        </Button>
        </div>

        <ModalMasterTask
          visible={visible}
          title="Cadastre sua Tarefa"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            // <Button key="submit" type="primary" style={{ background: "#595959", borderColor: "#595959", borderRadius:"6px", boxShadow:"3px 3px 3px gray"}} loading={loading} onClick={this.handleOk}>
            //   Cadastrar
            // </Button>,
          ]}
        >
<FormTaskCreate/>
        </ModalMasterTask>
      </div>
    );
  }
}

export default ModalTask;
