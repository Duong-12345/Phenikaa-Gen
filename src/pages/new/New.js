import "antd/dist/antd.css";
import "./New.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ChildrenNew from "../../components/ChildrenNew"

export default function New() {
  const show = useSelector((state) =>(state.newList.news));
  const [tin, setTin] = useState(show);
  return (
    <div className="content_block_new">
      <div className="bound-text-new">TIN TỨC</div>
      <div className="bound_news">
      {tin.map((state, index) => (
        <ChildrenNew
          name={state.name}
          img={window.location.origin + state.img}
          describe={state.describe}
          id={state.id}
        />
      ))}</div>
    </div>
  );
}
