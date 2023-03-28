import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storyUpdate } from "../reducers/storyControlReducer";

const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { storyid } = useParams();
  const foundStory = useSelector((state) =>
    storyid ? state.story.find((eachStory) => eachStory.id === storyid) : null
  );

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

  const editHandler = (e) => {
    e.preventDefault();

    dispatch(storyUpdate(storyid, story));
    clear();
    navigate("/");
  };
  return (
    <div className="wrapper flex block-view region-md">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Edit story</h4>
          <p className="one-font-size">Edit your story.</p>
        </div>
        <form onSubmit={editHandler}>
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
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
