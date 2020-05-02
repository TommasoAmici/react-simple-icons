import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Inkscape = forwardRef(function Inkscape(
  { color = 'currentColor', size = 24, title = 'Inkscape', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M11.872.191c-.745-.011-1.464.278-1.993.804l-8.825 9.038c-3.343 3.34 2.164 3.061 4.154 4.325.922.602-2.955 1.371-2.164 2.164.771.793 4.65 1.521 5.422 2.293.771.791-1.564 1.627-.793 2.418.75.793 2.549.043 2.87 1.842.235 1.328 3.3.666 4.672-.471.854-.729-1.479-.729-.708-1.521 1.929-1.949 3.642-.875 4.349-2.676.387-.963-2.913-1.65-2.034-2.271 2.101-1.477 9.812-2.227 6.255-5.782L13.93.995c-.56-.521-1.295-.807-2.058-.804zm.075.859c.529.003 1.06.201 1.444.584l3.492 3.557c.323.321.323.986.129 1.178l-1.734-1.412-.343 2.077-1.435-.772-2.336 1.478-.771-3.105-1.242 2.698-3.107-.022c-.6 0-.514-.621.107-1.242 1.221-1.35 3.6-3.64 4.35-4.433.385-.396.915-.589 1.445-.584l.001-.002zm9.755 16.276c-.74.025-1.496.395-1.689 1.08 0 .449 3.492.707 3.301-.107-.141-.686-.87-1.002-1.611-.975v.002zM6.356 19.271c-1.008.059-2.088.791-1.232 1.512.791.686 1.992-.15 2.377-1.113-.24-.316-.686-.426-1.143-.398h-.002zm13.229.077c-.986.9.17 1.842 1.134 1.221.258-.173-.021-1.005-1.134-1.221z" />
    </svg>
  );
});

Inkscape.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Inkscape;
