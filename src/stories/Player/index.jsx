import audio1 from "../../assets/music/1.mp3";
import "./player.scss";
import React, { useEffect, useRef } from "react";
import "jplayer";

const Player = ({ mediaUrl }) => {
  const jPlayerRef = useRef(null);

  //   useEffect(() => {
  //     if (jPlayerRef.current) {
  //       $(jPlayerRef.current).jPlayer({
  //         ready: () => {
  //           $(jPlayerRef.current).jPlayer("setMedia", {
  //             mp3: mediaUrl, // URL to your audio file
  //           });
  //         },
  //         swfPath: "/path/to/jPlayer/", // Set the correct path to the jPlayer SWF file
  //         supplied: "mp3",
  //         useStateClassSkin: true,
  //       });
  //     }
  //   }, [mediaUrl]);

  return <div className="jp-jplayer" ref={jPlayerRef}></div>;
};

export default Player;
