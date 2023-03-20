import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleCard from "../components/SingleCard";

const Single = ({ setCurrentId }) => {
  const { id } = useParams();
  const stories = useSelector((state) => state.story);

  const story =
    stories.length !== 0
      ? stories.find((eachStory) => eachStory.id === id)
      : null;
  return (
    <div className="wrapper region-md">
      <SingleCard story={story} setCurrentId={setCurrentId} />
    </div>
  );
};

export default Single;
