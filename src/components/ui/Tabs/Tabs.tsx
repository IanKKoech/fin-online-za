import { Fragment, ReactNode } from 'react';
import { Tab as UiTab } from '@headlessui/react';
// import { cn } from '@/lib';
import cn from 'classnames';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className = '' }: Props) => {
  return (
    <UiTab as={Fragment}>
      {({ selected }) => (
        <button
          className={cn(
            'relative w-max top-[2px] border-4 border-transparent dark:text-white px-1 pb-[12px] font-medium focus:font-bold focus:outline-0',
            {
              'border-b-black font-bold': selected,
            },
            className
          )}
        >
          {children}
        </button>
      )}
    </UiTab>
  );
};

const List = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <UiTab.List
      className={cn(
        'flex gap-4 flex-wrap border-b-2 border-gray-100 dark:border-gray-300 px-6 md:gap-8',
        className
      )}
    >
      {children}
    </UiTab.List>
  );
};

const Panels = ({ children }: Props) => {
  return <UiTab.Panels>{children}</UiTab.Panels>;
};

const Panel = ({ children }: Props) => {
  return <UiTab.Panel>{children}</UiTab.Panel>;
};

type TabProps = {
  children: ReactNode;
  manual?: boolean;
  selectedIndex?: number;
  className?: string;
  onChange?: (index: number) => void;
};

export const Tabs = ({
  children,
  manual,
  className = '',
  selectedIndex,
  onChange,
}: TabProps) => {
  return (
    <div className={className}>
      <UiTab.Group {...{ manual, selectedIndex, onChange }}>
        {children}
      </UiTab.Group>
    </div>
  );
};

Tabs.Tab = Button;
Tabs.List = List;
Tabs.Panels = Panels;
Tabs.Panel = Panel;
