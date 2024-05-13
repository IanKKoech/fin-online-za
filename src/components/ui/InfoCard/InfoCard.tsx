import cn from 'classnames';

export const InfoCard = ({
  property,
  value,
}: {
  property: string;
  value: any;
}) => (
  <div className='mb-3 grid grid-cols-7'>
    <p className='col-span-3'>{property}:</p>
    <p
      title={value}
      className={cn(
        'col-span-4 text-gray-500 font-semibold max-w-[300px] truncate'
      )}
    >
      {value}
    </p>
  </div>
);
