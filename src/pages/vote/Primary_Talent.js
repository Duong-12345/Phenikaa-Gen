import "antd/dist/antd.css";
import "./Primary.css";
import { Menu, Pagination } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ChildrenCandidate from "../../components/ChildrenCandidateFace";
import { useSelector } from "react-redux";
import { useState } from "react";
import ChildrenCandidateTalent from "../../components/ChidrenCandidateTalent";

export default function PrimaryTalent() {
  const candidateTalent = useSelector((state) => state.candidate.talent);
  const [card, setCard] = useState(candidateTalent);
  return (
    <div className="content_block_primary">
      <div className="back_bound">
        <Link to="/trang-chu" className="back">
          <ArrowLeftOutlined /> TRỞ VỀ TRANG CHỦ
        </Link>
      </div>
      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ background: "white" }}
          defaultSelectedKeys={["2"]}
          id="menu_primary"
        >
          <Menu.Item id="menu-item-final" key="1">
            <Link to="/primary/face" id="link">
              GƯƠNG MẶT
            </Link>
          </Menu.Item>
          <Menu.Item id="menu-item-final" key="2">
            <Link to="/primary/talent" id="link">
              TÀI NĂNG
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div>
        <div className="bound_news">
          <ul className="nav">
            {candidateTalent.map((state, index) => (
              <ChildrenCandidateTalent
                name={state.name}
                img={state.img}
                describe={state.describe}
                id={state.id}
                department={state.department}
                class={state.class}
                vote={state.vote}
              />
            ))}
          </ul>
        </div>
      </div>
      <div id="pagination">
        <Pagination defaultCurrent={1} total={10} />
      </div>
    </div>
  );
}
