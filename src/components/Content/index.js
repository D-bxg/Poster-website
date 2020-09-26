import React from 'react';
// 引入ant design样式
import { Layout, Breadcrumb } from 'antd';

import './style.css';

const { Content, } = Layout;

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Layout style={{margin: '6.4rem 0 0', padding: '0 24px 24px' , width: '100%', height: '100vh' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                Content
                </Content>
            </Layout>
        );
    }
}

export default index;