
    import * as React from 'react';

    export type DaskProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Dask = React.forwardRef<SVGSVGElement, DaskProps>(function Dask({color = 'currentColor', size = 24, title = "dask", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M10.023 17.416a14.223 14.223 0 0 1-4.027 1.195l-.793.112.402-.692a15.75 15.75 0 0 0 .723-1.401 15.498 15.498 0 0 0 1.386-5.855l.012-.328.325-.043a15.683 15.683 0 0 0 7.048-2.801 13.41 13.41 0 0 0 2.424-4.356A14.227 14.227 0 0 1 6.977 9.115l-.663.046.014.666a14.08 14.08 0 0 1-1.268 6.228 14.276 14.276 0 0 1-1.805 2.958l-.873 1.108 1.412.02a15.558 15.558 0 0 0 6.2-1.207 13.596 13.596 0 0 0 .03-1.518zm8.197-6.437c.536-1.19 1.099-4.145 1.063-4.366a16.444 16.444 0 0 1-1.971 2.922c-.11.292-.227.583-.357.87a14.203 14.203 0 0 1-4.126 5.28q.11.8.14 1.612a15.578 15.578 0 0 0 5.251-6.318zm3.328-.767q.022-.24.037-.478a15.598 15.598 0 0 0-1.598-7.95L19.098 0l-.412 1.953a14.223 14.223 0 0 1-8.378 10.15l-.612.258.232.623a14.075 14.075 0 0 1 .824 6.3 14.276 14.276 0 0 1-.746 3.384L9.536 24l1.341-.441a15.616 15.616 0 0 0 10.67-13.347zM12.45 21.398l-.714.363.155-.786a15.701 15.701 0 0 0 .228-1.56 15.508 15.508 0 0 0-.59-5.986l-.095-.315.293-.146a15.688 15.688 0 0 0 7.339-7.72l.458-1.044.276 1.106a14.043 14.043 0 0 1 .35 4.767 14.153 14.153 0 0 1-7.7 11.32z" />
        </svg>
      );
    });

    export default Dask
  