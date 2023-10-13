import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigateByUrl = useNavigate();

  const navigate = () => {
    navigateByUrl("/home");
  };

  return (
    <>
      <Row className="mb-5 align-items-center">
        <Col></Col>
        <Col md={6} className="mt-5">
          <h3 className="mb-3">
            Welcome to
            <span className="text-primary"> Home CinemA MediaPlayer</span>{" "}
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            veniam quidem facilis. Ipsam voluptates quod voluptatum eaque
            laudantium id nesciunt repellendus, dolore omnis ullam veritatis
            autem sunt enim? Ullam.
          </p>
          <button
            onClick={navigate}
            className="btn btn-primary fw-bolder text-center mt-2 "
          >
            Get Started
          </button>
          <br />
        </Col>
        <Col></Col>
        <Col md={4} className="mt-5">
          <img
            className="img-fluid"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0b328bb-0c7f-4058-acc9-9234c67b23fe/d3fc8k7-3d416815-74e8-4615-827e-ab7af9435147.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwYjMyOGJiLTBjN2YtNDA1OC1hY2M5LTkyMzRjNjdiMjNmZVwvZDNmYzhrNy0zZDQxNjgxNS03NGU4LTQ2MTUtODI3ZS1hYjdhZjk0MzUxNDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lufOZOKf1331rvNLFQYMCHgEmG-ieZ0iotZmR_kK7qo"
            alt="no img"
          />
        </Col>
      </Row>
      <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Features</h3>
        <div className="features mt-5 d-flex justify-content-between w-100">
          <Card style={{ width: "19rem" }}>
            <Card.Img
              className="p-1 shadow rounded"
              style={{ height: "270px" }}
              variant="top"
              src="https://img.freepik.com/free-vector/two-metallic-gears-setting-background_1017-19417.jpg?w=740&t=st=1696358458~exp=1696359058~hmac=7ee4b0e462e4012c39079970ecf23f05b07c0cd61ad1e1841404f3d1bec01f2d"
            />
            <Card.Body>
              <Card.Title className="text-center">Manage Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "19rem" }}>
            <Card.Img
              className="p-1 shadow rounded"
              style={{ height: "270px" }}
              variant="top"
              src="https://img.freepik.com/free-photo/pause-icon-multimedia-entertainment-perforated-paper_53876-16455.jpg?w=1060&t=st=1696359256~exp=1696359856~hmac=481137ea8c2834b066ebdd672367bf963110001d17faef57a92f24caa690ce19"
            />
            <Card.Body>
              <Card.Title className="text-center">Create Playlists</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "19rem" }}>
            <Card.Img
              className="p-1 shadow rounded"
              style={{ height: "270px" }}
              variant="top"
              src="https://img.freepik.com/free-vector/stopwatch-design_1166-2.jpg?w=740&t=st=1696359669~exp=1696360269~hmac=891bd4a8ec29f9a620e8171538c0d871c49a89327f8686a66321c70023c0a1da"
            />
            <Card.Body>
              <Card.Title className="text-center">Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mt-5 mb-5 d-flex justify-content-between rounded shadow border border-secondary align-items-center p-5 ">
        <div className="content">
          <h4 className="text-primary">
            Smooth, Fast and Immersive Experience
          </h4>
          <h5 className="text-primary-emphasis">
            Smooth, seamless video play.
          </h5>
          <h5 className="text-primary-emphasis">
            Preview the scene with snapshots.
          </h5>
          <h5 className="text-primary-emphasis">
            Choose which one when you have 2 sound cards.
          </h5>
        </div>
        <div className="video">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/IxDvpoCmAaY"
            title="Lokiverse Theme Video - Vikram | Kamal Haasan | ANIRUDH RAVICHANDER | Lokesh Kanagaraj"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
