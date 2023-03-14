import { navigate } from '@reach/router';
import { Button, Card, Col, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { MakeBggrey, MakeBgWhite } from '../styles/ContentLayout';
import Navbar from './Navbar';



import { Carousel } from 'antd';
const contentStyle = {

  color: 'black',
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {


  const handleClick = () => {


    let path = `./shoping`;
    navigate(path);


  }

  return (
    <div className="Home">
      <Navbar />



      <MakeBgWhite>

        <Col >
          <img src="/assets/shoes.png" style={{ width: "100%" }} />
        </Col>



      </MakeBgWhite>
      <Row gutter={16}>

        <Col xs={10} style={{ margin: "10rem", marginRight: "20px" }}>
          <h1 style={{ fontSize: "35px" }}> Time To Treat YOUR FEET!!!</h1>
          <p style={{ fontSize: "25px" }}>Welcome to BIS Multi vendor Sneaker Shop!</p>
          <p style={{ fontSize: "15px" }}>We serve you the best quality shoes  </p>
          <p style={{ fontSize: "15px" }}>with various features which makes </p>
          <p style={{ fontSize: "15px" }}>your work easier and faster.</p>
          <p style={{ fontSize: "15px" }}>Ready to explore? Join Us and Enjoyy!!</p>
          <Button type="primary" size="large" onClick={handleClick}> SHOP NOW</Button>
        </Col>
        <Col xs={11}>
          <Carousel autoplay>
            <div>

              <img style={contentStyle} src="/assests/content.png" />

            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <MakeBggrey>
        <h1> OUR FEATURE SERVICE</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false} style={{ width: "300px" }} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false} style={{ width: "300px" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false} style={{ width: "300px", }} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </MakeBggrey>
      <Footer style={{ textAlign: 'center', height: "20rem", backgroundColor: "papayawhip" }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div >
  );
};

export default Home