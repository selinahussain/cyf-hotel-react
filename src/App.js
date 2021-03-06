import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import TouristInfoCardFinal from "./TouristInfoCardFinal";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardFinal />
      <Bookings />
      <Restaurant />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
