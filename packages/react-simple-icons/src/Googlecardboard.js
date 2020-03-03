import React from 'react';
import PropTypes from 'prop-types';

const Googlecardboard = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.234 4.932a2.959 2.959 0 00-2.18-.977H3.083c-.827 0-1.58.375-2.18.977C.3 5.534 0 6.361 0 7.188v9.624c0 .827.3 1.654.902 2.256a2.814 2.814 0 002.18.977H7.37a3.22 3.22 0 001.654-.45c.451-.301.902-.753 1.128-1.279l1.203-2.33c.15-.302.376-.452.677-.452.3 0 .601.15.676.451l1.203 2.331c.226.526.677.902 1.128 1.203.451.3 1.053.451 1.58.451h4.285c.827 0 1.58-.376 2.18-.977.602-.602.903-1.429.903-2.256v-9.55c.075-.826-.15-1.653-.752-2.255zm-16.617 9.55c-1.354 0-2.406-1.129-2.406-2.482 0-1.353 1.128-2.406 2.481-2.406s2.406 1.128 2.406 2.481c-.075 1.278-1.128 2.406-2.481 2.406zm10.978 0c-1.354 0-2.482-1.053-2.482-2.407 0-1.353 1.053-2.481 2.407-2.481C18.873 9.594 20 10.647 20 12c0 1.353-1.052 2.481-2.405 2.481Z" />
    </svg>
  );
};

Googlecardboard.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Googlecardboard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Googlecardboard;
