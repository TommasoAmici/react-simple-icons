import React from 'react';
import PropTypes from 'prop-types';

const Favro = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.586 1.655a6.623 6.623 0 0 0-6.621 6.621v.772a7.503 7.503 0 0 1 3.31 3.269V8.276a3.302 3.302 0 0 1 3.31-3.31c.91 0 1.655-.745 1.655-1.655s-.745-1.655-1.655-1.655zM1.655 9.103C.745 9.103 0 9.848 0 10.758s.745 1.655 1.655 1.655a3.302 3.302 0 0 1 3.31 3.31v4.966c0 .91.745 1.655 1.655 1.655s1.655-.745 1.655-1.655v-4.966a6.623 6.623 0 0 0-6.621-6.621zm15.724 0c-3.655 0-6.621 2.966-6.621 6.621s2.966 6.621 6.621 6.621a6.583 6.583 0 0 0 3.462-.979c.262.579.841.979 1.503.979a1.66 1.66 0 0 0 1.655-1.655v-9.931a1.66 1.66 0 0 0-1.655-1.655c-.676 0-1.241.4-1.503.979a6.574 6.574 0 0 0-3.462-.979zm0 3.311c1.834 0 3.31 1.476 3.31 3.31s-1.476 3.31-3.31 3.31c-1.835 0-3.31-1.476-3.31-3.31s1.476-3.31 3.31-3.31z" />
    </svg>
  );
};

Favro.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Favro.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Favro;
