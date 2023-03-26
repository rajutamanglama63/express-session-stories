import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../components/Card";

const Home = ({ setCurrentId, msg }) => {
  const stories = useSelector((state) => state.story);

  useEffect(() => {
    if (msg !== null) {
      toast.success(msg);
    }
  }, [msg]);

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
