import { FC, ReactElement, ReactNode } from 'react';
// import { cn } from '@/lib';
import cn from 'classnames';
import s from './Table.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  title?: string;
  onClick?: () => void;
}
interface TableProps {
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'right';
  size?: 'sm' | 'md';
}

interface StaticComponents {
  Head?: FC<Props>;
  Body?: FC<Props>;
  TH?: FC<Props>;
  TD?: FC<Props>;
  TR?: FC<Props>;
}

export const Table: FC<TableProps> & StaticComponents = ({
  children,
  className,
  align,
  size = 'md',
}) => {
  const classes = cn(s.table, {
    [s.right]: align === 'right',
    [s.left]: align === 'left',
    [s.sm]: size === 'sm',
    [s.md]: size === 'md',
  });
  return (
    <div className={cn('w-full overflow-auto', className)}>
      <table className={classes}>{children}</table>
    </div>
  );
};

const Head = ({ children, className }: Props) => {
  return <thead className={className}>{children}</thead>;
};

const Body = ({ children, className }: Props) => {
  return <tbody className={className}>{children}</tbody>;
};

const TH = ({ children, className, ...rest }: Props) => {
  return (
    <th className={className} {...rest}>
      {children}
    </th>
  );
};

const TD = ({ children, className, colSpan = 1, ...rest }: Props) => {
  return (
    <td colSpan={colSpan} className={className} {...rest}>
      {children}
    </td>
  );
};

const TR = ({ children, className, ...rest }: Props) => {
  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.TH = TH;
Table.TD = TD;
Table.TR = TR;

Table.displayName = 'Table';
