import React, {
  CSSProperties,
  FC,
  JSXElementConstructor,
  ReactNode,
} from 'react';
import { cn } from '@/lib';
import s from './Flex.module.scss';

interface Props {
  as?:
    | 'div'
    | 'section'
    | 'footer'
    | 'nav'
    | JSXElementConstructor<any>
    | string;
  className?: string;
  children?: ReactNode | any;
  style?: CSSProperties;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
export const Flex: FC<Props> = ({
  as = 'div',
  className = '',
  align = 'start',
  justify = 'start',
  direction = 'row',
  children,
  ...rest
}) => {
  const Component = as;
  const classes = cn(
    s.root,
    {
      [s.alignStart]: align === 'start',
      [s.alignEnd]: align === 'end',
      [s.alignCenter]: align === 'center',
      [s.justifyStart]: justify === 'start',
      [s.justifyEnd]: justify === 'end',
      [s.justifyCenter]: justify === 'center',
      [s.justifyBetween]: justify === 'between',
      [s.justifyAround]: justify === 'around',
      [s.directionRow]: direction === 'row',
      [s.directionRowReverse]: direction === 'row-reverse',
      [s.directionColumn]: direction === 'column',
      [s.directionColumnReverse]: direction === 'column-reverse',
    },
    className
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};
