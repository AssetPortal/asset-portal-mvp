import React from "react";

type Props = {
  className?: string;
};

function AssetHub({ className }: Props) {
  return (
    <svg
      version="1.1"
      id="Layer_133333333"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 640 640"
      enableBackground="new 0 0 640 640"
      xmlSpace="preserve"
      className={className}
    >
      <style type="text/css">
        {`
        .st0 { fill: #321D47; }
        .st1 { fill: #FFFFFF; }
        .st2 { fill: #E6007A; }
      `}
      </style>
      <g>
        <path
          className="st0"
          d="M637.3,319.3c0,175.2-142,317.3-317.3,317.3S2.7,494.6,2.7,319.3S144.8,2.1,320,2.1S637.3,144.1,637.3,319.3z"
        />
        <path
          className="st1"
          d="M444.2,392.4h-67.6l-12.7-31h-85.8l-12.7,31h-67.6l80.9-184.3h84.5L444.2,392.4z M321.1,256l-22.4,55h44.7
          L321.1,256z"
        />
        <circle className="st2" cx="321" cy="122.1" r="46.9" />
        <circle className="st2" cx="321" cy="517.1" r="46.9" />
        <circle className="st2" cx="147.8" cy="216" r="46.9" />
        <circle className="st2" cx="494.3" cy="216" r="46.9" />
        <circle className="st2" cx="147.8" cy="424.8" r="46.9" />
        <circle className="st2" cx="494.3" cy="424.8" r="46.9" />
      </g>
    </svg>
  );
}

export default AssetHub;
