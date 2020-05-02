import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Harbor = forwardRef(function Harbor({ color = 'currentColor', size = 24, title = 'Harbor', ...others }, ref) {
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
      <path d="M12.0573.0022C7.455-.0207 3.2453 2.5912 1.2218 6.7248-.8016 10.8584-.282 15.7852 2.5591 19.4059c2.841 3.6208 7.5027 5.2974 11.999 4.3153 4.4963-.982 8.0346-4.4498 9.1071-8.9254.0062-.0249.0133-.0494.0192-.0746.209-.8929.315-1.8069.3156-2.724 0-.0317-.0022-.063-.0024-.0948-.0012-.1373-.0095-.2726-.0152-.4088-.019-.2669.0399.2645 0 0 .0399.2645-.019-.2669 0 0v-.0003a11.9318 11.9318 0 00-.2045-1.7663c-.0334-.173-.0672-.3458-.1078-.5164a11.9097 11.9097 0 00-.9547-2.6018c-.0077-.0151-.0141-.0311-.0219-.046a12.0382 12.0382 0 00-1.2805-1.99c-.0694-.088-.1363-.178-.208-.2638a12.1001 12.1001 0 00-2.0533-1.9417 12.4056 12.4056 0 00-.3305-.2362 11.9978 11.9978 0 00-6.7639-2.129zm.2143 2.2105a9.7818 9.7818 0 014.9926 1.5378l-5.683 5.9103 7.8255-4.05a9.8492 9.8492 0 011.1544 1.6475c.0066.012.0123.0244.0189.0365l-8.8448 2.8423 9.7994-.3337a9.7295 9.7295 0 01.2246 1.5305l-10.178-.7304 9.985 3.4641c-.98 4.5004-4.9603 7.7119-9.5662 7.7182-.0895 0-.178-.0043-.267-.0067l-.1026-1.2554-4.7386-2.0882-.1597 1.8055c.1982.1234-.2066-.1087 0 0-.2066-.1087.1982.1234 0 0a9.787 9.787 0 01-4.5209-8.2437c-.0038-5.5141 4.5485-9.9416 10.0604-9.7846zM9.1434 5.9054a.201.201 0 00-.1943.2v.1467L6.82 8.3357v.6525h.3834v2.27H6.82v1.1125h.6088l-.1408 1.5896 3.948 1.7396-.2724-3.3292h.5167v-1.1125h-.3832v-2.27h.3832v-.6525L9.3509 6.252v-.1467a.201.201 0 00-.2075-.2zM7.8197 8.9882h2.6607v2.27h-.6312v-.9695c0-.932-1.398-.932-1.398 0v.9695h-.6315zm-.581 5.528l-.0665.7506 4.1788 1.8414-.0662-.8092zm-.1156 1.3064l-.0662.7506 4.4092 1.9431-.0662-.809zm-.1154 1.3065l-.0665.7503 4.64 2.045-.066-.8088Z" />
    </svg>
  );
});

Harbor.propTypes = {
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

export default Harbor;
