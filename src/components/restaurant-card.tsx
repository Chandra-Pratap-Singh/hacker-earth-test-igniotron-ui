import React from "react";
import { Link } from "react-router-dom";
import { Irestaurant } from "../modal/restaurant.interface";
import { getImageUrlFromIndex } from "../utils";
import StarRating from "./star-rating";

const RestaurantCard: React.FC<{ restaurant: Irestaurant; index: number }> = ({
  restaurant,
  index,
}) => {
  return (
    <Link to={`/restaurant/${index}`}>
      <div
        className="card m-3 shadow pointer-cursor"
        style={{ width: "18rem" }}
      >
        <img
          src={getImageUrlFromIndex(index)}
          className="card-img-top"
          alt="No Image Found"
          height="250px"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{restaurant.Brand} </h5>
          <StarRating rating={+restaurant.Stars}></StarRating>{" "}
          {+restaurant.Stars} / 5
          <span className="mx-2">{restaurant["Top Ten"]}</span>
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            Style: {restaurant.Style}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            Country: {restaurant.Country}
          </h6>
          <p className="card-text">{restaurant.Variety}</p>
          {/* <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a> */}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
