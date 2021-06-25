import React, { Component } from 'react'
import { Timeline } from 'antd';
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import './index.less'
const { SubMenu } = Menu;
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className="layoutBar" style={{ width: this.state.collapsed ? 80 : 256 }}>
                <div style={{ width: this.state.collapsed ? 80 : 256 }}>
                    <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                        <Button type="primary" style={{ marginBottom: 3, marginTop: 6 }} onClick={this.toggleCollapsed} >
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <NavLink to='/home'>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <NavLink to='/about'>About</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            Option 3
          </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}