import React, { useCallback, useEffect, useState } from "react";
import { restaurantDataList, SORTING_ORDER } from "../constants";
import { Irestaurant } from "../modal/restaurant.interface";
import RestaurantCard from "./restaurant-card";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState<Irestaurant[]>(
    restaurantDataList
      .map((item) =>
        Number?.isFinite(item?.Stars) ? item : { ...item, Stars: 0 }
      )
      .sort((a, b) => +b.Stars - +a.Stars)
  );

  const [searchparam, setSearchparam] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<string>(SORTING_ORDER.DESC);

  const searchByBrand = useCallback(
    (brandName) => {
      setRestaurantList(
        restaurantDataList
          .map((item) => (item?.Stars ? item : { ...item, Stars: 0 }))
          .filter((item) => brandName === "" || item.Brand === brandName)
      );
    },
    [setRestaurantList]
  );

  const toggleSort = useCallback(() => {
    if (sortingOrder === SORTING_ORDER.DESC) {
      setRestaurantList(restaurantList.sort((a, b) => +a.Stars - +b.Stars));
    } else {
      setRestaurantList(restaurantList.sort((a, b) => +b.Stars - +a.Stars));
    }
    setSortingOrder(
      sortingOrder === SORTING_ORDER.ASC
        ? SORTING_ORDER.DESC
        : SORTING_ORDER.ASC
    );
  }, [sortingOrder, restaurantList, setSortingOrder, setRestaurantList]);

  //   useEffect(() => {
  //     fetch(restaurantApiUrl)
  //       .then((res) => res.json())
  //       .then((restaunrants: Irestaurant[]) => setRestaurantList(restaunrants));
  //   }, []);
  return (
    <div>
      <section className="bg-light d-flex justify-content-between p-2">
        <div className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search by Brand"
            onChange={(event) => setSearchparam(event?.target?.value)}
          />
          <button
            className="btn btn-outline-success"
            onClick={() => searchByBrand(searchparam)}
          >
            Search
          </button>
        </div>
        <button className="btn btn-outline-primary mx-3" onClick={toggleSort}>
          Sort By Starts{" "}
          <span
            className={`fa ${
              sortingOrder === SORTING_ORDER.DESC
                ? "fa-arrow-up"
                : "fa-arrow-down"
            }`}
          ></span>
        </button>
      </section>
      <section className="d-flex p-5 flex-wrap justify-content-evenly">
        {restaurantList?.map((item, index) => (
          <RestaurantCard
            key={index}
            restaurant={item}
            index={index}
          ></RestaurantCard>
          // <div key={index}>{item?.Brand}</div>
        ))}
      </section>
    </div>
  );
};

export default RestaurantList;
