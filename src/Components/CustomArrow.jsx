import React from "react";
import {primary} from "@uprise/colors";

export function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{...style, width: 0, height: 0}}
    >
      <svg
        style={{position: "absolute", top: "-40px", left: "-25px"}}
        fill={primary.purple}
        width="50px"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 20 20"
        xmlSpace="preserve"
      >
        <path d="M11 10L8.698 7.494a.512.512 0 010-.718.5.5 0 01.71 0l2.807 2.864a.51.51 0 010 .717l-2.807 2.864a.498.498 0 01-.71 0 .51.51 0 010-.717L11 10zM10 .4a9.6 9.6 0 019.6 9.6c0 5.303-4.298 9.6-9.6 9.6S.4 15.303.4 10A9.6 9.6 0 0110 .4zm0 17.954a8.354 8.354 0 100-16.709 8.354 8.354 0 000 16.709z"></path>
      </svg>
    </div>
  );
}

export function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{...style, width: 0, height: 0}}
    >
      <svg
        style={{position: "absolute", top: "-40px", left: "-25px"}}
        fill={primary.purple}
        width="50px"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 20 20"
        xmlSpace="preserve"
      >
        <path d="M11.302 6.776a.5.5 0 00-.71 0L7.785 9.641a.51.51 0 000 .717l2.807 2.864a.498.498 0 00.71 0 .51.51 0 000-.717L9 10l2.302-2.506a.512.512 0 000-.718zM10 .4A9.6 9.6 0 00.4 10c0 5.303 4.298 9.6 9.6 9.6s9.6-4.297 9.6-9.6A9.6 9.6 0 0010 .4zm0 17.954A8.353 8.353 0 011.646 10 8.354 8.354 0 1110 18.354z"></path>
      </svg>
    </div>
  );
}
