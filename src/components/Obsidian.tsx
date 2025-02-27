
    import * as React from 'react';

    export type ObsidianProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Obsidian = React.forwardRef<SVGSVGElement, ObsidianProps>(function Obsidian({color = 'currentColor', size = 24, title = "obsidian", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M15.074 0C12.586 1.374 10.1 2.749 7.613 4.124l.823 4.266 6.365-5.015zm.172.059l-.269 3.314 4.497 2.752zm-.353 3.466L8.487 8.576l7.39 15.367 1.177-2.359L19.58 6.4c-.012-.009-4.688-2.875-4.688-2.875zm-7.425.779l-3.05 6.594L9.033 21.51l-.74-12.934-.012-.064zm1.025 4.688l.73 12.784L15.71 24Z" />
        </svg>
      );
    });

    export default Obsidian
  