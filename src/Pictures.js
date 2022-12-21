// var setinstagramRemove = "";

import { Counter } from "./Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";

export function Pictures({ data, id, instagram, setinstagram }) {
  const Removepic = (id) => {
    var index = parseInt(id.target.id);
    console.log("delete", index);
    setinstagram([...instagram.slice(0, index), ...instagram.slice(index + 1)]);
  };
  var navigate = useNavigate();
  return (
    <div className="PictureCard">
      <b>{data.name}</b>
      <div className="imageQuote">
        <img
          src={`${data.picture}`}
          height="400px"
          className="imageQuote"
        ></img>
        <div className="LikeDelete">
          {/* <button>like</button>Liked by {data.likes} */}
          <Counter data={data.likes} />
          <button id={id} onClick={() => navigate(`/picture/${id}`)}>
            Edit
          </button>
          <button id={id} onClick={Removepic}>
            Delete
          </button>
          {/* <DeleteIcon onClick={() => Removepic} /> */}
        </div>
      </div>
      <div>
        <div>
          {/* <b></b> */}
          <p>
            <b>{data.name}</b> {data.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
