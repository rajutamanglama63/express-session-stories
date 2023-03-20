import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import utilityFunc from "../utils/func";

const SingleCard = ({ story, setCurrentId }) => {
  const navigate = useNavigate();
  const user = utilityFunc.getUser();
  let storyToRender = story;
  if (storyToRender === null) {
    storyToRender = {
      title: "Title",
      content: "Dummy content",
      storyTeller: "Katha bachak",
      date: "Feb 14 mon",
      id: "123",
    };
  }

  const editHandler = (storyId) => {
    setCurrentId(storyId);
    navigate("/create");
  };
  return (
    <div className="region-margin-sm ">
      <div className="flex block-view region-sm">
        <p className="h4 pointer">{storyToRender.title}</p>
        <div className="flex align-center">
          <p className="h6">{storyToRender.storyTeller}</p>
          {(user !== null) & (user === storyToRender.storyTeller) ? (
            <>
              <Icon
                onClick={() => editHandler(storyToRender.id)}
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
          Uploaded: <span>{storyToRender.date}</span>
        </p>
      </div>
      <div className="region-tn">
        <p className="paragraph paragraph-color ">{storyToRender.content}</p>
      </div>
      <div className="flex ">
        <div className="flex align-center">
          <Icon icon="mdi:like" className="like-cmnt-btn" />
          <span className="region-left-margin-tn no-font-weight">27</span>
        </div>
        <div className="flex align-center region-left-margin-md ">
          <Icon icon="ic:round-mode-comment" className="like-cmnt-btn" />
          <span className="region-left-margin-tn no-font-weight">44</span>
        </div>
      </div>
      <div className="line region-margin-tn"></div>
    </div>
  );
};

export default SingleCard;
