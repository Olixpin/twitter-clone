import {
  Close,
  Description,
  DescriptionOutlined,
  Note,
  People,
  PeopleOutline,
} from "@mui/icons-material";
import React from "react";
import "./File.css";

const File = ({ file, setFile }) => {
  return (
    <div className="file__container">
      <div>
        <button>
          <span
            onClick={() => {
              setFile(null);
            }}
          >
            <Close />
          </span>
        </button>
      </div>
      {<img src={file} alt="" />}
      <div className="file__info">
        <div>
          <PeopleOutline />
          <p>Tag People</p>
        </div>
        <div>
          <DescriptionOutlined />
          <p>Tag People</p>
        </div>
      </div>
    </div>
  );
};

export default File;
