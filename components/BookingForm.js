import React from "react";

const BookingForm = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F4CE14",
          width: "40vw",
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          marginTop: "10px",
          borderRadius: "16px",
        }}
      >
        <h1>Reserve a Table</h1>

        <form
          style={{
            display: "grid",
            maxWidth: "400vw",
            gap: "20px",
            width: "35vw",
          }}
        >
          <label htmlFor="res-date" style={{ fontWeight: "bold" }}>
            {" "}
            Date:{" "}
          </label>
          <input
            type="date"
            id="res-date"
            style={{
              height: "3vw",
              borderRadius: "10px",
              border: "3px solid black",
              paddingLeft: "15px",
              fontWeight: "bolder",
            }}
          />

          <label htmlFor="res-time" style={{ fontWeight: "bold" }}>
            Choose time
          </label>
          <select
            id="res-time "
            style={{
              height: "3vw",
              borderRadius: "10px",
              border: "3px solid black",
              paddingLeft: "15px",
              fontWeight: "bolder",
            }}
          >
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
            style={{
              height: "3vw",
              borderRadius: "10px",
              border: "3px solid black",
              paddingLeft: "15px",
              fontWeight: "bolder",
            }}
          ></input>

          <label htmlFor="occasion" style={{ fontWeight: "bold" }}>
            Occasion
          </label>
          <select
            id="occasion"
            style={{
              height: "3vw",
              borderRadius: "10px",
              border: "3px solid black",
              paddingLeft: "15px",
              fontWeight: "bolder",
            }}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            style={{
              height: "3vw",
              borderRadius: "10px",
              border: "3px solid black",
              color:"white",
              backgroundColor: "#3d4a40",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          ></input>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
