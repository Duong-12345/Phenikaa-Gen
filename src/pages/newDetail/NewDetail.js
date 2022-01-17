import { useSelector, useDispatch } from "react-redux";
import "./NewDetail.css";
import {
  LikeFilled,
  FacebookFilled,
  CalendarOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useEffect } from "react";
import {
  detailNew,
  getDetailNew,
  detailNewAction,
} from "../../action/actionNew";

export default function DetailNew() {
  const detail = useSelector((state) => state.newDetail.dataDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!detail?.id) {
      let id = window.location.href.split("/").slice(-1);
      if (!!parseInt(id[0])) {
        // console.log('123')
        dispatch(detailNewAction(id[0]));
      }
    }
  }, [detail.id]);
  console.log(detail);
  return (
    <div className="bound_new_detail">
      <div className="title_bound">
        <strong className="title_new">{detail.name}</strong>
      </div>
      <br />
      <div className="up_line">
        <span className="up_left">
          <CalendarOutlined />
          14/12/2022
        </span>
        <span className="up_right">
          <Button className="up_button">
            <LikeFilled />
            Like
          </Button>
          <Button className="up_button">
            <FacebookFilled />
            Share
          </Button>
        </span>
      </div>
      <hr />
      <div className="bound_img_new_detail">
        <img id="img_new_detail" src={detail.img} alt="img" />
      </div>
      <div className="describe_new_detail">
        <p id="text_describe_new_detail">{detail.describe}</p>
      </div>
    </div>
  );
}
