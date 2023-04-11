import React from "react";
import "../CSS/home.css";
import main from "../assets/main.jpg";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import Card from "./Card";

const mealData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: lemonDessert,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Home = () => {
  const mealCard = mealData.map((item) => {
    return (
      <Card
        title={item.title}
        image={item.img}
        price={item.price}
        des={item.description}
      />
    );
  });

  return (
    <div>
      <div id="home_main">
        <div id="h_1">
          <div id="h_11">
            <div>
              <p id="h_11_text1">Little Lemon</p>
              <p id="h_11_text2">Chicago</p>
              <p id="h_11_text3">
                We are a family owned <br /> Meditranian Resturant, <br />{" "}
                focused on traditional <br /> recipies served with a modern{" "}
                <br /> twist.
              </p>
              <Link to="/booking_table" className="link_class">
                <button id="h_11_button">Reserve a Table</button>
              </Link>
            </div>

            <div id="h_112">
              <img id="h_12_img" src={main} />
            </div>
          </div>
          <div id="h_12"></div>
        </div>

        <div id="h_2">
          <div>
            <p id="h_2_text">This Weeks Special!</p>
          </div>
          <div id="h_2_button">
            <button id="h_11_button">Online Menu</button>
          </div>
        </div>

        <div id="h_3">
          <div id="h_3_grid">{mealCard}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
