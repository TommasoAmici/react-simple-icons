import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HotelsDotCom = forwardRef(function HotelsDotCom(
  { color = 'currentColor', size = 24, title = 'Hotels.com', ...others },
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
      <path d="M20.6672 1.3329c-1.4725 0-2.6661 1.1936-2.6661 2.6662v4.334L11.334 8V3.3326C11.3342 1.4927 9.8415 0 8 0 6.1584 0 4.6672 1.4928 4.6672 3.3327v17.3346C4.6672 22.5088 6.1584 24 8 24s3.3343-1.4912 3.3343-3.3327v-5.3338h6.6669v5.3338c0 1.4726 1.1936 2.6661 2.6661 2.6661 1.4726 0 2.6662-1.1935 2.6662-2.666V3.9991c0-1.4725-1.1936-2.6661-2.6662-2.6661M4 3.333c0-.5379.1085-1.051.3023-1.5206-.975.5812-1.6354 1.6353-1.6354 2.8537v15.335c0 1.4323.9084 2.6429 2.1779 3.114C4.3178 22.4379 4 21.59 4 20.6677zm-1.698-.1874C1.327 3.7269.6666 4.7825.6666 5.9993v12.6673c0 1.2184.6604 2.2724 1.6354 2.8537a3.9658 3.9658 0 0 1-.3023-1.5206V4.6662c0-.5379.1085-1.051.3023-1.5206m15.0318.854c0-.6976.217-1.344.5844-1.8803-1.1052.3256-1.9175 1.3362-1.9175 2.5468v2.9002l1.3331.0668zm0 12.0004h-1.333v4.0008c0 1.2106.8122 2.2212 1.9174 2.5467-.3674-.5363-.5844-1.1827-.5844-1.8802zm-3.3334 3.3335c0 1.2106.8122 2.2212 1.919 2.5467-.369-.5363-.586-1.1827-.586-1.8802v-4.0008h-1.333zm1.3333-14.6671c0-.6976.217-1.344.5844-1.8803-1.1052.3256-1.9174 1.3362-1.9174 2.5468v2.133l1.333.0667Z" />
    </svg>
  );
});

HotelsDotCom.propTypes = {
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

export default HotelsDotCom;
