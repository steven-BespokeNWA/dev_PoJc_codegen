/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersGroupRoundedSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function UsersGroupRoundedSvgrepoComSvgIcon(
  props: UsersGroupRoundedSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"9"}
        cy={"6"}
        r={"4"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></circle>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"1.5"}
        d={"M15 9a3 3 0 1 0 0-6"}
      ></path>

      <ellipse
        cx={"9"}
        cy={"17"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        rx={"7"}
        ry={"4"}
      ></ellipse>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"1.5"}
        d={"M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37"}
      ></path>
    </svg>
  );
}

export default UsersGroupRoundedSvgrepoComSvgIcon;
/* prettier-ignore-end */
