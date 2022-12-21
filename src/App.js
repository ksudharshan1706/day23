import logo from "./logo.svg";
import "./App.css";
import { Pictures } from "./Pictures";
import { AddPicture } from "./AddPicture";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { ImageCreate } from "./ImageCreate";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  let [instagram, setinstagram] = useState([
    {
      picture:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      likes: "5249",
      name: "Sudharshan",
      quote: "If you were looking for a sign, here it is.",
    },
    {
      picture:
        "https://e1.pxfuel.com/desktop-wallpaper/263/422/desktop-wallpaper-instagram-profile-for-girls-instagram-dp-girl.jpg",
      likes: "421",
      name: "Sheshi",
      quote: "If you were looking for a sign, here it is.",
    },
    {
      picture:
        "https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/instagram-profile-picture-size-guide-3.jpg",
      likes: "56",
      name: "Alexi",
      quote: "If you were looking for a sign, here it is.",
    },
    {
      picture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
      likes: "6752",
      name: "Cyntiya",
      quote: "If you were looking for a sign, here it is.",
    },
    {
      picture:
        "https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg?crop=4:3",
      likes: "542",
      name: "NFT",
      quote: "If you were looking for a sign, here it is.",
    },
  ]);
  var navigate = useNavigate();

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/pictures")}>
              Pictures
            </Button>
            <Button color="inherit" onClick={() => navigate("/picture/add")}>
              Add Picture
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Route path="/films" element={<Navigate replace to="/movies" />} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pictures"
          element={
            <ImageCreate instagram={instagram} setinstagram={setinstagram} />
          }
        />
        <Route
          path="/picture/:id"
          element={
            <EditPicture instagram={instagram} setinstagram={setinstagram} />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/picture/add"
          element={
            <AddPicture instagram={instagram} setinstagram={setinstagram} />
          }
        />
      </Routes>
    </div>
  );
}

function EditPicture({ instagram, setinstagram }) {
  const { id } = useParams();
  var data = instagram[id];
  // console.log("here", data);
  let [name, setname] = useState(data.name);
  let [picture, setpicture] = useState(data.picture);
  let [likes, setlikes] = useState(data.likes);
  let [quote, setquote] = useState(data.quote);
  const EditPicture = {
    name,
    picture,
    likes,
    quote,
  };
  var navigate = useNavigate();
  const editpic = () => {
    var index = parseInt(id);
    console.log(instagram.slice(0, index));
    console.log(instagram.slice(index + 1));
    setinstagram([
      ...instagram.slice(0, index),
      EditPicture,
      ...instagram.slice(index + 1),
    ]);
    // setinstagram([...instagram, EditPicture]);
    console.log(instagram);
    navigate(`/pictures`);
  };
  return (
    <form className="formdata">
      <TextField
        onKeyDown={(e) => setpicture(e.target.value)}
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        // value={data.picture}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        // value={data.name}
        onKeyDown={(e) => setname(e.target.value)}
      />
      <TextField
        onKeyDown={(e) => setlikes(e.target.value)}
        id="outlined-basic"
        label="likes"
        variant="outlined"
        // value={data.likes}
      />
      <TextField
        onKeyDown={(e) => setquote(e.target.value)}
        id="outlined-basic"
        label="Quote"
        variant="outlined"
        // value={data.quote}
      />
      {/* {name} */}
      {/* {console.log(newPicture)} */}
      <Button
        onClick={editpic}
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Submit
      </Button>
      <br></br>
      <label>{data.name} </label>
      <br></br>
      <label>{data.likes} </label>
      <label>{data.quote} </label>
    </form>
  );
  // const navigate = useNavigate();
}

function NotFound() {
  return <h1>404 Error</h1>;
}

function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
}
export default App;
