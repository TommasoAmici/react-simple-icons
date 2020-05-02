import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Playstation4 = forwardRef(function Playstation4(
  { color = 'currentColor', size = 24, title = 'PlayStation 4', ...others },
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
      <path d="M12.305 13.18v-2.387c0-.487.227-.835.712-.835h2.99c.017 0 .035-.018.035-.036v-.475c0-.004 0-.008-.003-.012h-3.66c-.792.1-1.18.653-1.18 1.358v2.386c0 .483-.233.832-.71.832H7.335c-.018 0-.036.012-.036.036v.475c0 .02.01.035.023.04h3.584c.933-.025 1.393-.62 1.393-1.386zM.025 14.565h1.05c.013-.005.025-.02.025-.04v-1.52c0-.488.275-.824.676-.824H6.1c.974 0 1.446-.6 1.446-1.384 0-.706-.387-1.258-1.18-1.358H.006c0 .003-.006.005-.006.01v.475c0 .024.013.036.037.036h5.698c.484 0 .712.35.712.834s-.227.836-.712.836H1.227c-.7 0-1.226.592-1.226 1.373v1.52c0 .02.01.036.028.04zm16-.55h5.74c.017 0 .03.012.03.024v.483c0 .024.017.036.035.036h1.035c.018 0 .036-.01.036-.036v-.475c0-.018.02-.036.04-.036h1.028c.024 0 .036-.018.036-.036v-.484c0-.018-.01-.036-.035-.036h-1.03c-.02 0-.037-.017-.037-.035V9.958c0-.283-.104-.463-.28-.523h-.3c-.093.024-.195.067-.303.132l-6.182 3.817c-.24.15-.323.318-.263.445.048.104.185.182.454.182zm.896-.637l4.79-2.963c.03-.024.09-.018.09.048v2.963c0 .018-.015.036-.033.036H16.95c-.04 0-.06-.012-.065-.024-.006-.024.005-.042.036-.06z" />
    </svg>
  );
});

Playstation4.propTypes = {
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

export default Playstation4;
