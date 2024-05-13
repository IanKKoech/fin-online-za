import { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib';

import s from './Badge.module.scss';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: 'primary' | 'danger' | 'info' | 'warning' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: FC<BadgeProps> = (props) => {
  const {
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...rest
  } = props;
  const classes = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.danger]: variant === 'danger',
      [s.info]: variant === 'info',
      [s.warning]: variant === 'warning',
      [s.success]: variant === 'success',
      [s.outline]: variant === 'outline',
      [s.sm]: size === 'sm',
      [s.md]: size === 'md',
      [s.lg]: size === 'lg',
    },
    className
  );

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
