import React from 'react';
import PropTypes from 'prop-types';

const Graphcool = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.138 7.929c-1.167-.657-2.633.2-2.868.348l-5.037 2.857c-.744-.591-1.804-.566-2.519.06-.715.625-.881 1.671-.395 2.488s1.486 1.168 2.376.836 1.416-1.252 1.25-2.187l5.023-2.851.032-.019c.33-.209 1.096-.521 1.454-.319.258.146.405.633.417 1.35h-.006v6.301c-.001.588-.314 1.131-.823 1.426l-7.222 4.172c-.51.293-1.137.293-1.646 0l-7.222-4.172c-.509-.295-.822-.838-.823-1.426v-8.34c.001-.588.314-1.131.823-1.425l6.536-3.772c.621.713 1.664.882 2.479.4.815-.48 1.172-1.475.848-2.363-.324-.89-1.236-1.421-2.169-1.266-.934.156-1.623.955-1.641 1.901L3.262 5.823c-.942.542-1.522 1.544-1.524 2.63v8.338c.001 1.086.579 2.088 1.519 2.631l7.221 4.172c.94.541 2.097.541 3.037 0l7.222-4.172c.938-.543 1.517-1.545 1.519-2.629v-6.062h.005c.034-1.422-.347-2.363-1.123-2.802z" />
    </svg>
  );
};

Graphcool.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Graphcool.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Graphcool;
