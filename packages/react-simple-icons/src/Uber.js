import React from 'react';
import PropTypes from 'prop-types';

const Uber = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 7.97V12.93C0 14.8 1.3 16.03 3 16.03C3.83 16.03 4.56 15.71 5.09 15.16V15.9H6.27V7.97H5.08V12.86C5.08 14.12 4.23 14.97 3.14 14.97C2.03 14.97 1.19 14.14 1.19 12.86V7.97H0M7.44 7.97V15.9H8.57V15.17A2.88 2.88 0 0 0 10.63 16.03A3 3 0 0 0 13.66 13A3 3 0 0 0 10.63 10A2.86 2.86 0 0 0 8.58 10.86V7.97H7.44M17.31 10C15.62 10 14.34 11.38 14.34 13C14.34 14.73 15.68 16 17.41 16C18.47 16 19.33 15.56 19.9 14.79L19.08 14.17C18.65 14.75 18.08 15 17.41 15C16.44 15 15.66 14.32 15.5 13.38H20.2V13C20.2 11.29 18.97 10 17.31 10M23.6 10.08C22.97 10.08 22.5 10.37 22.22 10.83V10.12H21.09V15.9H22.23V12.61C22.23 11.72 22.78 11.14 23.53 11.14H24V10.07H23.6M17.29 11C18.14 11 18.85 11.59 19.04 12.47H15.5C15.73 11.59 16.44 11 17.29 11M10.55 11C11.64 11 12.53 11.9 12.53 13C12.53 14.13 11.64 15 10.55 15A2 2 0 0 1 8.56 13A2 2 0 0 1 10.55 11Z" />
    </svg>
  );
};

Uber.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Uber.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Uber;
