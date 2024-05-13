import { cn } from '@/lib';

export const Divider = ({ className = '' }) => {
  return (
    <hr className={cn('border-gray-100 dark:border-gray-300', className)} />
  );
};
