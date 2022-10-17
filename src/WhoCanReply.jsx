import { ReactComponent as Global } from "../img/Global.svg";

import React from "react";
import "./WhoCanReply.css";
import {
  AlternateEmail,
  Check,
  CheckCircleOutline,
  People,
  Tag,
} from "@mui/icons-material";
const WhoCanReply = ({ handleWhoCanDoWhat, whoCanDoWhat }) => {
  return (
    <div className="whoCanReply">
      <div className="whoCanReply__header-top">
        <h2>Who can reply?</h2>
        <p>Choose who can reply to this Tweet</p>
        <p>Anyone mentioned can always reply.</p>
      </div>

      <div className="whoCanReply__header">
        <div className="whoCanReply__headerEveryone">
          <div className="whoCanReply__headerEveryone__icon">{<Global />}</div>
          <h3 onClick={handleWhoCanDoWhat}>Everyone can reply</h3>
        </div>
        <div className="whoCanReply__header__icon">
          {whoCanDoWhat === "Everyone can reply" ? <Check /> : ""}
        </div>
      </div>

      <div className="whoCanReply__header">
        <div className="whoCanReply__headerEveryone">
          <div className="whoCanReply__headerEveryone__icon">{<People />}</div>
          <h3 onClick={handleWhoCanDoWhat}>People you know</h3>
        </div>
        <div className="whoCanReply__header__icon">
          {whoCanDoWhat === "People you know" ? <Check /> : ""}
        </div>
      </div>

      <div className="whoCanReply__header">
        <div className="whoCanReply__headerEveryone">
          <div className="whoCanReply__headerEveryone__icon">
            {<AlternateEmail />}
          </div>
          <h3 onClick={handleWhoCanDoWhat}>Only people you mention</h3>
        </div>
        <div className="whoCanReply__header__icon">
          {whoCanDoWhat === "Only people you mention" ? <Check /> : ""}
        </div>
      </div>
    </div>
  );
};

export default WhoCanReply;
