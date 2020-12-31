import React from "react";
import "./skeleton.css";

const SkeletonElments = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElments;
