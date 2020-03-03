import React from 'react';
import PropTypes from 'prop-types';

const Adobeindesign = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.775 15.218c0 .1-.017.132-.132.132H7.107c-.1 0-.132-.05-.132-.132V5.782c0-.1.05-.132.132-.132H8.66c.082 0 .115.033.115.116v10.752zm1.77-3.872c0-2.393 1.578-4.257 4.102-4.257.214 0 .33 0 .528.015V5.75c0-.066.05-.1.1-.1H16.9c.084 0 .1.034.1.084v9.355c0 .28 0 .625.05 1.004 0 .066-.02.083-.087.116-.858.413-1.766.595-2.624.595-2.213 0-3.797-1.37-3.797-4.158zm4.63-2.624c-.148-.066-.347-.1-.594-.1-1.285 0-2.187.99-2.187 2.64 0 1.882.918 2.64 2.073 2.64.247 0 .512-.032.71-.115v-5.065z" />
    </svg>
  );
};

Adobeindesign.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adobeindesign.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adobeindesign;
