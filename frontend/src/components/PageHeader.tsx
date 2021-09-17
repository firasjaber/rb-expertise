import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';

interface Props {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <div className='w-full flex justify-between items-center mb-5'>
      <div className='flex flex-col'>
        <div className='text-4xl font-bold -ml-0.5'>{title}</div>
        <span className='text-gray-400 text-lg font-semibold'>
          {description ?? title}
        </span>
      </div>
      <div className='w-100'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={
              <SearchIcon className='text-gray-300 w-6 h-6 mt-3 ml-3' />
            }
          />
          <Input
            type='text'
            placeholder='Search for things...'
            bg='white'
            rounded='3xl'
            padding='25px'
            pl='45px'
            pr='5px'
          />
        </InputGroup>
      </div>
    </div>
  );
};
