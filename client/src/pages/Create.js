import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storyUpdate } from "../reducers/storyControlReducer";
import { storyCreation } from "../reducers/storyReducer";

const Create = ({ currentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foundStory = useSelector((state) =>
    currentId
      ? state.story.find((eachStory) => eachStory.id === currentId)
      : null
  );

  console.log("id: ", currentId);
  const [story, setStory] = useState({
    title: "",
    content: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStory({ ...story, [name]: value });
  };

  const clear = () => {
    setStory({
      title: "",
      content: "",
    });
  };

  useEffect(() => {
    if (foundStory) {
      setStory(foundStory);
    }
  }, [foundStory]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (currentId === null) {
      dispatch(storyCreation(story));
      clear();
      navigate("/");
    } else {
      dispatch(storyUpdate(currentId, story));
      clear();
      navigate("/");
    }
  };
  return (
    <div className="wrapper flex block-view region-md">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Create story</h4>
          <p className="one-font-size">Start creating your story.</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="title"
            name="title"
            value={story.title}
            type="text"
            onChange={handleInput}
          />
          <textarea
            className="input-field"
            rows="10"
            placeholder="story..."
            name="content"
            value={story.content}
            onChange={handleInput}
          />
          <button type="submit" className="secondary-button region-margin-tn">
            {currentId === null ? "Create" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
