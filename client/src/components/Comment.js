import React from "react";

const Comment = () => {
  return (
    <div className="flex block-view region-tn">
      <p className="h6 bold">Please comment below</p>
      <textarea placeholder="comment..." />
      <div className="region-padding-top">
        <p className="paragraph bold user-name-color">Harihar Pandey</p>
        <p className="one-font-size paragraph-color">
          Beautiful story, Heart touching and i must say fabulous.
        </p>
      </div>
      <div className="region-padding-top">
        <p className="paragraph bold user-name-color">Harihar Pandey</p>
        <p className="one-font-size paragraph-color">
          Beautiful story, Heart touching and i must say fabulous.
        </p>
      </div>
    </div>
  );
};

export default Comment;
