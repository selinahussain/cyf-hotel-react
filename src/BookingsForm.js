import React, { useState } from "react";

const BookingsForm = ({ addBooking }) => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addBooking({
      firstName,
      surname,
      title,
      email,
      roomId,
      checkInDate,
      checkOutDate
    });
    cleared();
  };

  const cleared = () => {
    setFirstName("");
    setSurname("");
    setTitle("");
    setEmail("");
    setRoomId("");
    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <>
      <h3>Add booking</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="John"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Doe"
            required
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Mr.. Miss.. Mrs"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="example@example.com"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomid">Room id</label>
          <input
            type="number"
            className="form-control"
            id="roomid"
            placeholder="12345"
            required
            min="1"
            max="1000"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkindate">Check-in date</label>
          <input
            type="date"
            className="form-control"
            id="checkindate"
            placeholder="Check-in date here"
            required
            value={checkInDate}
            onChange={e => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkoutdate">Check-out date</label>
          <input
            type="date"
            className="form-control"
            id="checkoutdate"
            placeholder="Check-out date here"
            required
            value={checkOutDate}
            onChange={e => setCheckOutDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default BookingsForm;
