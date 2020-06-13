import React from 'react';
import './LoggedTemplate.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from './LoggedTemplate.style';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const { Header, Content, Footer } = Layout;

const LoggedTemplate = ({children}) => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#4A4A48', position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" > 
          <Logo style={{marginTop:'-10px', width: '50px'}} />
        </div>
        <Menu theme="dark" style={{backgroundColor: '#4A4A48'}} mode="horizontal" defaultSelectedKeys={['0']}>
          <Menu.Item key="1">
            <Link to="/relatorios" />
            Relatórios
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/edit" />
            Perfil
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/create-project" />
            Projetos
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/times&equipes" />
            Times & Equipes
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/logout" />
            Logout
          </Menu.Item>
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
