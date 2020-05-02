import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PiHole = forwardRef(function PiHole({ color = 'currentColor', size = 24, title = 'Pi-hole', ...others }, ref) {
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
      <path d="M9.375,8.782l-4.442,4.44c-1.451,1.45-1.451,3.803,0,5.253l4.442,4.439c1.45,1.449,3.799,1.449,5.249,0l4.442-4.439c1.451-1.45,1.452-3.803,0-5.253l-4.442-4.44C13.175,7.333,10.825,7.333,9.375,8.782z M10.595,7.38C7.597,7.06,4.577,4.794,4.338,0c4.652,0,7.14,2.754,7.38,7.118c0.88-5.234,5.003-4.621,5.003-4.621c0.196,2.966-2.24,4.765-5.003,4.914c-0.776-1.636-5.426-5.648-5.426-5.648C6.287,1.759,6.278,1.759,6.274,1.765C6.271,1.768,6.27,1.774,6.272,1.778C6.272,1.778,10.759,5.687,10.595,7.38 M11.994,17.684c-2.231,0.165-3.212,1.738-3.148,3.274c-0.003-0.036-0.007-0.07-0.009-0.107c-0.133-1.848,1.327-3.21,1.327-5.005c-0.172-2.322-1.869-3.287-3.462-3.133c0.101-0.012,0.204-0.022,0.313-0.028c1.848-0.133,3.212,1.327,5.005,1.327c2.082-0.157,3.074-1.537,3.146-2.969c0.022,1.75-1.331,3.079-1.331,4.81c0.165,2.23,1.736,3.21,3.271,3.148c-0.036,0.003-0.07,0.007-0.107,0.009C15.151,19.144,13.787,17.684,11.994,17.684z" />
    </svg>
  );
});

PiHole.propTypes = {
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

export default PiHole;
