import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Comment from "./Comment";
import utilityFunc from "../utils/func";

const Card = ({ story, setCurrentId }) => {
  const navigate = useNavigate();
  const user = utilityFunc.getUser();

  const [dispalyComment, setDisplayComment] = useState(false);

  const commentDisplayHandler = () => {
    setDisplayComment(!dispalyComment);
  };

  const singlePageHandler = () => {
    navigate(`/single/${story.id}`);
  };

  const editHandler = (storyId) => {
    setCurrentId(storyId);
    navigate("/create");
  };

  return (
    <div className="region-margin-sm ">
      <div className="flex block-view region-sm">
        <p className="h4 pointer" onClick={singlePageHandler}>
          {story?.title}
        </p>
        <div className="flex align-center">
          <p className="h6">{story?.storyTeller}</p>
          {user !== null && user === story.storyTeller ? (
            <>
              <Icon
                onClick={() => editHandler(story.id)}
                icon="material-symbols:edit"
                className="region-left-margin-tn btn-edit"
              />
              <Icon
                icon="material-symbols:delete-forever"
                className="region-left-margin-tn btn-del"
              />
            </>
          ) : null}
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
