import { Link } from "react-router-dom";
import "./ChildrenNew.css";
import { Row, Col, Divider, Button } from "antd";
import "antd/dist/antd.css";
import { Carousel, Card, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { detailFaceAction, getDataCandidate } from "../action/actionCandidate";
import { useEffect, useState } from "react";

const { Meta } = Card;

export default function ChildrenCandidateFace(props) {
  const dispatch = useDispatch();
  const click = (id) => {
    console.log(id);
    getDataCandidate(id, dispatch);
  };

  const id = props.id;
  return (
    <Link
      to={`/primary/face/detail/${id}`}
      style={{ color: "black" }}
      onClick={() => click(id)}
    >
      <li>
        <Card
          hoverable
          style={{
            width: 300,
            height: 500,
            border: "1px solid #2f4cfa",
            margin: 25,
          }}
          cover={<img alt="example" id="img_card" src={props.img}/>}
        >
          <Meta title={props.name} />
          <p id="card_content_des">
            <b>Tài năng: </b>
            {props.describe}
          </p>
          <p id="card_content">
            <b>Phòng ban: </b>
            {props.department}
          </p>
          <p id="card_content">
            <b>Lớp: </b>
            {props.class}
          </p>
          <Row style={{ margin: "10px 0", padding: "0 50px" }}>
            <Col
              span={12}
              style={{
                border: "1px solid #2f4cfa",
                textAlign: "center",
                padding: 5,
                color: "black",
              }}
            >
              {props.vote}
            </Col>
            <Col span={12} style={{ border: "1px solid #2f4cfa" }}>
              <Button style={{ background: "#ff6a22", color: "white" }}>
                Bình chọn
              </Button>
            </Col>
          </Row>
        </Card>
      </li>
    </Link>
  );
}

export function ChildrenCandidateFaceRight(props) {
  const dispatch = useDispatch();
  const click = (id) => {
    dispatch(detailFaceAction(id));
  };
  const id = props.id;
  return (
    <Link
      to={`/primary/face/detail/${id}`}
      style={{ color: "black" }}
      onClick={() => click(id)}
    >
      <div className="bound_face">
        <Card
          style={{
            width: 300,
            marginTop: 16,
            border: "none",
            textAlign: "left",
          }}
        >
          <Meta
            avatar={
              <img
                style={{ width: "7rem", height: "7rem",objectFit: 'cover' }}
                src={props.img}
                alt="img-left"
              />
            }
            title={props.name}
            description={
              <Row style={{ margin: " 0", padding: "0 " }}>
                <Col
                  span={11}
                  style={{
                    border: "1px solid #2f4cfa",
                    textAlign: "center",
                    padding: 5,
                    color: "black",
                  }}
                >
                  {props.vote}
                </Col>
                <Col span={12} style={{ border: "1px solid #2f4cfa" }}>
                  <Button
                    style={{
                      background: "#ff6a22",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    Bình chọn
                  </Button>
                </Col>
              </Row>
            }
          />
        </Card>
      </div>
    </Link>
  );
}

export function ChildrenCandidateFaceLeft(props) {
  const dispatch = useDispatch();
  const click = (id) => {
    dispatch(detailFaceAction(id));
  };
  const id = props.id;
  return (
    <Link
      to={`/primary/face/detail/${id}`}
      style={{ color: "black" }}
      onClick={() => click(id)}
    >
      <li>
        <Card
          hoverable
          style={{
            maxWidth: 300,
            height: 500,
            border: "1px solid #2f4cfa",
            margin: 25,
          }}
          cover={
            <div id="bound_img_card">
              <img id="img_card" alt="example" src={props.img} />
            </div>
          }
        >
          <Meta title={props.name} />
          <div id="card_content_des">
            <b>Tài năng: </b>
            {props.describe}
          </div>
          <p id="card_content">
            <b>Phòng ban: </b>
            {props.department}
          </p>
          <p id="card_content">
            <b>Lớp: </b>
            {props.class}
          </p>
          <Row style={{ margin: "10px 0", padding: "0 50px" }}>
            <Col
              span={12}
              style={{
                border: "1px solid #2f4cfa",
                textAlign: "center",
                padding: 5,
                color: "black",
              }}
            >
              {props.vote}
            </Col>
            <Col span={12} style={{ border: "1px solid #2f4cfa" }}>
              <Button
                style={{ background: "#ff6a22", color: "white", zIndex: 1 }}
              >
                Bình chọn
              </Button>
            </Col>
          </Row>
        </Card>
      </li>
    </Link>
  );
}
