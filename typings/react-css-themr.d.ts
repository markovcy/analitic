import 'react-css-themr';

declare module 'react-css-themr' {
  export function themr(
    identifier: string | number | symbol,
    // eslint-disable-next-line @typescript-eslint/ban-types
    defaultTheme?: {},
    options?: IThemrOptions
  ): <P, S>(
    component: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (new (props?: P, context?: any) => React.Component<P, S>) | React.SFC<P>
  ) => ThemedComponentClass<
    Omit<P, 'theme'> & { theme?: S; mapThemrProps?: TMapThemrProps<P> },
    S
  >;
}
