import React, { useState } from "react";

import moment from "moment";
import TableHead from "./TableHead";
import TablesBody from "./TablesBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleSetId = customerId => {
    if (customerId === id) {
      setId(null);
    } else {
      setId(customerId);
    }
  };

  const handleTableHeadClick = f => {
    if (sortBy === f) {
      setIsAscending(!isAscending);
    } else {
      setIsAscending(true);
    }
    setSortBy(f);
  };

  const sortResults = f => {
    const sorted = results.slice().sort((res1, res2) => {
      if (typeof res1[f] === "string") {
        return isAscending
          ? res1[f].localeCompare(res2[f])
          : res2[f].localeCompare(res1[f]);
      } else {
        return isAscending ? res1[f] - res2[f] : res2[f] - res1[f];
      }
    });
    return sorted;
  };

  results.map(booking => {
    booking.numberOfNights = calcNumberOfNights(
      booking.checkInDate,
      booking.checkOutDate
    );
    return booking;
  });

  let sortedBookings = sortResults(sortBy);

  return (
    <>
      <table className="table">
        <TableHead handleClick={handleTableHeadClick} />
        <TablesBody bookings={sortedBookings} handleButtonClick={handleSetId} />
      </table>
      {id && <CustomerProfile id={id} />}
    </>
  );
};

const calcNumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  return checkOut.diff(checkIn, "days");
};

export default SearchResults;
