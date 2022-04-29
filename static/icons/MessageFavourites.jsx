import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  const { isFavorite } = props
  if (isFavorite) {
    return(
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M10.367 3.203 7.828 8.398l-5.742.82c-1.016.157-1.406 1.407-.664 2.15l4.101 4.023-.976 5.664c-.156 1.015.937 1.797 1.836 1.328l5.117-2.695 5.078 2.695c.899.469 1.992-.313 1.836-1.328l-.977-5.664 4.102-4.024c.742-.742.352-1.992-.664-2.148l-5.703-.82-2.578-5.196c-.43-.898-1.758-.937-2.227 0Z"
          fill={"#08E"}
        />
      </Svg>
    )
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path fill="url(#pattern0)" d="M0 0H24V24H0z"></path>
        <defs>
          <pattern
            id="pattern0"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use transform="scale(.02083)" xlinkHref="#image0_0_61"></use>
          </pattern>
          <image
            id="image0_0_61"
            width="48"
            height="48"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTACH7gCI7gCM8wCH7gCI7gCI7gCH7gCI7gCH7QCI7wCI7gCH7gCI7gCI7gCI7tNCCjEAAAAPdFJOUwBeoQWN73XLSw4oGLo32lyg1T8AAAFqSURBVDjLY2CgL+DYgEOCPQGHxPrPOCT0P2IX5/z/HbsE2/f/C7BKsP7wV8Aq0R+8/idWifMJPN+wiXP938DxFZsEyycG5vgGLBLz/zIw5B/AIiH/gIFh/y80wVk3xJziBRgYmP6pJPZuhokmnYv/DwTfDRgYuEGM/19rNMAS+4DMNyqJl0HsGWJOdUApZUgYnUcNPGb9L8wQltF/lIgw+i8AY+Z/MUCIc9f/gLMZ/59ESCz9ihTG9//Bo5v3/2vkcIqPgvvzzwRkC6f/vwAz1Rk1WvWhocSPHvL9MAn0uPJ3gKatH2gS9dCYYPmCKs78H+oWDrQkxPsPSExsBoWvAWqa+gJy6T+gm99fQJHg+cjAW/89/tMGBn3UlG3/m9P/q4DZ/28G8qjRvj5A/r8nA8Oa/2/Xf0CRyH/+vwpEt/7XR00P+v8hscjp/x81OuO/QP3BVf8JWZz7O9yRjKEo2VIAwZ6ygWHwAgC9cIKLiqH/1gAAAABJRU5ErkJggg=="
          ></image>
        </defs>
      </svg>
    );
  }
}

export default SvgComponent
