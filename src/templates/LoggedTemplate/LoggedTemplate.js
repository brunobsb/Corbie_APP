import React from 'react';
import '../MasterTemplate/MasterTemplate.css';
import '../../components/atoms/Table/node_modules/antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from './LoggedTemplate.style';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const LoggedTemplate = ({children, logout, ...props}) => {

  return (

    <Layout>
      <Header style={{ backgroundColor: '#4A4A48', position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" > 
          <Logo style={{marginTop:'-10px', width: '50px'}} />
        </div>
        <Menu theme="dark" style={{backgroundColor: '#4A4A48'}} mode="horizontal" defaultSelectedKeys={['0']}>
          {/* {console.log(props.history.location.pathname.includes('edit'))} */}
          {/* {props.history.location.pathname('edit')
          && ( */}

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
          <SubMenu icon={""} title="Projetos ">

            <Menu.Item key="create-project">
              <Link to="/create-project">
                Criar projeto
              </Link>
            </Menu.Item>
            <Menu.Item key="view-project">
              Visualizar Projetos
            </Menu.Item>
          </SubMenu>

          <SubMenu icon={""} title="Tarefas ">
            <Menu.Item key="create-task">
              <Link to="create-task" >
                Criar Tarefa
              </Link>
            </Menu.Item>
            <Menu.Item key="view-task">
              Visualizar tarefas
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="logout">
            <Link to="/logout" onClick={logout}>
              Logout
            </Link>
          </Menu.Item>

            {/* <>
              <Menu.Item key="1">
                <Link to="/relatorios">
                  Relatórios
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/edit">
                  Perfil
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/create-project">
                  Projetos
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/times&equipes">
                  Times & Equipes
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/logout" onClick={logout}>
                  Logout
                </Link>
              </Menu.Item>

            </> */}
          {/* )}
          ; */}
{/* 
          {props.history.location.pathname.includes('create-projects')
          && (
            <React.Fragment>

            <Menu.Item key="1">
            <Link to="/dashboard" >
            Dashboard
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="create-project" >
            Criar Projeto
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/view-project" >
            Visualizar projetos
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/logout" >
            Logout
            </Link>
          </Menu.Item>
        
         </React.Fragment>)}
          ;

         {props.history.location.pathname.includes('create-tasks') && (
         <React.Fragment>

         <Menu.Item key="1">
            <Link to="/dashboard" >
            Dashboard
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="create-task" >
            Criar Tarefa
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/view-task" >
            Visualizar tarefas
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/logout" >
            Logout
            </Link>
          </Menu.Item>
        
         </React.Fragment>)}
          ; */}


          {/* <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
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

export default LoggedTemplate;
