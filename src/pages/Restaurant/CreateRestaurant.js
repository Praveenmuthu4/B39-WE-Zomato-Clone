import React, { useState, useEffect } from "react";
import BasicTextField from "../../compnent/TextField/BasicTextField";
import BasicDropdown from "../../compnent/DropDown/BasicDropDown";
import {
  CITIES,
  RESTAURANT_CUISINE,
  RESTAURANT_TYPES,
  STATES,
} from "../../configs/mocks";
import BasicTextArea from "../../compnent/TextField/BasicTextArea";
import BasicChecks from "../../compnent/Checks/Checks";
import PageHeader from "../../compnent/PageHeader/PageHeader";
import { useSearchParams } from "react-router-dom";


const CREATE_RESTAURANT_API = "http://localhost:5000/api/restaurants/";
const GET_RESTAURANT_BY_ID_API = "http://localhost:5000/api/restaurants/";

export default function CreateRestaurant() {
  const params = useSearchParams()[0];
  const mode = params.get("mode");
  const restaurantId = params.get("restaurantId");
  const [restaurant, setRestaurant] = useState({
    foodType: [],
  });

  useEffect(() => {
    if (mode === "UPDATE" && restaurantId) {
      fetch(`${GET_RESTAURANT_BY_ID_API}${restaurantId}`)
        .then((response) => response.json())
        .then((data) => setRestaurant(data?.data))
        .catch((e) => console.log(e));
    }
    return () => {};
  }, [mode, restaurantId]);

  function handleFormChange(e) {
    const { id = "", value = "", type = "", checked = "" } = e.target;
    const restaurantCopy = {
      ...restaurant,
    };
    if (type === "checkbox") {
      if (restaurantCopy["foodType"].indexOf(id) > -1) {
        restaurantCopy["foodType"] = restaurantCopy["foodType"].filter(
          (o) => o !== id
        );
      } else {
        restaurantCopy["foodType"].push(id);
      }
    } else {
      restaurantCopy[id] = value;
    }
    setRestaurant(restaurantCopy);
  }

  function isExisting(data = {}, key = "", id = "") {
    return data[key]?.indexOf(id) > -1 ? true : false;
  }

  async function handleRestaurant(e) {
    if (e) {
      await fetch(CREATE_RESTAURANT_API, {
        method: "POST", 
        mode: "cors",
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(restaurant),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div id="create-restaurant-page" className="create-restaurant-page">
      <PageHeader
        name={
          mode && mode === "UPDATE" ? "Update Restaurant" : "Create Restaurant"
        }
        description="Page helps to CREATE RESTAURANT data"
      />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <BasicTextField
              label="Enter Restaurant Name"
              id="name"
              value={restaurant["name"] || ""}
              handleChange={handleFormChange}
              placeholder="Enter Restaurant Name"
              type="text"
            />
            <BasicDropdown
              label="Select Restaurant Type"
              options={RESTAURANT_TYPES}
              id="category"
              value={restaurant["category"] || ""}
              handleChange={handleFormChange}
            />
            <BasicDropdown
              value={restaurant["city"] || ""}
              label="Select City"
              id="city"
              options={CITIES}
              handleChange={handleFormChange}
            />
            <BasicDropdown
              value={restaurant["state"] || ""}
              label="Select State"
              id="state"
              options={STATES}
              handleChange={handleFormChange}
            />
            <BasicTextArea
              value={restaurant["address"] || ""}
              label="Enter Address"
              id="address"
              handleChange={handleFormChange}
            />
            <BasicTextField
              label="Enter Pincode"
              id="pincode"
              value={restaurant["pincode"] || ""}
              handleChange={handleFormChange}
              placeholder="Eg. 642001"
              type="number"
            />
            <BasicDropdown
              label="Select Cuisine"
              options={RESTAURANT_CUISINE}
              id="cuisine"
              value={restaurant["cuisine"] || ""}
              handleChange={handleFormChange}
            />
            <div className="mb-5" id="food-type-container">
              <BasicChecks
                label="Veg"
                id="veg"
                handleChange={handleFormChange}
                checked={isExisting(restaurant, "foodType", "veg")}
              />
              <BasicChecks
                label="Non Veg"
                id="non veg"
                handleChange={handleFormChange}
                checked={isExisting(restaurant, "foodType", "non veg")}
              />
            </div>
            <button className="btn btn-warning" onClick={handleRestaurant}>
              Add Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}