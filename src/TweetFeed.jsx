import React, { useEffect } from "react";
import "./TweetFeed.css";
import { ReactComponent as TopTweet } from "../img/TopTweet.svg";
import { ReactComponent as Image } from "../img/Image.svg";
import { ReactComponent as Gif } from "../img/Gif.svg";
import { ReactComponent as Stats } from "../img/Stats.svg";
import { ReactComponent as Smiley } from "../img/Smiley.svg";
import { ReactComponent as Schedule } from "../img/Schedule.svg";
import { ReactComponent as Location } from "../img/Location.svg";
import { ReactComponent as Global } from "../img/Global.svg";

import { Avatar } from "@mui/material";
import TopTweetModal from "./TopTweetModal";

const TweetFeed = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);
  const [topTweetModal, setTopTweetModal] = React.useState(false);

  function handleTweetMessage(e) {
    setTweetMessage(e.target.value);
  }

  console.log(topTweetModal);

  useEffect(() => {
    // get the height of the textarea
    const textarea = document.querySelector("textarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [tweetMessage]);

  // handle scroll
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // remove the top tweet modal when the window body is clicked
  let windowRef = React.useRef();
  useEffect(() => {
    windowRef.current = document.body;
    windowRef.current.addEventListener("click", () => {
      setTopTweetModal(false);
    });

    return () => {
      windowRef.current.removeEventListener("click", () => {
        setTopTweetModal(false);
      });
    };
  }, []);

  return (
    <div className="tweetFeed">
      <div
        className={
          scrolled
            ? "tweetFeed__header tweeted__headerScrolled"
            : "tweetFeed__header"
        }
      >
        <h1>Home</h1>
        <div className="iconStyle">
          <TopTweet
            onClick={(e) => {
              e.stopPropagation();
              setTopTweetModal(true);
            }}
          />

          {topTweetModal && <TopTweetModal />}
        </div>
      </div>
      <div className="tweetFeed__wrap">
        <div className="tweetFeed__info">
          <div className="tweetFeed__avatarContainer">
            <Avatar
              src="https://storage.googleapis.com/replit/images/1652805279185_01eea81951dbbfa37f9a1311d0e2529f.jpeg"
              alt="profile"
            />
          </div>

          <div className="tweetFeed__box">
            <div className="tweetFeed__inputContainer">
              <textarea
                onChange={handleTweetMessage}
                value={tweetMessage}
                placeholder="What's happening?"
                className="tweetFeed__textarea"
              />
              <div className="tweetFeed__global">
                <Global className="global" />
                <h2>Everyone can reply</h2>
              </div>
              <div className="tweetFeed__inputIcons">
                <div className="tweetFeed__Icons">
                  <div>
                    <Image />
                  </div>
                  <div>
                    <Gif />
                  </div>
                  <div>
                    <Stats />
                  </div>
                  <div>
                    <Smiley />
                  </div>
                  <div>
                    <Schedule />
                  </div>
                  <div>
                    <Location />
                  </div>
                </div>
                <button>Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">{generateParagraaph()}</div>
    </div>
  );
};

export default TweetFeed;

const generateParagraaph = () => {
  const paragraph = [];
  for (let i = 0; i < 100; i++) {
    paragraph.push(
      <p key={i}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
      </p>
    );
  }

  return paragraph;
};
