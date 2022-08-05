import React from "react";

const Text = ({ type, children, count }) => {
  if (type === "h1") {
    return (
      <>
        <h1>
          {count}
          {children}
        </h1>
      </>
    );
  }
  if (type === "h2") {
    return (
      <h2>
        {count}
        {children}
      </h2>
    );
  }
  if (type === "h3") {
    return (
      <h3>
        {count}
        {children}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4>
        {count}
        {children}
      </h4>
    );
  }
  if (type === "h5") {
    return (
      <h5>
        {count}
        {children}
      </h5>
    );
  }
  if (type === "h6") {
    return (
      <h6>
        {count}
        {children}
      </h6>
    );
  }
  if (type === "p") {
    return (
      <h6>
        {count}
        {children}
      </h6>
    );
  } else {
    return (
      <span>
        {count}
        {children}
      </span>
    );
  }
};

export default Text;
