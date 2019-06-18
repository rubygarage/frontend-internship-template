import React from 'react'
import { Card, Col } from 'antd'

const Movie = () => (
  <Col
    xs={{ span: 12 }}
    sm={{ span: 12 }}
    md={{ span: 8 }}
    lg={{ span: 6 }}
    xl={{ span: 4 }}
  >
    <Card
      hoverable
      cover={(
        <img
          alt="example"
          src="http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9"
        />
)}
      className="top-margin"
    >
      <Card.Meta
        title="Avengers: Endgame"
        description="Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
      />
    </Card>
  </Col>
)

export default Movie
