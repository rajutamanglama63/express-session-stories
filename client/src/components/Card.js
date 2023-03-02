import { Icon } from "@iconify/react";

const Card = () => {
  return (
    <div className="region-margin-sm">
      <div className="flex block-view region-sm">
        <p className="h4">Life on Mars do exist.</p>
        <div className="flex align-center">
          <p className="h6">Sangita Mukarung</p>
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
          Uploaded: <span>Feb 02, 2023</span>
        </p>
      </div>
      <div className="region-tn">
        <p className="paragraph paragraph-color">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with: “Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.” The purpose of lorem ipsum is to
          create a natural looking block of text (sentence, paragraph, page,
          etc.) that doesn't distract from the layout. A practice not without
          controversy, laying out pages with meaningless filler text can be very
          useful when the focus is meant to be on design, not content. The
          passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software. Today
          it's seen all around the web; on templates, websites, and stock
          designs. Use our generator to get your own, or read on for the
          authoritative history of lorem ipsum.
        </p>
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
    </div>
  );
};

export default Card;
