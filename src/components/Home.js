import { navigate } from '@reach/router';
import { Button, Card, Col, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { MakeBggrey, MakeBgWhite } from '../styles/ContentLayout';
import Navbar from './Navbar';



import { Carousel } from 'antd';
const contentStyle = {

  color: 'white',
  lineHeight: '200px',
  textAlign: 'center',
  background: 'white',
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
          <h1 style={{ fontSize: "35px", fontFamily: "cursive" }}> Time To Treat YOUR FEET!!!</h1>
          <p style={{ fontSize: "25px", fontFamily: "san-serif" }}>Welcome to BIS Multi vendor Sneaker Shop!</p>
          <p style={{ fontSize: "20px" }}>We serve you the best quality shoes  </p>
          <p style={{ fontSize: "20px" }}>with various features which makes </p>
          <p style={{ fontSize: "20px" }}>your work easier and faster.</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Ready to explore? Join Us and Enjoyy!!</p>
          <Button type="primary" size="large" onClick={handleClick}> SHOP NOW</Button>
        </Col>
        <Col xs={11}>
          <Carousel autoplay style={{ marginTop: "8rem" }}>
            <div>
              <img style={contentStyle} src="/assets/content.png" />
            </div>

            <div>
              <img style={contentStyle} src="/assets/nikeair.png" />
            </div>

            <div>
              <img style={contentStyle} src="/assets/nike.png" />
            </div>

            <div>
              <img style={contentStyle} src="/assets/jutta.png" />
            </div>

            <div>
              <img style={contentStyle} src="/assets/sport.png" />
            </div>

          </Carousel>
        </Col>
      </Row>
      <MakeBggrey>
        <h1 style={{ fontSize: "35px", fontFamily: "cursive" }}> Our Special Service </h1>
        <Row gutter={50}>
          <Col span={8}>
            <Card title="Verfication of Product" bordered={false} style={{ width: "300px" }} >
              <img src="/assets/verify.png" style={{ width: "30%" }} />
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>Certain rules and regulation are followed for this. Learn More</p>

            </Card>
          </Col>
          <Col span={8}>
            <Card title="Fast Delivery" bordered={false} style={{ width: "300px" }}>
              <img src="/assets/delivery.png" style={{ width: "40%" }} />
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>Fast and reliable delivery all over Nepal.</p>

            </Card>
          </Col>
          <Col span={8}>
            <Card title="Best Quality" bordered={false} style={{ width: "300px" }} >
              <img src="/assets/quality.png" style={{ width: "30%" }} />
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>Best quality products are available.</p>

            </Card>
          </Col>
          </Row>
      </MakeBggrey>
      <Footer style={{ textAlign: 'center', height: "15rem", backgroundColor: "white" }}>Ant Design ©2023 Created by Ant UED</Footer>
    </div >
  );
};

export default Home