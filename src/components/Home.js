import { navigate } from '@reach/router';
import { Button, Card, Col, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { MakeBggrey, MakeBgWhite } from '../styles/ContentLayout';
import Navbar from './Navbar';


const Home = () => {


  const handleClick = () => {


    let path = `./shoping`;
    navigate(path);


  }

  return (
    <div className="Home">
      <Navbar />
      <MakeBgWhite>
        <Row gutter={16}>
          <Col style={{ margin: "10rem", marginRight: "50px" }}>
            <h1 style={{ fontSize: "35px" }}> Time To Treat YOUR FEET!!!</h1>
            <p style={{ fontSize: "22px" }}>Welcome to BIS Multi vendor Sneaker Shop</p>
            <p style={{ fontSize: "22px" }}>We serve you the best quality shoes  </p>
            <p style={{ fontSize: "22px" }}>with various features which makes your</p>
            <p style={{ fontSize: "22px" }}>work easier and faster.</p>
            <p style={{ fontSize: "22px" }}>Ready to explore? Join Us and Enjoyy!!</p>
            <Button type="primary" size="large" onClick={handleClick}> SHOP NOW</Button>
          </Col>

          <Col style={{ width: "100%" }}>
            <img src="/assets/shoes.png" style={{ width: "100%" }} />
          </Col>

        </Row>


      </MakeBgWhite>
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
            <Card title="Card title" bordered={false} style={{ width: "300px" }} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </MakeBggrey>
      <Footer style={{ textAlign: 'center', height: "20rem", backgroundColor: "red" }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div >
  );
};

export default Home