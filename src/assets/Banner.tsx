import { Col, Container, Row } from "react-bootstrap";

export default function Banner() {
  return(
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col className="p-0">
          <video
            className="w-100 d-block"
            autoPlay
            loop
            muted
            playsInline
            style={{ height: "auto" }}
            // poster="/fallback.jpg" // optional: fallback image before video loads
          >
            <source src="/brides1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  )
}