import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiagramsDotNet = forwardRef(function DiagramsDotNet(
  { color = 'currentColor', size = 24, title = 'diagrams.net', ...others },
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
      <path d="M19.69 13.419h-2.527l-2.667-4.555a1.292 1.292 0 001.035-1.28V4.16c0-.725-.576-1.312-1.302-1.312H9.771c-.726 0-1.312.576-1.312 1.301v3.435c0 .619.426 1.152 1.034 1.28l-2.666 4.555H4.309c-.725 0-1.312.576-1.312 1.301v3.435c0 .725.576 1.312 1.302 1.312h4.458c.726 0 1.312-.576 1.312-1.302v-3.434c0-.726-.576-1.312-1.301-1.312h-.437l2.645-4.523h2.059l2.656 4.523h-.438c-.725 0-1.312.576-1.312 1.301v3.435c0 .725.576 1.312 1.302 1.312H19.7c.726 0 1.312-.576 1.312-1.302v-3.434c0-.726-.576-1.312-1.301-1.312zM24 22.976c0 .565-.459 1.024-1.013 1.024H1.024A1.022 1.022 0 010 22.987V1.024C0 .459.459 0 1.013 0h21.963C23.541 0 24 .459 24 1.013z" />
    </svg>
  );
});

DiagramsDotNet.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default DiagramsDotNet;
