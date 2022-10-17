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
import WhoCanReply from "./WhoCanReply";
import { AlternateEmail, People } from "@mui/icons-material";

const TweetFeed = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);
  const [topTweetModal, setTopTweetModal] = React.useState(false);
  const [whoCanReply, setWhoCanReply] = React.useState(false);
  const [whoCanDoWhat, setWhoCanDoWhat] = React.useState("Everyone can reply");
  const [whoCanDoWhatIcon, setWhoCanDoWhatIcon] = React.useState(<Global />);

  // handleWhoCanDoWhat
  const handleWhoCanDoWhat = (e) => {
    setWhoCanDoWhat(e.target.innerText);
    setWhoCanReply(false);
  };

  // handle WhoCanDoWhaatIcon
  useEffect(() => {
    if (whoCanDoWhat === "Everyone can reply") {
      setWhoCanDoWhatIcon(<Global className="global" />);
    } else if (whoCanDoWhat === "People you know") {
      setWhoCanDoWhatIcon(<People className="global" />);
    } else {
      setWhoCanDoWhatIcon(<AlternateEmail className="global" />);
    }

    return () => {};
  }, [whoCanDoWhat]);

  function handleTweetMessage(e) {
    setTweetMessage(e.target.value);
  }

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
      setWhoCanReply(false);
    });

    return () => {
      windowRef.current.removeEventListener("click", () => {
        setTopTweetModal(false);
        setWhoCanReply(false);
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
              <div
                style={
                  tweetMessage.length > 0
                    ? { display: "flex" }
                    : { display: "none" }
                }
                className="tweetFeed__global "
                onClick={(e) => {
                  e.stopPropagation();
                  setWhoCanReply(!whoCanReply);
                }}
              >
                {/* Display the right icon */}
                {whoCanDoWhatIcon}
                <h2>{whoCanDoWhat}</h2>
                {whoCanReply && (
                  <WhoCanReply
                    handleWhoCanDoWhat={handleWhoCanDoWhat}
                    whoCanDoWhat={whoCanDoWhat}
                  />
                )}
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
                <div className="tweetFeed__tweetButton">
                  <div className="css-1dbjc4n r-1awozwy r-1777fci r-ywje51 r-1vsu8ta r-18qmn74 top-margin">
                    <div
                      role="progressbar"
                      aria-valuemax="100"
                      aria-valuemin="0"
                      aria-valuenow="1"
                      className="css-1dbjc4n r-1awozwy r-1777fci r-o7ynqc r-1i6wzkk"
                    >
                      <div className="css-1dbjc4n r-z80fyv r-ghumyc r-eafdt9 r-19hi5yp r-19wmn03">
                        <svg
                          height="25"
                          width="25"
                          viewBox="0 0 20 20"
                          style={{
                            overflow: "visible",
                          }}
                        >
                          <circle
                            cx="50%"
                            cy="50%"
                            fill="none"
                            strokeWidth={2}
                            r="9"
                            stroke="#EFF3F4"
                          ></circle>
                          <circle
                            cx="50%"
                            cy="50%"
                            fill="none"
                            strokeWidth={2}
                            r="9"
                            stroke="#1D9BF0"
                            strokeLinecap="round"
                            style={{ strokeDasharray: "56.5487px 56.5487px" }}
                          ></circle>
                        </svg>
                      </div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1777fci r-1d2f490 r-ywje51 r-u8s1d r-zchlnj r-ipm5af"></div>
                  </div>
                  <div class="css-1dbjc4n r-1y5y3hm r-1m7hjod r-1dc2uwl r-1b7u577 r-92ng3h"></div>

                  <div
                    className="
                  css-svgfill
                  "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      height="22"
                      width="22"
                      aria-hidden="true"
                      class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"
                    >
                      <g>
                        <path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                      </g>
                    </svg>
                  </div>
                  <button
                    style={{
                      // disable the button and make it not clickable when the tweet message is empty
                      pointerEvents: tweetMessage.length > 0 ? "auto" : "none",
                      backgroundColor:
                        tweetMessage.length > 0 ? "#1da1f2" : "#8ECDF8",
                    }}
                  >
                    Tweet
                  </button>
                </div>
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
