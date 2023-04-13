import React from "react";
import "../CSS/table.css";
import { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [ip_email, setEmail] = useState("");
  const [ip_date, setDate] = useState("");
  const [valDate, setValDate] = useState(false);

  const onCHange_name = (e) => {
    setName(e.target.value);
    const isName = e.target.value.length > 3 ? true : false;
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
        >
          <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
            {" "}
            Name:{" "}
          </label>
          <input
            type="text"
            id="res-name"
            className="res_ip"
            onChange={onCHange_name}
            value={name}
          />

          <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
            {" "}
            Email:{" "}
          </label>
          <input
            type="email"
            id="res-email"
            className="res_ip"
            onChange={onChange_email}
            value={ip_email}
          />

          <label htmlFor="res-date" style={{ fontWeight: "bold" }}>
            {" "}
            Date:{" "}
          </label>
          <input
            type="date"
            id="res-date"
            className="res_ip"
            onChange={dateChangeHandler}
          />

          <label htmlFor="res-time" style={{ fontWeight: "bold" }}>
            Choose time:
          </label>
          <select id="res-time " className="res_ip" disabled={!valDate}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>

          <label htmlFor="guests" style={{ fontWeight: "bold" }}>
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
