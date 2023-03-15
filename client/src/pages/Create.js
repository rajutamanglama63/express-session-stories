import React from "react";

const Create = () => {
  return (
    <div className="wrapper flex block-view region-md">
      <div className="container-md container-tn">
        <div className="flex block-view region-sm">
          <h4 className="h6">Create story</h4>
          <p className="one-font-size">Start creating your story.</p>
        </div>
        <form>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="title"
            type="text"
          />
          <textarea className="input-field" rows="10" placeholder="story..." />
          <button type="submit" className="secondary-button region-margin-tn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
