import React from 'react';
import PropTypes from 'prop-types';

const Bmcsoftware = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.389 23.97c-.948 0-1.946-.747-1.946-2.194v-3.392c0-1.346.848-2.892 2.045-3.54l4.739-2.794-4.739-2.793c-1.147-.749-2.045-2.245-2.045-3.592V2.224C4.443.777 5.441.029 6.44.029c.399 0 .847.1 1.246.35L18.36 6.712c.748.449 1.147 1.147 1.147 1.845 0 .749-.45 1.447-1.147 1.846L15.816 11.9l2.544 1.497c.748.449 1.197 1.147 1.197 1.845 0 .748-.45 1.447-1.197 1.846L7.685 23.622c-.448.25-.847.349-1.296.349zm7.132-10.573l-5.836 3.441c-.448.25-.897 1.048-.897 1.546v3.043l10.125-5.985zM6.788 2.623v3.042c0 .5.449 1.297.897 1.547l5.836 3.441 3.442-2.045z" />
    </svg>
  );
};

Bmcsoftware.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bmcsoftware.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bmcsoftware;
