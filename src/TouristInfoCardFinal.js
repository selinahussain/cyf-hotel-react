import React from "react";

import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCardFinal = () => {
  return (
    <div className="container">
      <div className="card-deck mt-5 mb-5">
        <TouristInfoCard
          link="https://peoplemakeglasgow.com"
          imageSource="https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          city="Glasgow"
        />
        <TouristInfoCard
          link="https://visitmanchester.com"
          imageSource="https://images.unsplash.com/photo-1588934356018-93c066684704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1218&q=80"
          city="Manchester"
        />
        <TouristInfoCard
          link="https://visitlondon.com"
          imageSource="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          city="London"
        />
      </div>
    </div>
  );
};

export default TouristInfoCardFinal;
