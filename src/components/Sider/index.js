import React from 'react';

import { Layout, Menu, } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, CalendarOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom';

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
                    <Menu mode="vertical" theme= {"dark"}>
                        <SubMenu key="sub0" icon={<CalendarOutlined />} title="选择讲座时间">
                            <Date></Date>
                        </SubMenu>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1"><Link to={'/index/1'}>option1</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={'/index/2'}>option2</Link></Menu.Item>
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