import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElments from "./SkeletonElments";

export const SkeletionProductcard = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-product">
        <SkeletonElments type="image" />
        <SkeletonElments type="title" />
        <SkeletonElments type="text" />
        <SkeletonElments type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export const CarouselSkeletion = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-prduct">
        <SkeletonElments type="image" />
      </div>
      <Shimmer />
    </div>
  );
};
