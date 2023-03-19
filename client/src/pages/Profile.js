import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Profile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const me = users.length !== 0 ? users.find((user) => user.id === id) : null;
  const { stories, username, email } = me;

  return (
    <div className="wrapper region-md">
      <div className="flex block-view">
        <div className="flex block-view split-center align-center">
          <p className="h2 font-md">{username}</p>
          <p className="h6">{email}</p>
          <p className="one-font-size">
            You have uploaded {stories.length} stories in total.
          </p>
        </div>
        <div className="region-sm">
          {stories.map((story) => (
            <>
              <Card key={JSON.stringify(story.id)} story={story} />
            </>
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
