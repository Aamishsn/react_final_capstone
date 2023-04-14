import React from "react";
import "../CSS/table.css";
import { useState } from "react";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingForm = () => {
  
  const options = availableTimes.map((items) => {
    return <option>{items}</option>;
  });

  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [ip_email, setEmail] = useState("");
  const [ip_date, setDate] = useState("");
  const [valDate, setValDate] = useState(false);
  const [guestNumber, setguestNumber] = useState("");

  const onCHange_name = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const focusName = () => {
    setIsNameFocus(false);
  };

  const onChange_email = (e) => {
    setEmail(e.target.value);
    const isEmail =
      e.target.value.length > 9 &&
      e.target.value.indexOf("@") > 1 &&
      e.target.value.indexOf(".com") > 1
        ? true
        : false;
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    const isDate = Date.parse(e.target.value) > 0 ? true : false;
    setValDate(isDate);
  };
  const guestHandler = (e) => {
    setguestNumber(e.target.value);
    const isGuest = e.target.value > 0 && e.target.value < 11 ? true : false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="res_main">
        <h1>BOOK NOW</h1>

        <form
          style={{
            display: "grid",
            maxWidth: "400vw",
            gap: "20px",
            width: "35vw",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
            {" "}
            Name:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-name"
              className="res_ip"
              onChange={onCHange_name}
              onBlur={focusName}
              value={name}
            />
            {!isName && !isNameFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
          </div>

          <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
            {" "}
            Email:{" "}
          </label>

          <div>
            <input
              type="email"
              id="res-email"
              className="res_ip"
              onChange={onChange_email}
              value={ip_email}
            />
            <p className="error_msg"> * Email ID is Invalid</p>
          </div>

          <label htmlFor="res-date" style={{ fontWeight: "bold" }}>
            {" "}
            Date:{" "}
          </label>

          <div>
            <input
              type="date"
              id="res-date"
              className="res_ip"
              onChange={dateChangeHandler}
            />
            <p className="error_msg"> * Email ID is Invalid</p>
          </div>

          <label htmlFor="res-time" style={{ fontWeight: "bold" }}>
            Choose time:
          </label>
          <select id="res-time " className="res_ip" disabled={!valDate}>
            {options}
          </select>

          <label
            htmlFor="guests"
            style={{ fontWeight: "bold" }}
            onChange={guestHandler}
          >
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            className="res_ip"
          ></input>

          <label htmlFor="occasion" style={{ fontWeight: "bold" }}>
            Occasion
          </label>
          <select id="occasion" className="res_ip">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            className="res_but"
          ></input>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
