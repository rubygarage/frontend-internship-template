import React from 'react'
import {
  Layout, Row, Col, Typography, Modal, Icon, Pagination
} from 'antd'
import { range } from 'lodash'

import Header from '../Header'
import CreateListModal from '../CreateListModal'
import Movie from '../MovieItem'

const showDeleteMovieModal = () => {
  Modal.confirm({
    title: 'Do you want to delete movie from this list?',
    onOk() {},
    onCancel() {}
  })
}

const showDeleteListModal = () => {
  Modal.confirm({
    title: 'Do you want to delete list?',
    onOk() {},
    onCancel() {}
  })
}

class ListDetails extends React.Component {
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
          <Row
            type="flex"
            justify="center"
            className="top-margin"
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
            >
              <Typography.Title className="title">
                List item 1
                {' '}
                <Icon
                  type="minus-circle"
                  onClick={showDeleteListModal}
                />
              </Typography.Title>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            gutter={8}
            className="margin-none"
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
            >
              {range(10).map(item => (
                <Col
                  key={item}
                  xs={{ span: 12 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  xl={{ span: 4 }}
                  className="bottom-margin"
                >
                  <Movie
                    actions={[<Icon
                      key="delete"
                      type="delete"
                      onClick={showDeleteMovieModal}
                    />]}
                  />
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

export default ListDetails
