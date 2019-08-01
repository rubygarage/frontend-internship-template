import React from 'react'
import {
  Layout, Row, Col, Typography, Modal, Icon, Pagination
} from 'antd'
import { range } from 'lodash'

import Header from '../Header'
import Movie from '../MovieItem'

const showDeleteMovieModal = () => {
  Modal.confirm({
    title: 'Do you want to delete movie from favorites?',
    onOk() {},
    onCancel() {}
  })
}

const Favorites = () => (
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
          <Typography.Title className="title">Favorites</Typography.Title>
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
  </Layout>
)

export default Favorites
