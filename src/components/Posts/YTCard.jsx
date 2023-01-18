import React from "react";
/*
A reusable youtube card 
props:
      url: url of the yt video
      id: key prop for rendering a list
*/

const YTCard = ({ url }) => {
  return (
    <div className="col-sm-6">
      <iframe
        title="video"
        src={`https://www.youtube.com/embed/${url}`}
        allow="autoplay; picture-in-picture"
        className="youtube"
      ></iframe>
    </div>
  );
};

export default YTCard;
