
    import * as React from 'react';

    export type CloudsmithProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const Cloudsmith = React.forwardRef<SVGSVGElement, CloudsmithProps>(function Cloudsmith({color = 'currentColor', size = 24, title = "cloudsmith", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M16.15 0a4.146 4.146 0 0 0-2.94 1.225c-.981.98-1.34 2.288-1.177 3.53-.458 2.548-2.843 2.908-3.889 2.94-1.176-.098-2.352.327-3.235 1.21a4.142 4.142 0 0 0 0 5.88 4.142 4.142 0 0 0 5.882 0A4.136 4.136 0 0 0 12 12.108v-.23c.097-3.104 2.777-3.529 3.92-3.561h.523c.98-.066 1.928-.458 2.647-1.21a4.142 4.142 0 0 0 0-5.88A4.146 4.146 0 0 0 16.15 0zm-.327 15.7a4.15 4.15 0 0 0-4.15 4.15 4.15 4.15 0 0 0 4.15 4.15 4.15 4.15 0 0 0 4.15-4.15 4.15 4.15 0 0 0-4.15-4.15z" />
        </svg>
      );
    });

    export default Cloudsmith
  