import "./Home.css";
import "antd/dist/antd.css";
import { Layout, Menu, Dropdown, Button, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import Rules from "../rule/Rules";
import Registration from "../registration/Registration";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import New from "../new/New";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Final from "../vote/Final";
import PrimaryFace from "../vote/Primary_Face";
import PrimaryTalent from "../vote/Primary_Talent";
import NewDetail from "../../reducer/NewDetailReducer";
import DetailNew from "../newDetail/NewDetail";
import DetailFace from "../faceDetail/FaceDetail";
import DetailTalent from "../talentDetail/TalentDetail";
import BodyHome from "./BodyHome";
import { useDispatch, useSelector } from "react-redux";
import { getAllCandidate } from "../../action/actionCandidate";
import { useEffect } from "react";
import { Login } from "../login/Login";

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  const dispatch = useDispatch();
  const click = () => {
    getAllCandidate(dispatch);
    console.log('123')
  };
  
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/primary/face" id="link"  onClick={() => click()}>
          Vòng sơ khảo
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/final" id="link">
          Vòng chung kết
        </Link>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu>
      <Menu.Item id="menu-item" key="1">
        <Link to="/rule" id="link">
          Thể lệ
        </Link>
      </Menu.Item>
      <Menu.Item id="menu-item" key="2">
        <Link id="link" to="/register">
          Đăng ký
        </Link>
      </Menu.Item>
      <Menu.Item id="menu-item" key="3">
        <Dropdown overlay={menu} arrow>
          <Link id="link" to="#">
            Bình chọn
          </Link>
        </Dropdown>
      </Menu.Item>
      <Menu.Item id="menu-item" key="4">
        <Link id="link" to="/new">
          Tin tức
        </Link>
      </Menu.Item>
    </Menu>
  );
  const NotFound = () => {
    return <>NotFound</>;
  };

  return (
    <>
      <Router>
        <div className="App">
          <Helmet>
            <title>PHENIKAA Next Gen</title>
          </Helmet>
          <Layout>
            <nav>
              <Header style={{ background: "#dfe6e9", height: "85px" }}>
                <Row>
                  <Col span={14} push={10}>
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      style={{ background: "#dfe6e9", float: "right" }}
                    >
                      <Menu.Item id="menu-item" key="1">
                        <Link to="/rule" id="link">
                          <p id="text_in_menu">Thể lệ</p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item id="menu-item" key="2">
                        <Link id="link" to="/register">
                          <p id="text_in_menu">Đăng ký</p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item id="menu-item" key="3">
                        <Dropdown overlay={menu} arrow>
                          <Link id="link" to="#">
                           <p id="text_in_menu"> Bình chọn</p>
                          </Link>
                        </Dropdown>
                      </Menu.Item>
                      <Menu.Item id="menu-item" key="4">
                        <Link id="link" to="/new">
                         <p id="text_in_menu"> Tin tức</p>
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </Col>
                  <Col span={10} pull={13}>
                    <div className="logo">
                      <Link to="/trang-chu">
                        <img
                          src={window.location.origin + "/phenikaauni.png"}
                          alt="logo"
                          width="100%"
                          height="auto"
                        ></img>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Header>
              <div className="menu_respon">
                <Dropdown overlay={menu1} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MenuOutlined /> MENU
                  </a>
                </Dropdown>
              </div>
            </nav>
            <Content style={{ background: "white" }}></Content>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/rule" element={<Rules />} />
              <Route path="/trang-chu" element={<BodyHome />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/new" element={<New />} />
              <Route path="/final" element={<Final />} />
              <Route path="/primary/face" element={<PrimaryFace />} />
              <Route path="/primary/talent" element={<PrimaryTalent />} />
              <Route path="/new/detail/:id" element={<DetailNew />} />
              <Route path="/primary/face/detail/:id" element={<DetailFace />} />
              <Route
                path="/primary/talent/detail/:id"
                element={<DetailTalent />}
              />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>

            <Footer style={{ background: "#dfe6e9" }}>
              <Row>
                <Col span={18} push={6}>
                  <div className="foot-text">
                    <strong>BAN TỔ CHỨC CUỘC THI PHENIKAA's NEXTGEN</strong>
                    <p>Phòng Truyền thông</p>
                    <p>Phòng Công tác Sinh viên</p>
                    <p>Điện thoại: (028) 35120. 785</p>
                    <p>Email: cuocthi@phenikaa.edu.vn</p>
                  </div>
                </Col>
                <Col span={6} pull={18}>
                  <div className="foot-img">
                    <img
                      src={window.location.origin + "/phenikaauni.png"}
                      alt="logo"
                      width="280px"
                      height="auto"
                    ></img>
                  </div>
                </Col>
              </Row>
              {/* <div className="footer-block"> */}

              {/* </div> */}
            </Footer>
          </Layout>
        </div>
      </Router>
    </>
  );
}
export default Home;
