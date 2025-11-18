/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Book2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Book2SvgrepoComSvgIcon(props: Book2SvgrepoComSvgIconProps) {
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

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={
          "M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        d={"M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"1.5"}
        d={"M8 7h8m-8 3.5h5m6.5 8.5H8"}
      ></path>
    </svg>
  );
}

export default Book2SvgrepoComSvgIcon;
/* prettier-ignore-end */
