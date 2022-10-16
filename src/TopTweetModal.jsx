import React from "react";
import "./TopTweetModal.css";
import { ReactComponent as TopTweetModalIcon } from "../img/TopTweetModalIcon.svg";
import { ReactComponent as SeeLatestTweets } from "../img/SeeLatestTweets.svg";
import { ReactComponent as Settings } from "../img/Settings.svg";

const TopTweetModal = () => {
  return (
    <div className="top__TweetModal">
      <div className="top__TweetModal__header">
        <TopTweetModalIcon />
        <h2>Home shows you show top Tweet first</h2>
      </div>
      <div className="top__TweetModal__body">
        <SeeLatestTweets />
        <p>
          See latest Tweets instead
          <span>You'll see Tweets show up as they happen.</span>
        </p>
      </div>

      <div className="top__TweetModal__footer">
        <Settings />
        <p>View content preferences</p>
      </div>
    </div>
  );
};

export default TopTweetModal;
