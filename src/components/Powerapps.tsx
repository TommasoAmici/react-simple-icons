
    import * as React from 'react';

    export type PowerappsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Powerapps = React.forwardRef<SVGSVGElement, PowerappsProps>(function Powerapps({color = 'currentColor', size = 24, title = "powerapps", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m11.4818 22.3686-.6199.7085c-.3961.4527-1.1003.4527-1.4964 0L.246 12.6547a.9942.9942 0 0 1 0-1.3094L9.3656.9229c.3961-.4527 1.1003-.4527 1.4964 0l.6203.7089-3.1295 3.4134c-.5166.5635-.5166 1.4136 0 1.9776l4.2755 4.6637a.4606.4606 0 0 1 .001.626l-4.2765 4.6652c-.5156.5625-.5161 1.4131 0 1.9776l3.129 3.4133zm6.4767-4.8675-3.8068-4.1525c-.7041-.7696-.7041-1.9288-.001-2.6969l3.8077-4.153c.2783-.3043.6746-.4793 1.0865-.4841L14.327.8678c-.3942-.4301-1.0723-.4301-1.4665 0L8.7214 5.383a.9634.9634 0 0 0 0 1.3018l4.2756 4.6643a.9632.9632 0 0 1 0 1.3018l-4.2756 4.6643a.9634.9634 0 0 0 0 1.3018l4.139 4.5152c.3942.4301 1.0723.4301 1.4665 0l4.7177-5.1465c-.4115-.005-.8078-.1803-1.0861-.4846zm-3.4381-6.5118c-.5242.5718-.5242 1.4495 0 2.0213l3.8064 4.1524c.3958.4317 1.0764.4317 1.4721 0l3.8092-4.1555c.5226-.5701.5226-1.4451 0-2.0152l-3.8092-4.1555c-.3958-.4317-1.0764-.4317-1.4721 0l-3.8064 4.1525z" />
        </svg>
      );
    });

    export default Powerapps
  