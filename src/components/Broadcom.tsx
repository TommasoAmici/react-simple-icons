
    import * as React from 'react';

    export type BroadcomProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Broadcom = React.forwardRef<SVGSVGElement, BroadcomProps>(function Broadcom({color = 'currentColor', size = 24, title = "broadcom", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0C5.37 0 0 5.37 0 12A12 12 0 0 0 .574 15.62C.848 15.5 1.14 15.36 1.43 15.24C2.8 14.7 4.06 14.88 5.31 15.64C5.31 15.64 5.77 15.92 5.91 16C6.5 16.38 7.05 16.73 7.58 16.73C8.09 16.73 8.59 16.59 8.8 15.61C9.13 14.08 9.94 10.31 10.29 8.45C10.5 7.35 10.61 6.76 10.73 6.36C10.93 5.65 11.31 5.27 11.84 5.21C11.84 5.21 11.93 5.2 12 5.2C12.07 5.2 12.15 5.21 12.15 5.21C12.69 5.27 13.07 5.65 13.28 6.36C13.39 6.76 13.5 7.35 13.71 8.45C14.06 10.31 14.87 14.08 15.2 15.61C15.41 16.59 15.91 16.73 16.42 16.73C16.95 16.73 17.5 16.38 18.09 16C18.23 15.92 18.69 15.64 18.69 15.64C19.95 14.88 21.2 14.7 22.57 15.24C22.87 15.36 23.16 15.5 23.44 15.63A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0M12 9.79C11.6 11.8 11 14.71 10.7 16C10.34 17.7 9.2 18.66 7.58 18.66C6.5 18.66 5.64 18.12 4.88 17.65C4.5 17.4 4.08 17.13 3.63 17A2.32 2.32 0 0 0 2.21 16.97A6.11 6.11 0 0 0 1.27 17.36A12 12 0 0 0 12 24A12 12 0 0 0 22.73 17.35A6.08 6.08 0 0 0 21.79 16.96A2.32 2.32 0 0 0 20.38 16.97C19.92 17.13 19.5 17.4 19.12 17.65C18.36 18.12 17.5 18.66 16.42 18.66C14.8 18.66 13.67 17.7 13.3 16C13 14.71 12 9.79 12 9.79Z" />
        </svg>
      );
    });

    export default Broadcom
  