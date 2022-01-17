import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailNew, getDetailNew, detailNewAction } from "../action/actionNew";
import "./ChildrenNew.css";
import { DataNew } from "./DataNew";

export default function ChildrenNew(props) {
  const dispatch = useDispatch();
  console.log(props)
  const click = (id)=>{dispatch(detailNewAction(id))}
  const id = props.id
  return (
    <Link to={`/new/detail/${id}`} style={{ color: "black" }} onClick={() => click(id)}>
      <div className="bound_new">
        <div className="bound_img_new">
          <img  id = "img_new" src={props.img} alt="logo" />
        </div>
        <div className="bound_name_new">
          <div className="name_new">
            <p id="text_name_new">{props.name}</p>
          </div>
          <div className="describe_new">
            <p id = "text_describe_new">{props.describe}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}