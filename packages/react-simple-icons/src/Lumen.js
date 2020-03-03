import React from 'react';
import PropTypes from 'prop-types';

const Lumen = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.652 0a.75.75 0 0 0-.342.072l-4.878 2.23a.75.75 0 1 0 .624 1.366l4.878-2.23A.75.75 0 0 0 11.652 0zm5.624.354a.75.75 0 0 0-.341.074L6.428 5.306a.75.75 0 0 0 .632 1.362L17.566 1.79a.75.75 0 0 0-.29-1.436zm0 3.002a.75.75 0 0 0-.341.074L6.428 8.308A.75.75 0 0 0 7.06 9.67l10.506-4.88a.75.75 0 0 0-.29-1.435zm0 3.002a.75.75 0 0 0-.341.074L6.428 11.31a.75.75 0 0 0 .632 1.361l10.506-4.878a.75.75 0 0 0-.29-1.435zm.009 3.002a.75.75 0 0 0-.342.07l-3.753 1.688a.75.75 0 0 0-.442.685v3.518a.75.75 0 0 0 .001.047h-1.503a.75.75 0 0 0 0-.047v-2.58a.75.75 0 0 0-.761-.761.75.75 0 0 0-.74.761v2.58a.75.75 0 0 0 .002.047h-.94a.461.461 0 0 0-.47.555l.19 1.14a.687.687 0 0 0 .656.556h2.28l-2.537.476a.375.375 0 1 0 .139.737l6.003-1.126a.375.375 0 0 0 .307-.41.625.625 0 0 0 .092-.232l.19-1.141a.461.461 0 0 0-.47-.555h-.94a.75.75 0 0 0 .002-.047v-3.033l3.31-1.49a.75.75 0 0 0-.274-1.438zm-2.292 9.384a.375.375 0 0 0-.063.007l-6.004 1.126a.375.375 0 1 0 .139.737l6.003-1.125a.375.375 0 0 0-.075-.745zm0 1.876a.375.375 0 0 0-.063.008l-6.004 1.125a.375.375 0 1 0 .139.737l6.003-1.125a.375.375 0 0 0-.075-.745zm-.743 1.876a.375.375 0 0 0-.064.006l-4.471.751a.375.375 0 1 0 .124.74l4.472-.75a.375.375 0 0 0-.061-.747z" />
    </svg>
  );
};

Lumen.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lumen.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Lumen;
