import React from 'react';
import PropTypes from 'prop-types';

const Adobephotoshop = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm4.8 4.48c0-.067.14-.116.224-.116.644-.033 1.588-.05 2.578-.05 2.772 0 3.85 1.52 3.85 3.466 0 2.54-1.842 3.63-4.102 3.63-.38 0-.51-.017-.775-.017v3.842c0 .083-.033.116-.115.116H5.916c-.083 0-.115-.03-.115-.113V5.78zm1.775 5.312c.23.016.412.016.81.016 1.17 0 2.27-.412 2.27-1.996 0-1.27-.786-1.914-2.122-1.914-.396 0-.775.016-.957.033v3.864zm8.607-1.188c-.792 0-1.056.396-1.056.726 0 .363.18.61 1.237 1.155 1.568.76 2.062 1.485 2.062 2.557 0 1.6-1.22 2.46-2.87 2.46-.876 0-1.62-.183-2.05-.43-.065-.033-.08-.082-.08-.165V14.74c0-.1.048-.133.114-.084.624.413 1.352.594 2.012.594.792 0 1.122-.33 1.122-.776 0-.363-.23-.677-1.237-1.205-1.42-.68-2.014-1.37-2.014-2.527 0-1.287 1.006-2.36 2.755-2.36.86 0 1.464.132 1.794.28.082.05.1.132.1.198v1.37c0 .083-.05.133-.15.1-.444-.264-1.1-.43-1.743-.43z" />
    </svg>
  );
};

Adobephotoshop.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adobephotoshop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adobephotoshop;
