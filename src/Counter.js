import { IconButton } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export function Counter({ data }) {
  let [like, setLike] = useState(parseInt(data));
  return (
    <div className="likeDiv">
      <Badge
        onClick={() => setLike(like + 1)}
        // badgeContent={like}
        color="primary"
      >
        <FavoriteBorderIcon onClick={() => setLike(like + 1)} />
      </Badge>
      {like > 0 ? <h4> liked by {like}</h4> : null}
    </div>
  );
}
