import React from 'react';
import PropTypes from 'prop-types';

const Googlemessages = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.92 3.332c-.776 0-1.216.67-.692 1.383l2.537 4.403v7.86c0 2.013 1.467 3.69 3.459 3.69H20.31a3.75 3.75 0 003.69-3.69V7.043a3.723 3.723 0 00-3.668-3.71zm5.786 3.71H20.1c.587 0 1.153.357 1.153.923 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.923 1.153-.923zm0 3.69H20.1c.587 0 1.153.356 1.153.922 0 .566-.566.922-1.153.922H6.706c-.587 0-1.153-.356-1.153-.922 0-.566.566-.922 1.153-.922zm-.021 3.71h9.705c.587 0 1.153.356 1.153.922 0 .566-.566.923-1.153.923H6.685c-.587 0-1.153-.357-1.153-.923 0-.566.566-.922 1.153-.922Z" />
    </svg>
  );
};

Googlemessages.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googlemessages.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googlemessages;
