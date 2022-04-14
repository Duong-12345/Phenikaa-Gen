import { Link } from "react-router-dom";
import "./ChildrenNew.css";
import { Row, Col, Divider, Card, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { detailTalentAction } from "../action/actionCandidate";

const { Meta } = Card;

export default function ChildrenCandidateTalent(props) {
  
  const dispatch = useDispatch();
  const click = (id) => {
    dispatch(detailTalentAction(id));
  };
  // console.log(click)
  const id = props.id;
  return (
    <Link
      to={`/primary/talent/detail/${id}`}
      style={{ color: "black" }}
      onClick={() => click(id)}
    >
      <li>
        <Card
          hoverable
          style={{
            width: 300,
            height: 450,
            border: "1px solid #2f4cfa",
            margin: 25,
          }}
          cover={<img alt="example" id="img_card" src={props.img} />}
        >
          <Meta title={props.name} />
          <div id="card_content">Tài năng: {props.describe}</div>
          <p id="card_content">Phòng ban: {props.department}</p>
          <p id="card_content">Lớp: {props.class}</p>
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
                style={{ background: "#8e44ad", color: "white", zIndex: 1 }}
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
export function ChildrenCandidateTalentLeft(props) {
  console.log(props)
  const dispatch = useDispatch();
  const click = (id) => {
    dispatch(detailTalentAction(id));
  };
  const id = props.id;
  return (
    <Link
      to={`/primary/talent/detail/${id}`}
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
          cover={<img alt="example" id="img_card" src={props.img} />}
        >
          <Meta title={props.name} />
          <div id="card_content_des"><b>Tài năng: </b>{props.describe}</div>
          <p id="card_content"><b>Phòng ban: </b>{props.department}</p>
          <p id="card_content"><b>Lớp: </b>{props.class}</p>
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
                style={{ background: "#8e44ad", color: "white", zIndex: 1 }}
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

export function ChildrenCandidateTalentRight(props) {
  const dispatch = useDispatch();
  const click = (id) => {
    dispatch(detailTalentAction(id));
  };
  const id = props.id;
  return (
    <Link
      to={`/primary/talent/detail/${id}`}
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
                style={{ width: "7rem", height: "7rem", objectFit: 'cover' }}
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
                      background: "#8e44ad",
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
