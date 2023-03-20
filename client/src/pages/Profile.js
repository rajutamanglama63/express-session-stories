import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Profile = ({ setCurrentId }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const me = users.length !== 0 ? users.find((user) => user.id === id) : null;
  // const { stories, username, email } = me;

  return (
    <div className="wrapper region-md">
      <div className="flex block-view">
        <div className="flex block-view split-center align-center">
          <p className="h2 font-md">{me?.username}</p>
          <p className="h6">{me?.email}</p>
          <p className="one-font-size">
            You have uploaded {me?.stories.length} stories in total.
          </p>
        </div>
        <div className="region-sm">
          {me?.stories.map((story) => (
            <>
              <Card key={story.id} story={story} setCurrentId={setCurrentId} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
