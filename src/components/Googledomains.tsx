
    import * as React from 'react';

    export type GoogledomainsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Googledomains = React.forwardRef<SVGSVGElement, GoogledomainsProps>(function Googledomains({color = 'currentColor', size = 24, title = "googledomains", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M17.29.817c-.811 0-1.388.469-1.713 1.208L13.491 7.01c-3.121-3.072-8.145-3.015-11.207.102-3.066 3.12-3.048 8.134.072 11.218a7.991 7.991 0 0 0 5.467 2.29l-.597 1.444a.942.942 0 0 0-.054.325c0 .45.379.811.83.793h5.717c.794 0 1.515-.468 1.84-1.208l8.369-20.003A.708.708 0 0 0 24 1.647a.827.827 0 0 0-.83-.83zm-3.787 6.205a7.94 7.94 0 0 1 2.399 5.609c.018 4.365-3.5 7.936-7.864 7.972h-.199Z" />
        </svg>
      );
    });

    export default Googledomains
  