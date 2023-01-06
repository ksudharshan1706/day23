import { Pictures } from "./Pictures";
import { AddPicture } from "./AddPicture";
export function ImageCreate({ instagram, setinstagram }) {
  return (
    <div>
      <div className="Gallary">
        {instagram.map((data, index) => {
          return (
            <Pictures
              key={index}
              data={data}
              id={index}
              instagram={instagram}
              setinstagram={setinstagram}
            />
          );
        })}
      </div>
    </div>
  );
}
