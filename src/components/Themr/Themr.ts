import { memo } from 'react';
import { themr as themrWrapper } from 'react-css-themr';

type ReactComponent<P, S> =
  | (new (props?: P, context?: unknown) => React.Component<P, S>)
  | React.FunctionComponent<P>;

export const themr = <P, S>(
  classOf: ReactComponent<P, S>,
  styles: Record<string, string>
) => {
  const component = memo(
    themrWrapper(classOf.constructor.name, styles)(classOf)
  );
  component.displayName = classOf.constructor.name;
  return component;
};
