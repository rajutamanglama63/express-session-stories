import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Card from "../components/Card";

const Home = ({ setCurrentId }) => {
  const stories = useSelector((state) => state.story);
  const storyControl = useSelector((state) => state.storyControl);

  // useEffect(() => {
  //   if (storyControl.msg === "Successfully updated.") {
  //     toast.success("Successfully updated.");
  //   } else if (storyControl.msg === "Successfully deleted.") {
  //     toast.success("Successfully deleted.");
  //   }
  // });

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
