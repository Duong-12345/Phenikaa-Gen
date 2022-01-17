import "./Home.css";
import { Carousel, Card, Avatar } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button } from "antd";
import { Row, Col, Divider } from "antd";
import { Tabs } from "antd";
import ChildrenCandidateFace, {
  ChildrenCandidateFaceLeft,
  ChildrenCandidateFaceRight,
} from "../../components/ChildrenCandidateFace";
import { useDispatch, useSelector } from "react-redux";
import { PlusSquareFilled } from "@ant-design/icons";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Column from "antd/lib/table/Column";
import {
  ChildrenCandidateTalentLeft,
  ChildrenCandidateTalentRight,
} from "../../components/ChidrenCandidateTalent";
import { DataTalent } from "../../components/DataCandidate";
import { useEffect } from "react";
import { getAllCandidate } from "../../action/actionCandidate";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const { Meta } = Card;

export default function BodyHome() {
  const candidate = useSelector((state) => state.candidate.candidate);
  const faceChildren = useSelector(
    (state) => state.candidateDetail1.faceChildren
  );
 
  const dispatch = useDispatch();
  const click = () => {
    getAllCandidate(dispatch);
  };
  let sort = []
  console.log(sort)
  sort = faceChildren.slice(0).sort((a,b)=>{
    if(a.vote< b.vote)
    return -1;
    if(a.vote>b.vote)
    return 1;
    return 0
  }).reverse()
  console.log(sort)
  console.log(faceChildren)
  useEffect(()=>{
    if(faceChildren.length==0){
      getAllCandidate(dispatch)
    }
  },[faceChildren])

  return (
    <>
      <div className="bound_slide">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>ARE YOU READY ?</h3>
          </div>
          <div>
            <h3 style={contentStyle}>HAPPY NEW YEAR</h3>
          </div>
        </Carousel>
      </div>
      <div className="content_block_body">
        <img
          className="img_body"
          src="https://www.hutech.edu.vn/hutechnextgen/images/timeline.png"
          alt="ảnh"
        ></img>
        <div className="button_bound_trang_chu">
          <Button id="button_trang_chu">
            <Link to="/register">ĐĂNG KÝ NGAY</Link>
          </Button>
          <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v12.0&appId=1194006731003022&autoLogAppEvents=1" nonce="dfZTbpij"></script>
        </div>
        <div className="bound_text_primary">
          <div className="span_text_primary">PHENIKAA's NEXTGEN_GƯƠNG MẶT</div>
        </div>
        <div className="bound_layout_primary">
          <Row>
            <Col flex={3} style={{ maxWidth: "68rem" }}>
              <Tabs onChange={callback} type="card">
                <TabPane tab="VÒNG SƠ KHẢO" key="1">
                  <ul className="nav_body">
                    {faceChildren.map((state, index) => (
                      <ChildrenCandidateFaceLeft
                        name={state.name}
                        img={state.img}
                        describe={state.describe}
                        id={state.id}
                        class={state.class}
                        department={state.department}
                        vote={state.vote}
                      />
                    ))}
                  </ul>
                  <div className="see-all">
                    <Link style={{ color: "red" }} to="/primary/face/"  onClick={() => click()}>
                      <PlusSquareFilled /> 
                      Xem tất cả
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab="VÒNG CHUNG KẾT" key="2">
                  <div className="final_tab">
                    <div className="message">
                      <p>Chưa tới thời gian đăng tải và bình chọn</p>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
            <Col flex={2} style={{ maxWidth: "19rem" }}>
              <div className="title_face_primary">BẢNG XẾP HẠNG</div>
              <div className="bound_face_primary_body">
                {sort.map((state, index) => (
                  <ChildrenCandidateFaceRight
                    name={state.name}
                    img={state.img}
                    describe={state.describe}
                    id={state.id}
                    vote={state.vote}
                    
                  />
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <div className="bound_text_primary">
          <div className="span_text_talent">PHENIKAA's NEXTGEN_TÀI NĂNG</div>
        </div>
        <div className="bound_layout_primary">
          <Row>
            <Col flex={3} style={{ width: "68rem" }}>
              <Tabs onChange={callback} type="card">
                <TabPane tab="VÒNG SƠ KHẢO" key="1">
                  <ul className="nav_body">
                    {DataTalent.map((state, index) => (
                      <ChildrenCandidateTalentLeft
                        name={state.name}
                        img={state.img}
                        describe={state.describe}
                        id={state.id}
                        class={state.class}
                        department={state.department}
                        vote={state.vote}
                      />
                    ))}
                  </ul>
                  <div className="see-all">
                    <Link style={{ color: "red" }} to="/primary/talent/">
                      <PlusSquareFilled />
                      Xem tất cả
                    </Link>
                  </div>
                </TabPane>
                <TabPane tab="VÒNG CHUNG KẾT" key="2">
                  <div className="final_tab">
                    <div className="message">
                      <p>Chưa tới thời gian đăng tải và bình chọn</p>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
            <Col flex={2} style={{ width: "19rem" }}>
              <div className="title_face_primary">BẢNG XẾP HẠNG</div>
              <div className="bound_face_primary_body">
                {DataTalent.map((state, index) => (
                  <ChildrenCandidateTalentRight
                    name={state.name}
                    img={state.img}
                    describe={state.describe}
                    id={state.id}
                    vote={state.vote}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
