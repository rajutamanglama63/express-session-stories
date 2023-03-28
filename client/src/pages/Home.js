import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const stories = useSelector((state) => state.story);

  return (
    <div className="wrapper region-sm">
      {stories.length !== 0 ? (
        stories.map((story) => <Card key={story.id} story={story} />)
      ) : (
        <>
          <h2 className="region-md">No stories.</h2>
        </>
      )}
    </div>
  );
};

export default Home;
