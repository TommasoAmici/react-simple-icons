import React from 'react';
import PropTypes from 'prop-types';

const Maserati = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.243 17.475h-1.521c0 .894.58 1.301 1.505 1.098v-1.098zm.063-3.326c0-.22.11-3.09.8-5.349.737-2.478 2.243-3.953 2.133-4.094-.094-.141-1.317.11-2.259.753-.988.674-1.96 1.804-1.882 1.882.047.047.377-.22.973-.455.643-.235.925-.188.925-.188s-1.067 1.757-1.584 3.64c-.44 1.584-.675 3.638-.69 3.827zm-12.612 0c-.016-.22-.11-3.09-.8-5.349-.737-2.478-2.243-3.953-2.133-4.094.094-.141 1.317.11 2.243.753.988.674 1.96 1.804 1.882 1.882-.047.047-.376-.22-.972-.455-.643-.235-.91-.188-.91-.188s1.067 1.757 1.584 3.64c.44 1.584.675 3.638.675 3.827zm5.412-11.137c.612-1.192.721-2.98.878-3.012.141.031.267 1.82.863 3.012.565 1.13 1.788 2.07 1.726 2.196-.079.141-.77-.204-1.098-.36-.55-.252-.989-.456-.989-.456s-.22 2.855.47 5.49c.566 2.15 1.93 4.11 2.056 4.283H13.27c-.047-.094-.11-.189-.157-.267-.47-.831-.816-1.553-1.13-2.792-.33 1.24-.674 1.96-1.145 2.792a1.49 1.49 0 0 1-.157.267h-1.74c.125-.173 1.49-2.134 2.054-4.283.69-2.62.47-5.49.47-5.49s-.439.204-.988.455c-.345.157-1.02.502-1.113.377-.047-.126 1.176-1.083 1.74-2.212M5.742 17.475h1.522c0 .894-.58 1.301-1.522 1.098zm8.455.69c-.69.643-.69 1.788-.69 1.788H10.51s0-1.145-.69-1.788c-.487-.455-1.083-.55-1.083-.55-.392-.078-.392-.125-.392-.14h7.357s0 .062-.392.14a2.2 2.2 0 0 0-1.114.55M5.004 14.54h13.945v.534H5.004zm.016 1.961h13.945v.518H5.02zm.674-.988H18.29v.533H5.694zm4.69 6.321h3.2V24h-3.2zm-.517-1.459h4.235v1.051H9.867Z" />
    </svg>
  );
};

Maserati.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maserati.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Maserati;
