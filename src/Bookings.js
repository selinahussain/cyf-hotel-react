import React, { useState, useEffect } from "react";

import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Loader from "./Loader";
import BookingsForm from "./BookingsForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookings = () => {
      return fetch("https://cyf-react.glitch.me/")
        .then(res => res.json())
        .then(
          data => {
            setLoading(true);
            if (data.error) {
              return setError({ message: data.error });
            }
            setBookings(data);
            setAllBookings(data);
          },
          error => {
            setError(error);
            setLoading(true);
          }
        );
    };
    getBookings();
  }, []);

  const search = searchVal => {
    const matchBookings = allBookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(searchVal) ||
        surname.toLowerCase().includes(searchVal)
      );
    });

    setBookings(matchBookings);
  };

  const addBooking = booking => {
    const highID = Math.max(...bookings.map(booking => booking.id));
    booking.id = highID + 1;
    setBookings(bookings.concat(booking));
  };

  let searchResults;
  if (error) {
    searchResults = <div>Error: {error.message}</div>;
  } else if (!loading) {
    searchResults = <Loader />;
  } else {
    searchResults = <SearchResults results={bookings} />;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {searchResults}
        <BookingsForm addBooking={addBooking} />
      </div>
    </div>
  );
};

export default Bookings;
