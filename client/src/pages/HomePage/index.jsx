import React, { useEffect, useState } from "react";
import "./index.scss";
import { Tabs } from "antd";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Divider, Row } from "antd";
import { Helmet } from "react-helmet";

import { getAllData } from "../../services";
const HomePage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllData().then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  const items = [
    {
      key: "1",
      label: "ALL",
      children: "",
    },
    {
      key: "2",
      label: "WOMENS",
      children: "",
    },
    {
      key: "3",
      label: "ACCESSORIES",
      children: "",
    },
    {
      key: "4",
      label: "MENS",
      children: "",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="banner">
        <div className="container">
          <div className="banner-inner">
            <p>SPRING / SUMMER COLLECTION 2017</p>
            <h1>
              Get up to 30% Off <br />
              New Arrivals
            </h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
      <section id="images">
        <div className="container">
          <div className="images">
            <div className="img1">
              <button>WOMEN`S</button>
            </div>
            <div className="img2">
              <button>ACCESSORIES</button>
            </div>
            <div className="img3">
              <button>MEN`S</button>
            </div>
          </div>
        </div>
      </section>
      <section id="arrivals">
        <div className="container">
          <h2>New Arrivals</h2>
          <div className="tabs">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          <div className="cards">
            <Row gutter={16}>
              {products &&
                products.map((p) => {
                  return (
                    <Col
                      className="gutter-row"
                      span={6}
                      key={p._id}
                      xs={24}
                      md={16}
                      lg={6}
                    >
                      <div>
                        <Card
                          hoverable
                          cover={<img alt="example" src={p.imageUrl} />}
                        >
                          <Meta title={p.title} />
                          <div className="spans">
                            <span>${p.newPrice}</span>
                            <span className="oldprice">{p.oldPrice}</span>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
