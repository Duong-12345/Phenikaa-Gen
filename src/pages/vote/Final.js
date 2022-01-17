import "antd/dist/antd.css";
import "./Final.css";
import { Layout, Menu, Dropdown, Button } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Final() {
  return (
    <div className="content_block_final">
      <div className="back_bound">
      <Link to="/trang-chu" className="back">
          <ArrowLeftOutlined /> TRỞ VỀ TRANG CHỦ
        </Link>
      </div>
      <div>
        <Menu theme="dark" mode="horizontal" style={{ background: "white" }} defaultSelectedKeys={['1']}>
          <Menu.Item id="menu-item-final" key="1" >
            GƯƠNG MẶT
          </Menu.Item>
          <Menu.Item id="menu-item-final" key="2">
            TÀI NĂNG
          </Menu.Item>
        </Menu>
      </div>
      <div className="message"><p>Chưa tới thời gian đăng tải và bình chọn</p></div>
    </div>
  );
}
