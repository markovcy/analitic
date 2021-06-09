declare module 'react-router-transition' {
  import { RouteProps } from 'react-router-dom';

  interface AnimatedSwitchProps {
    atEnter: React.CSSProperties;
    atLeave: React.CSSProperties;
    atActive: React.CSSProperties;
    didLeave?: (style: React.CSSProperties) => void;
    className?: string;
    wrapperComponent?: keyof HTMLElementTagNameMap;
    mapStyles?: (styles: React.CSSProperties) => React.CSSProperties;
    runOnMount?: boolean;
    children: React.ReactNode;
  }

  type AnimatedRouteProps = RouteProps;

  export const spring: (
    val: number,
    options: { damping: number; stiffness: number }
  ) => number;
  export const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;
  export const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;
  export const RouteTransition: React.ComponentClass<AnimatedSwitchProps>;
}
