import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import BgImage from "../../assets/Images/bg-warehouse.jpg";
import { Button, Form, Card } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function HomePageSection5() {
  return (
    <Container
      style={{
        width: "1180px",
        height: "420px",
        top: "1406px",
        left: "130px",
        // border: "1px solid blue",
        position: "absolute",
        display: "flex",
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <Col
        style={{
          width: "440px",
          height: "139px",
          top: "40px",
          left: "4px",
          position: "relative",
          // border: "1px solid red",
        }}
      >
        <Card
          style={{
            width: "440px",
            height: "78px",
            // top: "1446px",
            // left: "170px",
            background: "none",
            backgroundColor: "none",
          }}
        >
          <Typography
            style={{
              //styleName: Title-H2;
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "39px",
              letterSpacing: " -0.20000000298023224px",
              textAlign: "left",
              color: "#FFFFFF",
              // background: "#FFFFFF",
              background: "none",
              backgroundColor: "none",
            }}
          >
            An easy way to send requests to all suppliers
          </Typography>
        </Card>
        <Card
          style={{
            width: "390px",
            height: "48px",
            // top: 1537px
            // left: 170px
            background: "none",
            backgroundColor: "none",
          }}
        >
          <Typography
            style={{
              //styleName: Text-info;
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.20000000298023224px",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Typography>
        </Card>
      </Col>
      <Col
        style={{
          width: "491px",
          height: "346px",
          top: "30px",
          left: "658px",
          borderRadius: "6px",
          border: "2px solid green",
          position: "absolute",
        }}
      >
        <Card
          style={{
            width: " 491px",
            height: "346px",
            // top: 1436px
            // left: 788px
            background: "#FFFFFF",
            boxShadow: " 0px 1px 2px 0px #38383840",
          }}
        >
          <Card
            style={{
              width: "332px",
              height: "28px",
              // top: 1458px
              // left: 808px
              // top: "52px",
              // position: "absolute",
              top: "10px",
              position: "relative",
            }}
          >
            <Typography
              style={{
                //styleName: Title-H4;
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "28px",
                letterSpacing: "-0.20000000298023224px",
                textAlign: "left",
                color: " #1C1C1C",
              }}
            >
              Send quote to suppliers
            </Typography>
          </Card>
          <Card
            style={{
              width: "440px",
              height: "40px",
              // top: 1504px
              // left: 808px
              top: "25px",
              position: "relative",
              border: "none",
            }}
          >
            <Form.Control
              style={{
                width: "440px",
                height: "40px",
                // border: "1px solid blue",
                top: "25px",
                position: "relative",
              }}
              placeholder="What item do you need?"
            ></Form.Control>
          </Card>
          <Form.Group
            style={{
              width: "440px",
              height: "73px",
              // top: 1564px
              // left: 808px
              top: "50px",
              position: "relative",
            }}
          >
            <Form.Control
              style={{ width: "440px", height: "73px" }}
              as="textarea"
              rows={3}
              placeholder="Type more Details"
            />
          </Form.Group>
          <Form.Group
            style={{
              width: "206px",
              height: "40px",
              // top: 1657px
              // left: 808px
              top: "65px",
              position: "relative",
            }}
          >
            <Form.Control
              style={{
                width: "206px",
                height: "40px",
                // border: "1px solid red",
              }}
              placeholder="Quantity"
            />
          </Form.Group>
          <Form.Select
            style={{
              width: "111px",
              height: "40px",
              border: "1px",
              top: "26px",
              position: "relative",
              left: "250px",
            }}
          >
            <option>PCs</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button
            style={{
              width: "128px",
              height: "40px",
              // top: 1717px
              // left: 808.5px
              top: "70px",
              position: "relative",
              padding: "0px 16px 0px 16px",
              borderRadius: " 6px",
              gap: "10px",
              background: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
            }}
          >
            Send
          </Button>
        </Card>
      </Col>
    </Container>
  );
}
