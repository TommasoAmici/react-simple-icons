import React from 'react';
import PropTypes from 'prop-types';

const Gitea = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M4.186 5.421C2.341 5.417-.13 6.59.006 9.531c.213 4.594 4.92 5.02 6.801 5.057.206.862 2.42 3.834 4.059 3.99h7.18c4.306-.286 7.53-13.022 5.14-13.07-3.953.186-6.296.28-8.305.296v3.975l-.626-.277-.004-3.696c-2.306-.001-4.336-.108-8.189-.298-.482-.003-1.154-.085-1.876-.087zm.261 1.625h.22c.262 2.355.688 3.732 1.55 5.836-2.2-.26-4.072-.899-4.416-3.285-.178-1.235.422-2.524 2.646-2.552zm8.557 2.315c.15.002.303.03.447.096l.749.323-.537.979a.672.597 0 0 0-.241.038.672.597 0 0 0-.405.764.672.597 0 0 0 .112.174l-.926 1.686a.672.597 0 0 0-.222.038.672.597 0 0 0-.405.764.672.597 0 0 0 .86.36.672.597 0 0 0 .404-.765.672.597 0 0 0-.158-.22l.902-1.642a.672.597 0 0 0 .293-.03.672.597 0 0 0 .213-.112c.348.146.633.265.838.366.308.152.417.253.45.365.033.11-.003.322-.177.694-.13.277-.345.67-.599 1.133a.672.597 0 0 0-.251.038.672.597 0 0 0-.405.764.672.597 0 0 0 .86.36.672.597 0 0 0 .404-.764.672.597 0 0 0-.137-.202c.251-.458.467-.852.606-1.148.188-.402.286-.701.2-.99-.086-.289-.35-.477-.7-.65-.23-.113-.517-.233-.86-.377a.672.597 0 0 0-.038-.239.672.597 0 0 0-.145-.209l.528-.963 2.924 1.263c.528.229.746.79.49 1.26l-2.01 3.68c-.257.469-.888.663-1.416.435l-4.137-1.788c-.528-.228-.747-.79-.49-1.26l2.01-3.679c.176-.323.53-.515.905-.53h.064z" />
    </svg>
  );
};

Gitea.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gitea.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gitea;
