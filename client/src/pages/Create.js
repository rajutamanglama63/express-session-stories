import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storyCreation } from "../reducers/storyReducer";

const Create = () => {
  const dispatch = useDispatch();
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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(storyCreation(story));
    clear();
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
