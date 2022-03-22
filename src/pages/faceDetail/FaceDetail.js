import { useSelector, useDispatch } from "react-redux";
import "./FaceDetail.css";
import {
  LikeFilled,
  FacebookFilled,
  ArrowLeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Spin, Alert } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import {
  detailFaceAction,
  getDataCandidate,
  updateDataCandidate,
} from "../../action/actionCandidate";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FacebookButton, FacebookCount } from "react-social";

const contentStyle = {
  height: "100%",
  color: "#fff",
  // lineHeight: "560px",
  textAlign: "center",
  // background: "#364d79",
};

export default function DetailFace() {
  const detailF = useSelector((state) => state.candidateDetail1.faceDetail);
  let url = `https://phenikaa-next-gen.herokuapp.com/primary/face/detail/${detailF.id}`;
  const isFetching = useSelector((state) => state.candidateDetail1.isFetching);
  // console.log(isFetching);
  const dispatch = useDispatch();
  const [vote, setVote] = useState(detailF.vote);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    setVote(detailF.vote);
  }, [detailF]);

  const click_vote = () => {
    setVoted(!voted);
    updateDataCandidate(
      detailF.id,
      { ...detailF, vote: !voted ? vote + 1 : vote - 1 },
      dispatch
    );
    !voted ? setVote(vote + 1) : setVote(vote - 1);
    console.log(detailF);
  };

  useEffect(() => {
    if (!detailF?.id) {
      let id = window.location.href.split("/").slice(-1);
      if (!!parseInt(id[0])) {
        getDataCandidate(id[0], dispatch);
      }
    }
  }, [detailF.id]);

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
          <div
            class="fb-share-button"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button_count"
            data-size="large"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </div>
          
        </Button>
        <FacebookButton url={url} appId={1194006731003022}>
        <FacebookCount url={url} />
        {" Share " + url}
      </FacebookButton>
      </div>
      <div id="bound_text_primary_face_detail">
        <div className="span_text_face_detail">
          PHENIKAA's NEXTGEN_GƯƠNG MẶT
        </div>
      </div>
      <div className="bound_describe_talent_detail">
        <div className="name_talent_detail">
          <div className="bound_slide_face">
            <Carousel arrows initialSlide={1}>
              <div>
                <div style={contentStyle}>
                  {detailF.collection?.map((e, index) => (
                    <img alt="" id="slide-face" src={e.img1} key={index}></img>
                  ))}
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  {detailF.collection?.map((e, index) => (
                    <img alt="" id="slide-face" src={e.img2} key={index}></img>
                  ))}
                </div>
              </div>
              <div>
                <div style={contentStyle}>
                  {detailF.collection?.map((e, index) => (
                    <img alt="" id="slide-face" src={e.img3} key={index}></img>
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        {isFetching === true ? (
          <div className="describe_talent_detail">
            <Spin tip="Loading...">
              <Alert
                message="Data is loading"
                description="Wait a moment"
                type="info"
              />
            </Spin>
          </div>
        ) : (
          <div className="describe_talent_detail">
            <p id="text_describe_new_detail">
              <b>Họ tên :</b> {detailF.name}
            </p>
            <p id="text_describe_new_detail">
              <b>Khoa / Viện :</b> {detailF.department}
            </p>
            <p id="text_describe_new_detail">
              <b>Tài năng :</b> {detailF.describe}
            </p>
            <p id="text_describe_new_detail">
              <b>Lượt bình chọn : {vote}</b>
            </p>
          </div>
        )}

        <div className="vote_detail_talent">
          <p>Nếu bạn yêu thích, hãy cùng Bình chọn cho thí sinh nào!</p>
          <Button
            style={{
              background: voted ? "#1d2aa6" : "#ff6a22",
              color: "white",
            }}
            onClick={click_vote}
          >
            {voted ? "Bỏ bình chọn" : "Bình chọn"}
          </Button>
        </div>
      </div>
    </div>
  );
}
