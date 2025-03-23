import React from "react";

type DisplayProps = {
    value: string;
};

const Display = ({ value }: DisplayProps) => {
    return (
      <div className="display">
        {value}
      </div>
    );
  };

export default Display;