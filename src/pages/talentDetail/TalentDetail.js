import { useSelector, useDispatch } from "react-redux";
import "./TalentDetail.css";
import {
  LikeFilled,
  FacebookFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { detailTalentAction } from "../../action/actionCandidate";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function DetailTalent() {
  const detailT = useSelector((state) => state.candidateDetail.talentDetail);
  const dispatch = useDispatch();
  const [vote, setVote] = useState(detailT.vote);
  const [voted, setVoted] = useState(false);
  const click_vote = () => {
    setVoted(!voted);
    !voted ? setVote(vote + 1) : setVote(vote - 1);
  };
  useEffect(() => {
    setVote(detailT.vote);
  }, [detailT]);
  useEffect(() => {
    if (!detailT?.id) {
      let id = window.location.href.split("/").slice(-1);
      if (!!parseInt(id[0])) {
        // console.log('123')
        dispatch(detailTalentAction(id[0]));
      }
    }
  }, [detailT.id]);
  return (
    <div className="bound_new_detail">
      <div className="back_bound_talent_detail">
        <Link to="/trang-chu" className="back_talent_detail">
          <ArrowLeftOutlined /> TRỞ VỀ TRANG CHỦ
        </Link>
      </div>
      <div className="up_line_detail">
        <Button className="up_button">
          <LikeFilled />
          Like
        </Button>
        <Button className="up_button">
          <FacebookFilled />
          Share
        </Button>
      </div>
      <div id="bound_text_primary_talent_detail">
          <div className="span_text_talent_detail">PHENIKAA's NEXTGEN_TÀI NĂNG</div>
        </div>
      <div className="bound_describe_talent_detail">
      <div className="iframe_talent_detail">
        <iframe
          id="iframe"
          src={detailT.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="describe_talent_detail">
        <p id="text_describe_new_detail"><b>Họ tên :</b> {detailT.name}</p> 
        <p id="text_describe_new_detail"><b>Khoa / Viện :</b> {detailT.department}</p> 
        <p id="text_describe_new_detail"><b>Tài năng :</b> {detailT.describe}</p> 
        <p id="text_describe_new_detail"><b>Lượt bình chọn : {vote}</b></p> 
      </div>
      <div className="vote_detail_talent">
          <p>Nếu bạn yêu thích, hãy cùng Bình chọn cho thí sinh nào!</p>
          <Button style={{background: voted ? "#1d2aa6" : "#ff6a22", color:'white'}} onClick={click_vote}>{voted ? "Bỏ bình chọn" : "Bình chọn"}</Button>
      </div>
      </div>
    </div>
  );
}
