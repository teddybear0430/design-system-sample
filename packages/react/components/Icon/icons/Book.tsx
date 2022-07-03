import * as React from "react";
import { SVGProps } from "react";

const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M4.342 4.386A.5.5 0 0 0 4 4.86v6.946a.5.5 0 0 0 .658.475l5-1.667A.5.5 0 0 0 10 10.14V3.194a.5.5 0 0 0-.658-.475l-5 1.667z"
      fill="currentColor"
    />
    <path
      d="M11.5 3.5a.5.5 0 0 0-.5.5v7.576l-5.582.93a.5.5 0 0 0 .164.987l6-1A.5.5 0 0 0 12 12V4a.5.5 0 0 0-.5-.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBook;
