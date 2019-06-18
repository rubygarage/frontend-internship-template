import React from 'react'
import {
  Layout, Row, Col, Card, Typography, Modal, Icon, PageHeader, Pagination
} from 'antd'
import { range } from 'lodash'

import Header from '../Header'
import CreateListModal from '../CreateListModal'

const showModal = () => {
  Modal.confirm({
    title: 'Do you want to delete list?',
    onOk() {},
    onCancel() {}
  })
}

class Lists extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalVisible: false }

    this.showModal = () => {
      this.setState({ modalVisible: true })
    }

    this.hideModal = () => {
      this.setState({ modalVisible: false })
    }
  }

  render() {
    const { modalVisible } = this.state

    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row>
            <Col
              offset={2}
              span={20}
            >
              <PageHeader
                onBack={() => window.history.back()}
                title={(
                  <Typography.Title>
                    My Lists
                    {' '}
                    <Icon
                      type="plus-circle"
                      onClick={this.showModal}
                    />
                  </Typography.Title>
)}
              />
            </Col>
          </Row>
          <Row
            gutter={8}
            type="flex"
          >
            <Col
              span={20}
              offset={2}
            >
              {range(10).map(index => (
                <Col
                  key={index}
                  xs={{ span: 12 }}
                  sm={{ span: 8 }}
                  md={{ span: 6 }}
                  lg={{ span: 4 }}
                  xl={{ span: 4 }}
                >
                  <Card
                    hoverable
                    className="top-margin"
                    actions={[<Icon
                      key="delete"
                      type="delete"
                      onClick={showModal}
                    />]}
                  >
                    <Typography.Title level={4}>
                      List name
                      {index}
                    </Typography.Title>
                    Description
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
          >
            <Col>
              <Pagination
                defaultCurrent={1}
                total={50}
                className="pagination"
              />
            </Col>
          </Row>
        </Layout.Content>
        <Modal
          visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    )
  }
}

export default Lists
