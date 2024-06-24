import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

function TripList() {
  const [url, setUrl] = useState(
    "https://online-json-server-api.up.railway.app/project/665ee1ef1d2cd3eb1142a5bf/trips"
  );
  const { data: trips, isPending, error } = useFetch(url);
  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && (
        <div>
          <h3>Lodaing...</h3>
        </div>
      )}
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      <ul>
        {trips &&
          trips.map((item) => {
            return (
              <li key={Math.random()}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <img src={item.img} alt="trip-img" />
              </li>
            );
          })}
      </ul>
      <button
        onClick={() =>
          setUrl(
            "https://online-json-server-api.up.railway.app/project/665ee1ef1d2cd3eb1142a5bf/trips?loc=Europe"
          )
        }
      >
        Europe Trips
      </button>
      <button
        onClick={() =>
          setUrl(
            "https://online-json-server-api.up.railway.app/project/665ee1ef1d2cd3eb1142a5bf/trips"
          )
        }
      >
        All Trips
      </button>
    </div>
  );
}

export default TripList;
