import React from 'react'
import './Home.css';
import Navbar from './Navbar';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';

const contentStyle = {
  marginTop: "10rem",
  marginBottom: "5rem",
  height: '80vh',
  width:"100vw",
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  return (
    <div className="Home">
      <Navbar/>
      <h1></h1>
    {/* <Carousel afterChange={onChange}>
      <div>
        <img  src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2394294.jpg" style={contentStyle}/>
      </div>
      <div>
        <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2394294.jpg" style={contentStyle}/>
      </div>
      <div>
        <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2394294.jpg" style={contentStyle}/>
      </div>
      <div>
        <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-casual-shoes-png-image_2394294.jpg" style={contentStyle}/>
      </div>
    </Carousel> */}
    {/* <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row> */}
    </div>
  );
};

export default Home