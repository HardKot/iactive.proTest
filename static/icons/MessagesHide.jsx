import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  // if (props.isHidden) {
  //   return (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       xmlnsXlink="http://www.w3.org/1999/xlink"
  //       width="24"
  //       height="24"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //     >
  //       <path fill="url(#pattern0)" fillOpacity="0.2" d="M0 0H24V24H0z"></path>
  //       <defs>
  //         <pattern
  //           id="pattern0"
  //           width="1"
  //           height="1"
  //           patternContentUnits="objectBoundingBox"
  //         >
  //           <use transform="scale(.02083)" xlinkHref="#image0_0_47"></use>
  //         </pattern>
  //         <image
  //           id="image0_0_47"
  //           width="48"
  //           height="48"
  //           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTAAAAAAAAAAAAAu23DQAAAADdFJOUwBpEFP+BFQAAAAzSURBVCjPY2AYBOA/FGByvoaCQTyY8wWiej4yR55szrdVYDCfgAsotodeHJSgwu2fAQYASipQ77qIzjwAAAAASUVORK5CYII="
  //         ></image>
  //       </defs>
  //     </svg>
  //   );
  // }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="#A2A2A2"
        strokeWidth="1.25"
        d="M0.625 0.625H17.375V17.375H0.625z"
      ></path>
      <path stroke="#A2A2A2" strokeWidth="1.25" d="M0 5.375L18 5.375"></path>
    </svg>
  )
};

export default SvgComponent
