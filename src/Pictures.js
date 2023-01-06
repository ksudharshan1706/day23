// var setinstagramRemove = "";

import { Counter } from "./Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function Pictures({ data, id, instagram, setinstagram }) {
  const Removepic = (id) => {
    console.log(id);
    var index = id;
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
          <Counter data={data.likes} />

          <EditIcon
            color="primary"
            onClick={() => navigate(`/picture/${id}`)}
          />
          <DeleteIcon
            color="error"
            onClick={() => {
              Removepic(id);
            }}
          >
            Delete
          </DeleteIcon>
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

// function Removepic({ instagram, setinstagram }) {
//   var navigate = useNavigate();
//   const { id } = useParams();
//   console.log(id);
//   var index = parseInt(id);
//   // console.log([...instagram.slice(0, index), ...instagram.slice(index + 1)]);
//   setinstagram([...instagram.slice(0, index), ...instagram.slice(index + 1)]);
//   // navigate(`/pictures`);
//   return;
// }

export { Pictures };
