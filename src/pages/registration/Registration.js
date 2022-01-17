import "antd/dist/antd.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./Registration.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Registration() {
  return (
    <div className="content_block">
        <div className="back_bound">
        <Link to="/trang-chu" className="back">
          <ArrowLeftOutlined /> TRỞ VỀ TRANG CHỦ
        </Link>
      </div>
      <br />
      <h3>ĐĂNG KÝ DỰ THI</h3>
      <h2>ĐÃ HẾT HẠN ĐĂNG KÝ</h2>
    </div>
  );
}
