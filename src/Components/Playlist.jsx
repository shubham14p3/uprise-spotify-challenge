import React from "react";
import Slider from "react-slick";
import style from "../css/playlist.module.css";
import {NextArrow, PrevArrow} from "./CustomArrow";

export const Playlist = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={style.sliderOuter}>
      <div className={style.playlistSlider}>
        <Slider {...settings}>
          {props.playlists ? makePlaylistDiv(props.playlists) : null}
        </Slider>
      </div>
    </div>
  );
};

//Make playlist div dynamically
const makePlaylistDiv = (playlists) => {
  let playlistDiv = [];

  playlists.forEach((playlist) => {
    let JSX = (
      <div key={playlist.id}>
        <img src={playlist.images[0].url} alt="" />
        <p className={style.txtCntr}>{playlist.name}</p>
      </div>
    );
    playlistDiv.push(JSX);
  });

  return playlistDiv;
};
