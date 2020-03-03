import React from 'react';
import PropTypes from 'prop-types';

const Swarm = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12.367 8.755l.004-.005c-.03-.058-.138-.3-.16-.364v-.002C8.828 1.474 1.314 1.72.128 4.81c-.91 2.373 3.072 8.026 12.24 3.945zM9.9 19.232c-.596-1.344-.922-2.8-.957-4.26-.964 1.49-1.69 2.987-2.176 4.104-.023.045-.38.93-.482 1.2-.13.33.045.734.383.854.273.104 1.165.42 1.22.45 1.14.374 2.716.84 4.456 1.126-1.035-.992-1.86-2.176-2.445-3.496v.022zM13.89 8.117c5.18-2.306 4.456-6.31 3.116-6.825-1.804-.693-5.08 1.974-3.205 6.62.016.033.09.17.09.205zM23.413 13.186v-.008c-.786-1.764-2.226-3.024-3.897-3.624-.168-.063-.34-.09-.51-.09-.87 0-1.707.723-1.785 1.626-.134 1.506.165 3.04.825 4.516.646 1.46 1.566 2.69 2.75 3.596.31.24.684.36 1.063.36.677 0 1.354-.36 1.623-1.005.688-1.65.722-3.586-.067-5.37zM19.482 20.918h-.004c-1.445-1.11-2.594-2.6-3.41-4.43-.826-1.86-1.164-3.738-1.004-5.586.045-.516.194-1.012.438-1.465l-.137.035c-.764.19-1.5.52-2.156.953-.95.625-1.788 1.55-2.15 2.646-.097.298-.17.62-.193.93-.116 1.48.126 3.01.77 4.462.626 1.404 1.562 2.574 2.687 3.465.684.547 1.92.89 2.93.89.95 0 1.887-.27 2.73-.704.263-.137.84-.493.878-.524-.5-.122-.973-.345-1.38-.66v-.012z" />
    </svg>
  );
};

Swarm.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Swarm.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Swarm;
