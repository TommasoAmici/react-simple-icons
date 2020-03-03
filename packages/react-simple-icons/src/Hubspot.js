import React from 'react';
import PropTypes from 'prop-types';

const Hubspot = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M18.164 7.931V5.085a2.198 2.198 0 0 0 1.266-1.978V3.04A2.199 2.199 0 0 0 17.238.847h-.067a2.199 2.199 0 0 0-2.193 2.192v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.009-7.828-6.096a2.497 2.497 0 1 0-1.157 1.515l-.012.006 7.696 5.991a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.606l-.013-.019-2.342 2.342a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.099-.595l.004.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.133l-.036-.005zm-.964 9.377a3.206 3.206 0 1 1 3.214-3.206v.002a3.206 3.206 0 0 1-3.206 3.206z" />
    </svg>
  );
};

Hubspot.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hubspot.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Hubspot;
