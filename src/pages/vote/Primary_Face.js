import "antd/dist/antd.css";
import "./Primary.css";
import { Layout, Menu, Dropdown, Button, Pagination, Spin, Alert } from "antd";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ChildrenCandidate from "../../components/ChildrenCandidateFace";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChildrenCandidateFace from "../../components/ChildrenCandidateFace";
import { getAllCandidate } from "../../action/actionCandidate";

export default function PrimaryFace() {
  const candidate = useSelector((state) => state.candidate.candidate);
  const faceChildren = useSelector(
    (state) => state.candidateDetail1.faceChildren
  );
  // const isFetching = useSelector((state) => state.candidateDetail1.isFetching);

  // const [page1, setPage1] = useState({
  //   currentPage: 0,
  //   itemPerPage: 6,
  // });

  const pageParent = {
    item: faceChildren,
    currentPage: 0,
    itemPerPage: 6,
  };

  const [page, setPage] = useState(pageParent);
  const indexOfLast = (page.currentPage+1) * page.itemPerPage;
  const indexOfFirst = indexOfLast - page.itemPerPage;
  const currentItem = faceChildren.slice(indexOfFirst, indexOfLast);
  console.log(indexOfLast, indexOfFirst, currentItem)

  const handleClick = (value) => {
    console.log(value)
    if (value <= 1) {
      setPage({
        ...page,
        currentPage: 0,
      });
    }
    else {
      setPage({
        ...page,
        currentPage: value - 1
      })
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(faceChildren)
    if (faceChildren.length == 0) {
      console.log(faceChildren)
      getAllCandidate(dispatch);
    }
  }, [faceChildren]);

  return (
    <div className="content_block_primary">
      <div className="back_bound">
        <Link to="/trang-chu" className="back">
          <ArrowLeftOutlined /> TRỞ VỀ TRANG CHỦ
        </Link>
      </div>
      <div className="bound_menu_primary">
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ background: "white" }}
          defaultSelectedKeys={["1"]}
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
            {currentItem?.map((state, index) => (
              <ChildrenCandidateFace
                name={state.name}
                img={state.img}
                describe={state.describe}
                id={state.id}
                department={state.department}
                class={state.class}
                collection={state.collection}
                vote={state.vote}
              />
            ))}
          </ul>
        </div>
      </div>
      <div id="pagination">
        <Pagination
          defaultCurrent={1}
          // total={`${Math.ceil(faceChildren.length / page.itemPerPage)}0`}
          defaultPageSize={6}
          onChange={(value) => handleClick(value)}   
          total={12}
        />
      </div>
    </div>
  );
}
