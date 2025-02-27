
    import * as React from 'react';

    export type DailymotionProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Dailymotion = React.forwardRef<SVGSVGElement, DailymotionProps>(function Dailymotion({color = 'currentColor', size = 24, title = "dailymotion", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M14.068 11.313c-1.754 0-3.104 1.427-3.104 3.11 0 1.753 1.35 3.085 3.255 3.085l-.016.002c1.59 0 2.925-1.31 2.925-3.04 0-1.8-1.336-3.157-3.062-3.157zM0 0v24h24V0H0zm20.693 20.807h-3.576v-1.41c-1.1 1.08-2.223 1.47-3.715 1.47-1.522 0-2.832-.495-3.93-1.485-1.448-1.275-2.198-2.97-2.198-4.936 0-1.8.7-3.414 2.01-4.674 1.17-1.146 2.595-1.73 4.185-1.73 1.52 0 2.69.513 3.53 1.59V4.157l3.693-.765V3.39l.002.003h-.002v17.414z" />
        </svg>
      );
    });

    export default Dailymotion
  