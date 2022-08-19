import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

const Toggleable = forwardRef((props, ref) => {
  const [visable, setVisable] = useState(false);

  function toggleVisability() {
    setVisable(!visable);
  }

  useImperativeHandle(ref, () => {
    return { toggleVisability };
  });

  //Why do I use display here???
  const contentHider = { display: visable ? "none" : "" };
  const content = { display: visable ? "" : "none" };
  //Make an id
  const id = `hide-${props.buttonMsg.replaceAll(" ", "-")}`;
  return (
    <div>
      <div style={contentHider}>
        <p>
          {props.msg}
          <button
            id={id}
            onClick={() => {
              toggleVisability();
            }}
          >
            {props.buttonMsg}
          </button>
        </p>
      </div>
      <div style={content} className="togglableContent">
        {props.children}
        <button onClick={toggleVisability}>{props.hideMsg}</button>
      </div>
    </div>
  );
});

Toggleable.propTypes = { msg: PropTypes.string };

export default Toggleable;
