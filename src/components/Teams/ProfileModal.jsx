import React from "react";

/* a reusable component which displays a single person's details */

const ProfileModal = ({ imageSource, linkedInLink, name }) => {
  return (
    <div className="profile-modal">
      <img src={imageSource} alt={name} className="profile" />
      {linkedInLink && (
        <a href={`${linkedInLink}`} target="blank">
          <i className="fa">&#xf0e1;</i>
        </a>
      )}
      <p>{name}</p>
    </div>
  );
};

export default ProfileModal;
