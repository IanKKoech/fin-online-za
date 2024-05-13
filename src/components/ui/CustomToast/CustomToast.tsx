import Link from 'next/link';
import { Toast, toast } from 'react-hot-toast';

export const CustomToast = ({
  t,
  id,
  message,
}: {
  t: Toast;
  id: number;
  message: string;
}) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white mb-4 rounded-lg pointer-events-auto flex ring-offset-4 ring ring-black/50`}
    >
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          <div className='ml-3 flex-1'>
            <p className='font-semibold mb-2'>{message}</p>
            <p>
              <Link href={`/loans/${id}`}>
                <a className='text-primary underline font-semibold'>
                  Click here
                </a>
              </Link>{' '}
              to view the loan.
            </p>
          </div>
        </div>
      </div>
      <div className='flex border-l-2 border-gray-200'>
        <button
          onClick={() => toast.dismiss(t.id)}
          className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-semibold focus:outline-none focus:ring-2 uppercase tracking-wide'
        >
          Close
        </button>
      </div>
    </div>
  );
};
