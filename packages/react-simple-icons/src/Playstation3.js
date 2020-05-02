import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Playstation3 = forwardRef(function Playstation3(
  { color = 'currentColor', size = 24, title = 'PlayStation 3', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M15.363 9.438h-3.148c-.97 0-1.447.6-1.447 1.38v2.366c0 .483-.228.83-.71.83H7.304c-.02 0-.035.017-.035.035v.47c0 .02.01.032.03.032h3.11c.97 0 1.45-.597 1.45-1.377V10.81c0-.484.225-.832.71-.832h2.782c.02 0 .04-.014.04-.033V9.47c0-.02-.02-.035-.04-.035zm-9.267 0H.038c-.022 0-.038.017-.038.035v.477c0 .02.016.036.038.036h5.694c.48 0 .71.347.71.83s-.228.83-.71.83H1.228c-.7 0-1.227.587-1.227 1.366v1.513c0 .02.02.037.04.037h1.03c.02 0 .04-.016.04-.037v-1.513c0-.48.28-.82.68-.82H6.1c.97 0 1.444-.595 1.444-1.375 0-.778-.473-1.38-1.442-1.38zm17.454 2.498c-.015-.015-.015-.04 0-.056.3-.25.45-.627.45-1.062 0-.778-.474-1.38-1.446-1.38h-6.057c-.02 0-.036.018-.036.038v.475c0 .02.02.04.04.04h5.7c.48 0 .715.35.715.83s-.23.83-.712.83h-5.7c-.02 0-.036.02-.036.04v.48c0 .02.016.034.037.034h5.7c.63.007.71.62.71.93v.06c0 .485-.23.833-.71.833h-5.7c-.02 0-.036.015-.036.034v.477c0 .02.015.037.036.037h6.05c.973 0 1.446-.645 1.446-1.38v-.057c0-.47-.15-.916-.45-1.19z" />
    </svg>
  );
});

Playstation3.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The <title> element provides an accessible, short-text description of any SVG
   */
  title: PropTypes.string,
};

export default Playstation3;
