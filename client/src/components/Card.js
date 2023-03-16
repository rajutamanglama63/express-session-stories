import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const Card = ({ story }) => {
  const navigate = useNavigate();

  const [dispalyComment, setDisplayComment] = useState(false);

  const commentDisplayHandler = () => {
    setDisplayComment(!dispalyComment);
  };

  const singlePageHandler = () => {
    navigate("/single/:id");
  };

  return (
    <div className="region-margin-sm ">
      <div className="flex block-view region-sm">
        <p className="h4 pointer" onClick={singlePageHandler}>
          {story?.title}
        </p>
        <div className="flex align-center">
          <p className="h6">{story?.storyTeller}</p>
          <Icon
            icon="material-symbols:edit"
            className="region-left-margin-tn btn-edit"
          />
          <Icon
            icon="material-symbols:delete-forever"
            className="region-left-margin-tn btn-del"
          />
        </div>
        <p className="one-font-size">
          Uploaded: <span>{story?.date}</span>
        </p>
      </div>
      <div className="region-tn">
        <p className="paragraph paragraph-color spec-text">{story?.content}</p>
      </div>
      <div className="flex ">
        <div className="flex align-center">
          <Icon icon="mdi:like" className="like-cmnt-btn" />
          <span className="region-left-margin-tn no-font-weight">27</span>
        </div>
        <div
          className="flex align-center region-left-margin-md "
          onClick={commentDisplayHandler}
        >
          <Icon icon="ic:round-mode-comment" className="like-cmnt-btn" />
          <span className="region-left-margin-tn no-font-weight">44</span>
        </div>
      </div>

      {dispalyComment ? (
        <>
          <Comment />
        </>
      ) : null}
      <div className="line region-margin-tn"></div>
    </div>
  );
};

export default Card;
