import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(profileReducer(userId));
  // }, [userId, dispatch]);
  return (
    <div className="wrapper region-md">
      <div className="flex block-view">
        <div className="flex block-view split-center align-center">
          <p className="h2 font-md">Raju Lama</p>
          <p className="h6">humagain123@gmail.com</p>
          <p className="one-font-size">You have uploaded 3 stories in total.</p>
        </div>
        <div className="region-sm">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Profile;
