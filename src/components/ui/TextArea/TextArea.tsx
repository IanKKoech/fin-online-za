import { FC, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: FC<Props> = (props) => {
  const { label, required, className, ...rest } = props;
  return (
    <label>
      {label && (
        <span className='mb-3 block dark:text-white'>
          {label}
          {required && <span className='text-danger'>*</span>}
        </span>
      )}
      <textarea
        required={required}
        className={cn(
          'w-full rounded border bg-transparent dark:text-white dark:ring-offset-blue-dark dark:border-gray-300 dark:focus:border-gray-300 border-gray-100 py-3 px-5 placeholder:text-gray-200 focus:border-gray-100 focus:outline-0 focus:ring focus:ring-primary focus:ring-offset-2 2xl:py-4',
          className
        )}
        {...rest}
      />
    </label>
  );
};
