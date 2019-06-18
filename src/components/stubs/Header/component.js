import React from 'react'
import {
  Typography, Row, Col, Avatar, Dropdown, Icon, Menu, Layout
} from 'antd'

const Overlay = () => (
  <Menu>
    <Menu.Item>Dashboard</Menu.Item>
    <Menu.Item>My Lists</Menu.Item>
    <Menu.Item>Logout</Menu.Item>
  </Menu>
)

const Header = () => (
  <Layout.Header>
    <Row
      type="flex"
      justify="space-between"
    >
      <Col>
        <Typography.Text>THE MOVIE DB</Typography.Text>
      </Col>
      <Col>
        <Avatar icon="user" />
        {' '}
        <Dropdown overlay={Overlay}>
          <Typography.Text>
            Username
            {' '}
            <Icon type="caret-down" />
          </Typography.Text>
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
)

export default Header
