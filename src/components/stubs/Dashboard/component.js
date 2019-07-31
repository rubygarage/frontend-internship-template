import React from 'react'
import {
  Layout, Row, Col, Input, Pagination
} from 'antd'
import { range } from 'lodash'

import Header from '../Header'
import Movie from '../MovieItem'

const Dashboard = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Row
        type="flex"
        className="top-margin bottom-margin-double"
      >
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}
        >
          <Input.Search
            placeholder="Enter movie name"
            size="large"
            enterButton="Search"
          />
        </Col>
      </Row>
      <Row
        type="flex"
        gutter={16}
        justify="center"
        className="margin-none"
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
          xl={{ span: 20 }}
        >
          {range(17).map(item => (
            <Col
              key={item}
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
              className="bottom-margin"
            >
              <Movie />
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

export default Dashboard
