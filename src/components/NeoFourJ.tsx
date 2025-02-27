
    import * as React from 'react';

    export type NeoFourJProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const NeoFourJ = React.forwardRef<SVGSVGElement, NeoFourJProps>(function NeoFourJ({color = 'currentColor', size = 24, title = "neo4j", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M6.201 0a3.035 3.035 0 00-2.694 4.425 10.399 10.399 0 00-2.249 6.46c0 3.365 1.603 6.358 4.086 8.258A4.511 4.511 0 009.84 24c1.914 0 3.62-1.21 4.254-3.016a10.383 10.383 0 007.941-9.818c1.78-3.163.06-7.152-3.463-8.027A10.378 10.378 0 008.45.997 3.015 3.015 0 006.201 0zm5.447.986c2.246 0 4.315.746 5.975 2.004a5.493 5.493 0 103.865 8.973 9.9 9.9 0 01-7.24 8.476c.566-2.69-1.313-5.016-3.663-5.398-2.175-.353-4.578.91-5.163 3.541a9.87 9.87 0 01-3.673-7.697c0-2.268.758-4.346 2.04-6.015A3.024 3.024 0 006.2 6.071a3.038 3.038 0 002.568-4.658 9.846 9.846 0 012.879-.427zm-.96.588a.812.812 0 00-.573 1.387.812.812 0 10.572-1.387zm2.128.748a.812.812 0 10.002 1.624.812.812 0 00-.002-1.624zM5.193 6.748a.812.812 0 10.002 1.624.812.812 0 00-.002-1.624zm.135 2.225a.812.812 0 00-.577 1.385.812.812 0 10.577-1.385zm.496 2.357a.812.812 0 10.002 1.624.812.812 0 00-.002-1.624zm1.114 2.115a.812.812 0 00-.573 1.387.812.812 0 10.572-1.387zm10.156 1.211a.812.812 0 00-.573 1.387.812.812 0 10.573-1.387zM15.62 16.4a.812.812 0 00-.576 1.386.812.812 0 10.576-1.386z" />
        </svg>
      );
    });

    export default NeoFourJ
  