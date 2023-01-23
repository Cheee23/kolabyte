import * as React from "react";
import withDefaults from "@utils/with-defaults";

interface Props {
  width?: number;
  height?: number;
  size?: number;
  fill?: string;
  className?: string;
}

const defaultProps = {
  width: 24,
  height: 24,
  className: "",
};

const Github: React.FC<Props> = ({size, fill, width, height, className, ...props}) => {
  return (
    <svg
      className={className}
      height={size || height}
      viewBox="0 0 50 50"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

const MemoGithub = React.memo(Github);

export default withDefaults(MemoGithub, defaultProps);
