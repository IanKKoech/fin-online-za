import { FC, InputHTMLAttributes, useId } from 'react';
import { cn } from '@/lib';

import s from './InputButton.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  active?: boolean;
  label?: string;
  type?: 'checkbox' | 'radio';
}

export const InputButton: FC<Props> = (props) => {
  const uid = useId();
  const { children, label, className, id, type = 'checkbox', ...rest } = props;
  return (
    <span className={cn(s.root)}>
      {label && <span className='mb-3 block dark:text-white'>{label}</span>}
      <input id={id || uid} type={type} {...rest} />
      <label htmlFor={id || uid} className={className}>
        {children}
      </label>
    </span>
  );
};
