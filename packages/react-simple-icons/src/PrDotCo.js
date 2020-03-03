import React from 'react';
import PropTypes from 'prop-types';

const PrDotCo = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.9998 4.67c1.876 0 3.7518.7157 5.1832 2.1468l.0167.0167.0053.0055.0014.0015.0016.0014c.9304.9393 1.5546 2.0673 1.873 3.2602l1.7906-1.7905c.7157-.7157 1.8761-.7157 2.5916 0 .7157.7155.7157 1.8758 0 2.5913l-6.2802 6.2803c-1.4314 1.4314-3.3073 2.1468-5.1832 2.1468-1.8758 0-3.7517-.7154-5.1831-2.1468-.9442-.9442-1.5768-2.0816-1.898-3.285L3.128 15.6887c-.7154.716-1.8758.716-2.5915 0-.7153-.7155-.7153-1.8758 0-2.5915l6.2478-6.2477a4.8688 4.8688 0 01.0324-.0326h.0002-.0002.0002C8.248 5.3857 10.1239 4.67 11.9999 4.67zm2.5918 9.9216c1.431-1.4312 1.431-3.752 0-5.1832-1.4314-1.4312-3.7521-1.4312-5.1833 0v.0002c-1.4314 1.431-1.4314 3.752 0 5.1832 1.4312 1.4312 3.7517 1.431 5.1831 0h.0002Z" />
    </svg>
  );
};

PrDotCo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PrDotCo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PrDotCo;
