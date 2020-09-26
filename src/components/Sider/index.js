import React from 'react';

import { Layout, Menu, } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import Date from '../Date';

import './style.css';


const { SubMenu, ItemGroup } = Menu;

const { Sider } = Layout;

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
            
                <Sider collapsible = {true} style={{width: '30rem'}}>
                    <Menu
                    mode="vertical"
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={['1']}
                    theme= {"dark"}
                    
                    >
                        <SubMenu key="sub0" icon={<UserOutlined />} title="subnav 1">
                            <Date></Date>
                        </SubMenu>
                        
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            
        );
    }
}

export default index;