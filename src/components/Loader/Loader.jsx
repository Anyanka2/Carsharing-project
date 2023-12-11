import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ marginLeft: '40px' }}>
      <ThreeDots
        height={80}
        width={80}
        radius={10}
        color="#fca311"
        ariaLabel="three-dots-loading"
      />
    </div>

  );
};
