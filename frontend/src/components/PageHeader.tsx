import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description?: string;
  button: boolean;
  buttonName?: string;
  buttonUrl?: string;
}

export const PageHeader = ({
  title,
  description,
  button,
  buttonName,
  buttonUrl,
}: Props) => {
  return (
    <div className='w-full flex justify-between items-center mb-5'>
      <div className='flex flex-col'>
        <div className='text-4xl font-bold -ml-0.5'>{title}</div>
        <span className='text-gray-400 text-lg font-semibold'>
          {description ?? title}
        </span>
      </div>
      <div className='flex items-center space-x-4'>
        {button && buttonUrl && (
          <Link to={buttonUrl}>
            <Button
              leftIcon={<PlusIcon className='w-4 h-4' />}
              colorScheme='green'
            >
              {buttonName}
            </Button>
          </Link>
        )}

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
    </div>
  );
};
