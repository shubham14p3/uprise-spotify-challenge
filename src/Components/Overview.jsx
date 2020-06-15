import React from "react";
import {Button} from "@uprise/button";
import style from "../css/overview.module.css";
import Loader from 'react-loader-spinner'

var profile = "";

export const Overview = (props) => {
  profile = props.profile;
  let image = props.images ? props.images[0].url : "";
  let displayName = props.displayName ? props.displayName : 
  <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}  
      />
   ;
  
  let followers = props.followers ? `Followers(${props.followers})` : "";

  return (
    <div className={style.outer}>
      <div>
        <img src={image} alt=""></img>
      </div>
      <div className={style.flexDirectionCol}>
        <div>
          <h1>{displayName}</h1>
          <p>{followers}</p>
        </div>
        <div>
          <Button
            onClick={handleClick}
            variant="primary"
            size="medium"
            title="Follow"
          />
        </div>
      </div>
    </div>
  );
};

// Get spotify profile link
const handleClick = () => {
  window.location.href = profile;
};
