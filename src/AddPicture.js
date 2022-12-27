import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function AddPicture({ instagram, setinstagram }) {
  let [name, setname] = useState("");
  let [picture, setpicture] = useState("");
  let [likes, setlikes] = useState("");
  let [quote, setquote] = useState("");
  const newPicture = {
    name,
    picture,
    likes,
    quote,
  };
  var navigate = useNavigate();
  const AddMovie = () => {
    setinstagram([...instagram, newPicture]);
    navigate(`/pictures`);
  };
  return (
    <form className="formdata">
      <TextField
        onKeyUp={(e) => setpicture(e.target.value)}
        id="outlined-basic"
        label="Picture"
        variant="outlined"
      />
      <br></br>
      <TextField
        onKeyUp={(e) => setname(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <br></br>
      <TextField
        onKeyUp={(e) => setlikes(e.target.value)}
        id="outlined-basic"
        label="likes"
        variant="outlined"
      />
      <br></br>
      <TextField
        onKeyUp={(e) => setquote(e.target.value)}
        id="outlined-basic"
        label="Quote"
        variant="outlined"
      />
      <br></br>
      {/* {name} */}
      {/* {console.log(newPicture)} */}
      <Button
        onClick={AddMovie}
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Submit
      </Button>
    </form>
  );
}
