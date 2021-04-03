import React from "react";
import { useParams } from "react-router";
import { restaurantDataList } from "../constants";
import { getImageUrlFromIndex, getRandomImageUrl } from "../utils";
import StarRating from "./star-rating";

export const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurantDataList[+id];
  return (
    <>
      <h4 className="p-2">Id: {id}</h4>
      <div className="row">
        <div className="col-4">
          <img src={getImageUrlFromIndex(+id)} className="w-100" />
        </div>
        <div className="col-8 px-3">
          <h3 className="my-2">{restaurant?.Brand}</h3>
          <div className="my-2">
            <StarRating rating={+restaurant.Stars}></StarRating>{" "}
            {+restaurant.Stars / 5}
            <span className="mx-2">{restaurant["Top Ten"]}</span>
          </div>
          <h6 className="card-subtitle my-2 text-muted">
            {" "}
            Style: {restaurant.Style}
          </h6>
          <h6 className="card-subtitle my-2 text-muted">
            {" "}
            Country: {restaurant.Country}
          </h6>
          <p className="card-text">{restaurant.Variety}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
