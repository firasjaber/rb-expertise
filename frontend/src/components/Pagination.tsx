import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface Props {
  all: number;
  currentStart: number;
  currentEnd: number;
  pages: number;
}

export default function Pagination({
  all,
  currentEnd,
  currentStart,
  pages,
}: Props) {
  return (
    <div className='bg-white px-4 py-3 flex items-center rounded-lg shadow justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Previous
        </a>
        <a
          href='#'
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{currentStart}</span> to{' '}
            <span className='font-medium'>{currentEnd}</span> of{' '}
            <span className='font-medium'>{all}</span> results
          </p>
        </div>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </a>
            <a
              href='#'
              aria-current='page'
              className='z-10 bg-indigo-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            >
              1
            </a>

            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
