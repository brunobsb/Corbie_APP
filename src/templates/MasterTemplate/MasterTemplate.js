import React from 'react';
import './MasterTemplate.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const { Header, Content, Footer } = Layout;
// const { SubMenu } = Menu;

const MasterTemplate = ({children, loggedUser, logout, ...props
}) => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#4A4A48', position: 'fixed', zIndex: 1, width: '100%' }}>

        <Link to="/" className="logo">
          <Logo style={{marginTop:'-10px', width: '50px'}} />
        </Link>

        {loggedUser ? (
          <Menu theme="dark" style={{backgroundColor: '#4A4A48'}} mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1" icon={""}>
              <Link to="/dashboard" >
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={""}>
              <Link to="/edit">
                Perfil
              </Link>
            </Menu.Item>
            <Menu.SubMenu {...props} icon={""} title="Projetos ">
              <Menu.Item key="create-project">
                <Link to="/create-project">
                  Criar projeto
                </Link>
              </Menu.Item>
              <Menu.Item key="project">
                <Link to="/project">
                  Visualizar Projetos
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu {...props} icon={""} title="Tarefas ">
              <Menu.Item key="create-task">
                <Link to="create-task">
                  Criar Tarefa
                </Link>
              </Menu.Item>
              <Menu.Item key="task">
                <Link to="/task">
                  Visualizar Tarefas
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="logout" onClick={logout}>
              <Link to="/login">
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" style={{backgroundColor: '#4A4A48'}} mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1">
              <Link to="/signup">
                Signup
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/login">
                Login
              </Link>
            </Menu.Item>
          </Menu>
        )}

      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0', textAlign:'left' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> </Footer>
    </Layout>
  );
};

export default MasterTemplate;
