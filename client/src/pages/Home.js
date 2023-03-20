import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import utilityFunc from "../utils/func";

const Home = ({ setCurrentId }) => {
  const stories = useSelector((state) => state.story);
  const storyControl = useSelector((state) => state.storyControl);
  console.log("msg: ", storyControl);

  useEffect(() => {
    if (storyControl.msg !== "") {
      utilityFunc.reload();
    }
  });

  return (
    <div className="wrapper region-sm">
      {stories.length !== 0 ? (
        stories.map((story) => (
          <Card key={story.id} story={story} setCurrentId={setCurrentId} />
        ))
      ) : (
        <>
          <h2 className="region-md">No stories.</h2>
        </>
      )}
    </div>
  );
};

export default Home;
