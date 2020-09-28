import React from 'react';
// 引入ant design样式
import { Layout, Menu, } from 'antd';


import './style.css';


const { Header, } = Layout;

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 10, width: '100%',}} className="header">
                <div className="logo" />
                <Menu style={{ float: 'right' }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
            </Layout>
        );
    }
}

export default index;