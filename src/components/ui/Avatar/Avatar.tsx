import { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib';

import s from './Avatar.module.scss';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    name,
    size = 'md',
    variant = 'primary',
    ...rest
  } = props;
  const names = name.split(' ');
  const classes = cn(
    s.root,
    {
      [s.sm]: size === 'sm',
      [s.md]: size === 'md',
      [s.lg]: size === 'lg',
      [s.secondary]: variant === 'secondary',
      [s.primary]: variant === 'primary',
      [s.danger]: variant === 'danger',
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {src ? (
        <img
          src={src}
          alt={name}
          className='w-full h-auto object-cover rounded-full'
        />
      ) : (
        <>
          {names.length > 1
            ? `${names[0][0]}${names[names.length - 1][0]}`
            : `${names[0][0]}`}
        </>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
