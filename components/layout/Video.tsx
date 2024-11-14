import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { TITLE_YOUTUBE } from "@/app/common/constant";

interface VideoProps {
  id: string;
}

export const Video: React.FC<VideoProps> = ({ id }) => {
  return (
    <div
      className="relative w-full aspect-video"
      aria-label="Watch youtube video"
    >
      <div className="absolute inset-0">
        <LiteYouTubeEmbed
          id={id}
          title={TITLE_YOUTUBE}
          adNetwork={false}
          poster="maxresdefault"
          noCookie={true}
        />
      </div>
    </div>
  );
};
