import React from "react";

interface AvatarProps {
  imgUrl?: string | null;
  width?: string;
}

const Avatar = ({ imgUrl, width }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className={`w-${width ? width : "12"} rounded-full`}>
        <img src={imgUrl ? imgUrl : "/icons/gbm-logo-32.png"} />
      </div>
    </div>
  );
};

export default Avatar;
